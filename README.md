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

## Deploy

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
The custom domain is set in the repo's Settings → Pages (a `CNAME` file isn't used with Actions deploys).
DNS is managed in Cloudflare; the domain is registered at Namecheap.
