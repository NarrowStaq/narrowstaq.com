# narrowstaq.com

Static marketing site for Narrowstaq (fractional CTO & technical leadership), built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

- `src/config.ts`: booking link, email, social links, SEO title/description
- `src/components/`: one file per homepage section (Hero, Signals, Services, Process, About, Faq, Cta)
- `src/styles/global.css`: color tokens, type, buttons, scroll-reveal

## Link-preview image

`public/og.png` (1200×630) is the image shown when the site is shared on LinkedIn, Slack, etc.
To change it, edit `design/og-image.html`, then re-render:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --allow-file-access-from-files --force-device-scale-factor=1 --virtual-time-budget=3000 \
  --window-size=1200,630 --screenshot=public/og.png "file://$PWD/design/og-image.html"
```

## Deploy

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
The custom domain is set in the repo's Settings → Pages (a `CNAME` file isn't used with Actions deploys).
DNS is managed in Cloudflare; the domain is registered at Namecheap.
