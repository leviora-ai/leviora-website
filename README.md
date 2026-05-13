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
ArgoCD image-updater (k8s/argocd-application.yaml ayrı Application)
    ↓
Hetzner k3s · namespace `leviora-website` · Traefik Ingress · cert-manager TLS
    ↓
https://leviora.ai  (www → apex redirect, Let's Encrypt prod)
```

### İlk kurulum (one-time)

```bash
# 1. ArgoCD Application'ı uygula (pandora-infra GitOps tree'sinden bağımsız)
kubectl apply -f k8s/argocd-application.yaml

# 2. DNS doğrulaması: leviora.ai + www.leviora.ai → Hetzner cluster IP
#    Memory: leviora.ai zaten Resend email için verified, A record set

# 3. cert-manager letsencrypt-prod ClusterIssuer cluster'da mevcut olmalı
#    (pandora-infra'da kurulu — sadece referans, kopyalama gerekmez)
```

### Sonraki deploy'lar

`git push origin main` yeterli. ArgoCD image-updater yeni `sha-<7>` digest'ini saniyeler içinde alır, rollout başlatır.

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
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── certificate.yaml
│   ├── ingress.yaml        # leviora.ai + www → apex redirect (Traefik middleware)
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
