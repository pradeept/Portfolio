# Pradeep’s portfolio

A single-page, light-theme zine portfolio based on [`prototypes/portfolio-zine-remix.html`](prototypes/portfolio-zine-remix.html). The other standalone HTML explorations and their shared assets live in `prototypes/`.

Fraunces, Caveat, and DM Mono are bundled as local Latin font subsets in `app/fonts/`, with their license notices in `app/fonts/licenses/`.

## Run locally

```sh
pnpm install
pnpm dev
```

Open <http://localhost:3000>. For production, run `pnpm build` and `pnpm start`.

The build script uses the default Next.js bundler. `pnpm-workspace.yaml` pins the local virtual store layout to keep local script runs and CI installs consistent.

## Edit the content

- Projects, work history, and paper cards: [`lib/content.ts`](lib/content.ts).
- The paper cards deliberately have no reference links yet. Add HTTPS PDF URLs to each card’s `pdfLinks` list when ready; the “Reference PDF coming soon” stub then disappears.
- X, email, and LinkedIn links: [`components/portfolio/contact-links.tsx`](components/portfolio/contact-links.tsx). GitHub is in `contact-section.tsx`; TryHackMe is in `security-section.tsx`.
- The hero’s “Start a conversation” CTA opens Connect. The CV is archived in `prototypes/` and is not served by the app.

## Application structure

```text
app/                        Route composition, layout, metadata, global styles
components/portfolio/       Server components for the portfolio sections
components/interactive/     Client components: menu, shuffle, badge, motion
components/ui/              Shared SVG doodles, diya, section heading
lib/content.ts              Projects, experience, and paper shelf data
lib/navigation.ts           Shared navigation labels and destinations
lib/medium.ts               Pure feed normalization and types
lib/medium-feed.ts          Server-only RSS fetch and parsing
lib/medium-snapshot.ts      Saved articles for feed failures
prototypes/                 Original HTML explorations, assets, and CV
```

The structure follows the relevant Vercel React best-practice rules:

- **`server-serialization`**: static sections, desktop navigation, and contact links remain server components. Only the four interactive components hydrate; article and project data stay on the server.
- **`async-suspense-boundaries`**: Field notes owns its async fetch and Suspense boundary, so the rest of the page can render while the feed resolves. Its loading state preserves the paper-card layout.
- **`bundle-barrel-imports`**: Phosphor icons use direct imports, with SSR variants in server components. The collage uses Motion’s `m` components and `LazyMotion` with the animation feature set.
- **`client-event-listeners`**: one motion controller observes reveals, including streamed content. Listeners and observers are cleaned up; reduced-motion preference changes are handled while the page is open.
- **`server-hoist-static-io`**: fonts stay local and declared at module scope; the portrait has responsive image sizes.

Directional marks are SVGs in [`components/ui/doodles.tsx`](components/ui/doodles.tsx), not Unicode arrows. They inherit the surrounding ink color and are decorative for screen readers, avoiding phone emoji-font substitutions.

Reveals use the Web Animations API without changing rendered classes or inline attributes. This lets the controller handle streamed Field notes without modifying markup that React is still hydrating.

References: [Next.js server/client boundaries](https://nextjs.org/docs/app/getting-started/server-and-client-components), [Phosphor SSR icons](https://github.com/phosphor-icons/react#react-server-components-and-server-side-rendering-ssr), [Motion bundle guidance](https://motion.dev/docs/react-reduce-bundle-size).

## Medium posts

The Field notes section reads the public feed at `https://medium.com/feed/@pradeep.tarakar17` on the server. The newest post gets the large card, followed by three smaller cards. Next.js caches the feed for up to one hour. If the feed fails or has no usable posts, the site displays the verified snapshot in [`lib/medium-snapshot.ts`](lib/medium-snapshot.ts). Update that snapshot when changing the Medium account or if you want a newer offline fallback.

## Deploy to Vercel

Import this folder as a Next.js project. Vercel will detect pnpm via `pnpm-lock.yaml`. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin when the domain is known; the application works without it for previews. No other environment variables are needed.

## Checks

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```
