# Dr. Nauman Niaz: portfolio website

A static site built with [Astro](https://astro.build). It follows the page layout spreadsheet *Dr_Nauman_Niaz___Portfolio_Site_Layout.xlsx*: 9 pages, plus the single-post and single-episode templates.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static files to /dist (deploy to Netlify, Vercel, Cloudflare Pages…)
```

## Where things live

| What | Where |
| --- | --- |
| Blog posts (Insights) | `content/insights/*.md` or `*.mdx`. One file per post. Set `pinned: true` to feature a post. |
| Podcast / vlog episodes (Conversations) | `content/conversations/*.md`. One file per episode, holding `youtubeId` or `audioUrl`. |
| Everything else (CV data, books, programmes, timeline…) | `src/data/site.ts` |
| Photos | `public/images/`, then set the path in `site.ts` or in the post's front matter |
| Design tokens (colours, type, radii) | `src/styles/global.css` (`:root`) |
| Animations | `src/scripts/motion.ts` |

Listing pages, "latest" blocks on Home, related posts and "more episodes" are all generated automatically from the content folders.

**MDX components for posts:** `<Quote cite="…">`, `<Figure src="…" caption="…" />` and `<Video id="YOUTUBE_ID" />` (see `content/insights/sample-the-long-spell.mdx`).

**Per-page SEO:** every page passes `title`, `description` and an optional `ogImage` to `Base.astro`. Posts and episodes take `metaDescription` / `ogImage` in front matter. The default OG image is `public/og/default.png`.

## Design

Taken from the reference design: a soft grey canvas, near-black ink, a single amber accent, pill buttons with a circular arrow, frosted-glass cards, a large fading wordmark behind the hero portrait, and a live local-time block in the header.
Type: **Inter Tight** (a tight-tracked grotesk, as in the reference) with **Instrument Serif** italic for editorial accents (`<em>` inside headings).

### Motion
GSAP + ScrollTrigger + SplitText, and Lenis smooth scrolling:
preloader (full intro on the first visit per session, a quick curtain afterwards) · hero intro timeline · masked line-by-line headline reveals · staggered card entrances · clip-path image wipes · parallax · count-up numbers · magnetic buttons · 3D card tilt · custom cursor with contextual labels ("Watch", "Read", "View") · marquees · a header that hides on scroll down · cross-page view transitions.
Everything turns off automatically for visitors who set *prefer reduced motion*, and content never stays hidden if scripts fail.

Utility attributes you can add to any element: `data-split`, `class="reveal"`, `data-stagger`, `data-clip`, `data-parallax="0.2"`, `data-count`, `data-tilt`, `data-magnetic`, `data-cursor="Label"`.

## Before launch: content to collect from Dr. Niaz

All placeholder copy is marked `TODO` in `src/data/site.ts`. Sample posts and episodes are files named `sample-*`; delete them once real content exists.

- [ ] Biography in 3 lengths (50 / 150 / 600 words) and the hero descriptor line
- [ ] CV with dates: credentials strip numbers, qualifications, timeline (15–25 entries), honours, medical practice, appointments, lectures
- [ ] 4–6 high-resolution portraits (hero: landscape, ≥2400px; About: environmental)
- [ ] Broadcasting stills, programme list, notable interviews, networks/tournaments
- [ ] Book covers, synopses and purchase links
- [ ] Published articles with links, and academic papers with DOIs
- [ ] 10–12 memorabilia photos with approved captions, museum name, location and URL
- [ ] Social links, public contact email, and the form endpoint (`site.formEndpoint`)
- [ ] Conversations series name and 2–3 seed episodes
- [ ] Production domain (`astro.config.mjs` → `site`)

Optional sections (Selected voices, Downloads, Showreel, Story, Newsletter) hide automatically while their arrays in `site.ts` are empty.

## Deployment (Vercel)

The Vercel project deploys this repository automatically. In **Settings → Environments → Production → Branch Tracking**, the production branch must be the branch this site is developed on (currently `claude/determined-hypatia-1fja1q`). Pushes to any other branch create Preview deployments only.

To put a specific build live by hand: **Deployments → ⋯ on that build → Promote to Production**. Avoid **Redeploy** on an old Production row: it rebuilds that same old commit.
