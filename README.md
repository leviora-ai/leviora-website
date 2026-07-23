# leviora-website

Marketing site for [leviora.ai](https://leviora.ai) — operational AI, built for industry.

**Astro static site + tiny contact API**, Figma tasarımından birebir (file `5JyYz4ob9uX9bvvqBADLSW`). **pandora-\* platform stack'inden ayrı pipeline'da deploy edilir** — kendi GHCR image build'leri, kendi ArgoCD Application'ı.

## Stack

- **Astro 5** (static output, SSR yok) — 15 sayfa: EN kökte (`/`, `/product/`, `/solutions/`, `/contact/`, legal), TR `/tr/` altında; typed i18n dictionary (`src/i18n/en.ts` + `tr.ts`, eksik key = type error)
- **Token-based vanilla CSS** (`src/styles/tokens.css`) — Tailwind yok, UI framework yok
- **Fontlar self-hosted** (fontsource): Oxanium Variable (display), Argentum Sans 200-600 (body), Exo 400 (product layer kartları); preload'lu
- **Motion kütüphanesiz**: IntersectionObserver reveal (`reveal.ts`), chat oynatımı (`chat-play.ts`), scroll-zoom kolaj (`statement-zoom.ts`), offset-path veri noktaları, hero tab döngüsü — hepsi `prefers-reduced-motion` korumalı, yalnızca transform/opacity
- **`api/`** — Hono + zod + Resend: `POST /api/contact` → info@leviora.ai (honeypot + per-pod rate limit 5/10dk)
- nginx:1.27-alpine static serving (port 8080, non-root, read-only rootfs); MPA `=404` + `/404.html` (SPA fallback YOK)

## Local development

```bash
npm install && npm run dev          # site → http://localhost:4321
cd api && npm install && npm run dev # api  → http://localhost:8080

# Container build + run
docker build -t leviora-website:dev .
docker build -t leviora-website-api:dev -f api/Dockerfile api/
docker run --rm -p 8080:8080 leviora-website:dev

# Tam yerel deploy (web + api, form dahil) → http://localhost:8088
docker build -t leviora-website:local . && docker build -t leviora-website-api:local -f api/Dockerfile api/
docker compose -f compose.local.yml up -d
# Gerçek mail testi: RESEND_API_KEY=re_... docker compose -f compose.local.yml up -d
```

Kontroller: `npm run check` (astro check), `npm run build`, `kubectl kustomize k8s/`.

## Deployment pipeline (pandora-\*'dan bağımsız)

```
push to main
    ↓
GitHub Actions (build.yml): verify-site + verify-api → matrix build
    ↓
ghcr.io/leviora-ai/leviora-website:latest  +  ghcr.io/leviora-ai/leviora-website-api:latest  (+ :sha-<7>)
    ↓
ArgoCD auto-sync (k8s/argocd-application.yaml)
    ↓
Hetzner k3s · namespace leviora-website · nginx-ingress · cert-manager TLS
    ↓
https://leviora.ai   (/api → api service; www → apex 308)
```

`:latest` + `imagePullPolicy: Always` — image güncellemesi pod yenilenince gelir:

```bash
argocd app sync leviora-website
# veya
kubectl -n leviora-website rollout restart deploy/leviora-website deploy/leviora-website-api
```

### Pre-cutover checklist (contact form çalışsın diye)

1. **Resend secret** (commit edilmez, one-time):
   ```bash
   kubectl -n leviora-website create secret generic leviora-api-secrets \
     --from-literal=RESEND_API_KEY=re_...
   ```
2. **Resend'de `leviora.ai` domain doğrulaması** (DKIM/SPF) — yoksa `noreply@leviora.ai` gönderimi bounce eder.
3. Prod smoke: `curl -I https://leviora.ai` → 200; form e2e → info@leviora.ai'ye mail düşmeli.

## Repo dizini

```
.
├── astro.config.mjs        # i18n (en kök, tr prefix), sitemap
├── src/
│   ├── i18n/               # typed dictionaries: types.ts, en.ts, tr.ts, ui.ts
│   ├── layouts/            # BaseLayout (meta/OG/hreflang/canonical), LegalLayout
│   ├── components/         # nav, ui (Button/Eyebrow/SectionHeading/ChatWindow/...), faq, cta, forms, pages/sections
│   ├── scripts/            # reveal, chat-play, statement-zoom, hero-graph, nav, faq, setup-accordion, lang-dropdown, contact-form
│   ├── styles/             # tokens.css, global.css
│   └── pages/              # index/product/solutions/contact/privacy/terms/kvkk/404 + tr/*
├── public/assets/          # leviora-wordmark.svg, leviora-icon.svg, diagrams/ (webp), og/
├── api/                    # Hono contact servisi (kendi Dockerfile + package.json)
├── Dockerfile              # multi-stage: node:20 build → nginx:1.27-alpine
├── nginx.conf              # =404 + /404.html, /_astro/ immutable cache, healthz
├── k8s/                    # kustomize: web+api deployment/service, ingress (/api), argocd app
└── .github/workflows/build.yml
```

## Brand token'ları (Figma'dan doğrulanmış)

| Token | Değer |
|---|---|
| Zemin (koyu) | `#070707` / panel `#120C26` |
| Ink (koyu zeminde) | `#ECEAF2` |
| Purple (primary/buton) | `#4E2F90` (ok kutusu `#432680`) |
| Purple heading accent | `#9582BD` |
| Display | Oxanium Variable |
| Body | Argentum Sans 200–600 |

## İçerik güncelleme

Copy = `src/i18n/en.ts` + `tr.ts` (iki dilde aynı key'ler; TS eksik çeviriyi derlemede yakalar). Yeni section = `src/components/pages/sections/` altında component + i18n namespace. Görsel eklerken `public/assets/` altına WebP koy.
