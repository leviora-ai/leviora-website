# leviora-website

Marketing site for [leviora.ai](https://leviora.ai) — operasyona özel yapay zeka.

Statik HTML / CSS / JS landing page. **pandora-* platform stack'ından ayrı pipeline'da deploy edilir** — kendi GHCR image build'i, kendi ArgoCD Application'ı.

## Stack

- `index.html` — 463 satır, semantik HTML; tek sayfa (hero + manifesto + see/think/act + kurulum + motto + footer)
- `leviora.css` — 1118 satır, design system (Instrument Serif + Geist + Oxanium fonts, krem zemin, mor aksent)
- `leviora.js` — 102 satır, tab switching + scroll reveal + hover parallax
- `assets/leviora-logo.svg` — markalı SVG logo (gradient'lı)
- nginx:1.27-alpine static serving (port 8080, non-root, read-only rootfs)

Design tasarlanırken çıkış noktası: "AI'ın yaptığı belli olmasın". Editöryel/dergi karakteri, mor "noktasal vurgu", tipografi öncelikli.

## Local development

```bash
# Open index.html doğrudan tarayıcıda (Google Fonts CDN'den font'lar gelir)
open index.html

# Container build + run
docker build -t leviora-website:dev .
docker run --rm -p 8080:8080 leviora-website:dev
# -> http://localhost:8080
```

## Deployment pipeline (ayrı — pandora-* platform'undan bağımsız)

```
push to main
    ↓
GitHub Actions (build.yml)
    ↓
docker buildx → ghcr.io/leviora-ai/leviora-website:sha-<7> + :latest
    ↓
ArgoCD auto-sync (k8s/argocd-application.yaml ayrı Application)
    ↓
Hetzner k3s · namespace `leviora-website` · nginx-ingress · cert-manager TLS
    ↓
https://leviora.ai  (www → apex 308 redirect, Let's Encrypt prod)
```

### İlk kurulum (one-time)

**Önce DNS** — `leviora.ai` + `www.leviora.ai` A kayıtları `178.105.28.21` (Hetzner pilot VM) işaret etmeli. Doğrulama:

```bash
dig +short leviora.ai @8.8.8.8       # → 178.105.28.21
dig +short www.leviora.ai @8.8.8.8   # → 178.105.28.21
```

DNS propagate etmeden ArgoCD apply ETME — cert-manager HTTP-01 challenge fail eder ve Let's Encrypt rate limit'ini yer.

```bash
# 1. ArgoCD Application'ı uygula (pandora-infra GitOps tree'sinden bağımsız)
kubectl --context <hetzner-pilot> apply -f k8s/argocd-application.yaml

# 2. Sync'i izle
kubectl --context <hetzner-pilot> -n argocd get application leviora-website -w

# 3. Cert'in çıkışını bekle (~30-90 sn)
kubectl --context <hetzner-pilot> -n leviora-website get certificate leviora-website-tls -w

# 4. Canlı doğrulama
curl -I https://leviora.ai
```

### Sonraki deploy'lar

`git push origin main` → GHA build (~25s) → GHCR `:latest` yenilenir. Pod'u yeni image'ı çekmesi için:

```bash
# Manifest değişikliği varsa (k8s/ altında): ArgoCD auto-sync yeter
# Sadece image güncellemesi (imagePullPolicy: Always pinned to :latest):
argocd app sync leviora-website
# veya
kubectl --context <hetzner-pilot> -n leviora-website rollout restart deploy/leviora-website
```

argocd-image-updater Hetzner cluster'da kurulu DEĞİL — kurulunca digest-based annotation'lar açılır, manuel sync ihtiyacı kalkar.

## Repo dizini

```
.
├── Dockerfile              # nginx:1.27-alpine, port 8080, non-root
├── nginx.conf              # gzip + cache headers + healthz + security headers
├── index.html              # design bundle'dan as-is
├── leviora.css             # design bundle'dan as-is
├── leviora.js              # design bundle'dan as-is
├── assets/leviora-logo.svg
├── k8s/                    # Kustomize manifests (ayrı ArgoCD app)
│   ├── kustomization.yaml
│   ├── namespace.yaml
│   ├── deployment.yaml     # imagePullPolicy: Always (:latest tag flow)
│   ├── service.yaml
│   ├── ingress.yaml        # nginx-ingress; cert-manager annotation; www→apex 308 redirect ingress
│   └── argocd-application.yaml
└── .github/workflows/
    └── build.yml           # buildx → GHCR + kustomize render validation
```

## Brand kuralları (referans)

| Token | Değer |
|---|---|
| Cream zemin | `#F4F0E8` |
| Ink | `#15131A` |
| Purple deep | `#4E2F91` |
| Purple mid | `#7D499D` |
| Purple soft | `#F0E2EF` |
| Serif display | Instrument Serif (italic vurgular) |
| Sans body | Geist 300-700 |
| Display numbers | Oxanium |

## İçerik güncelleme

Copy değişikliği = `index.html` edit + `git push`. Yeni section = mevcut `<section>` pattern'ini kopyala (`.eyebrow`, `.btn`, `.chat`, vb. utility class'lar zaten CSS'de). Yeni render-time JS gerekmiyorsa `leviora.js`'e dokunma.

Image asset eklerken `assets/` altına koy + `<img src="/assets/...">` ile referans ver. Dockerfile zaten tüm `assets/`'ı kopyalıyor.
