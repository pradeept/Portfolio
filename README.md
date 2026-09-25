# Pradeep’s portfolio

A single-page, light-theme zine portfolio based on [`prototypes/portfolio-zine-remix.html`](prototypes/portfolio-zine-remix.html). The other standalone HTML explorations and their shared assets live in `prototypes/`.

Fraunces, Caveat, and DM Mono are bundled as local Latin font subsets in `app/fonts/`, with their license notices in `app/fonts/licenses/`.

## Run locally

```sh
pnpm install
pnpm dev
```

Open <http://localhost:3000>. For production, run `pnpm build` and `pnpm start`.

## Edit the content

- Projects, work history, and paper cards: [`lib/content.ts`](lib/content.ts).
- The paper cards deliberately have no reference links yet. Add HTTPS PDF URLs to each card’s `pdfLinks` list when ready; the “Reference PDF coming soon” stub then disappears.
- The X contact tab deliberately says “coming soon”. Add its profile URL in [`components/interactive.tsx`](components/interactive.tsx) when ready.
- The contact email, LinkedIn, GitHub, and TryHackMe links are currently in the page or interactive components.
- The CV served by the app is `public/downloads/Pradeep CV.pdf`. Update both it and the archived prototype copy if you want both to match.

## Medium posts

The Field notes section reads the public feed at `https://medium.com/feed/@pradeep.tarakar17` on the server. The newest post gets the large card, followed by three smaller cards. Next.js caches the feed for up to one hour. If the feed fails or has no usable posts, the site displays the verified snapshot in [`lib/medium.ts`](lib/medium.ts). Update that snapshot when changing the Medium account or if you want a newer offline fallback.

## Deploy to Vercel

Import this folder as a Next.js project. Vercel will detect pnpm via `pnpm-lock.yaml`. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin when the domain is known; the application works without it for previews. No other environment variables are needed.

## Checks

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```
