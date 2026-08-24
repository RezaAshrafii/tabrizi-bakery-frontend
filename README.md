# Tabrizi Bakery — Heritage Bakery Website

An editorial, mobile-first website concept for Tabrizi Bakery, a Persian family bakery in Watertown, Massachusetts. The experience is designed to make the bakery's heritage, products and local presence feel as warm and premium online as they do in person.

## Links

- **Live demo:** [tabrizi-bakery.vercel.app](https://tabrizi-bakery.vercel.app/)
- **Source code:** [github.com/RezaAshrafii/tabrizi-bakery-frontend](https://github.com/RezaAshrafii/tabrizi-bakery-frontend)

## What this project demonstrates

- A focused landing-page experience for a local food business
- Heritage-led storytelling instead of a generic template layout
- Responsive navigation and content sections for mobile, tablet and desktop
- Product presentation using optimized local WebP photography
- Semantic markup, metadata, Open Graph fields and Bakery structured data
- A clear path from brand story to products, location and contact call-to-action
- Next.js static rendering with a small, component-based codebase

> This repository is a design and frontend showcase. Business details, opening hours, images, phone numbers and ordering links should be confirmed by the bakery before production use.

## Tech stack

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for interface icons
- [Motion](https://motion.dev/) for lightweight section animation
- Next Image/local WebP assets for image delivery

## Main sections

| Section | Purpose |
| --- | --- |
| Hero | Establishes the bakery's visual identity and primary action |
| Products | Highlights Persian pastries, breads and giftable assortments |
| Story | Communicates family heritage and craft |
| Gallery | Shows the shop, display cases and product atmosphere |
| Location | Provides the Watertown address, hours and visit context |
| CTA | Gives visitors a direct next step |

## Project structure

```text
app/
  globals.css       Global theme and styles
  layout.tsx        Fonts, metadata and Bakery JSON-LD
  page.tsx          Homepage composition
  robots.ts         Robots metadata route
  sitemap.ts        Sitemap metadata route
components/
  layout/            Navbar and Footer
  motion/            Reusable animation variants
  sections/          Hero, Products, Story, Gallery, Location and CTA
lib/                 Shared utilities and image helpers
public/images/       Local optimized WebP photography
```

## Run locally

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/RezaAshrafii/tabrizi-bakery-frontend.git
cd tabrizi-bakery-frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

Run these before publishing a change:

```bash
npm run lint
npm run build
npm start
```

The production server is then available at [http://localhost:3000](http://localhost:3000).

## Deployment on Vercel

1. Import the GitHub repository into [Vercel](https://vercel.com/new).
2. Keep the detected framework as **Next.js**.
3. Use `npm run build` as the build command and leave the output directory empty/default.
4. Deploy.
5. Add the final custom domain in **Project Settings → Domains** when the bakery confirms ownership.

The current preview is deployed at [https://tabrizi-bakery.vercel.app/](https://tabrizi-bakery.vercel.app/).

## Environment variables

The current homepage does not require a secret to render. If AI Studio/Gemini features are enabled later, copy `.env.example` to `.env.local` and add the values through the local secret manager or Vercel Environment Variables. Never commit `.env.local` or a real API key.

```bash
Copy-Item .env.example .env.local
```

## SEO and discoverability

The app includes:

- Page title and description metadata
- Open Graph and Twitter card metadata
- `robots.txt` and `sitemap.xml` metadata routes
- Bakery JSON-LD with address, phone, coordinates, opening hours and Instagram
- Semantic section structure and descriptive image alt text

Before a real launch, replace placeholder or unverified business data, add the final canonical domain, verify the Google Business Profile, and connect a real ordering/contact flow.

## Performance notes

Core photography is stored locally as WebP assets and rendered through Next Image. The repository also contains the recorded Lighthouse audit artifacts and [PERFORMANCE_AUDIT.md](./PERFORMANCE_AUDIT.md). Re-run Lighthouse after changing images, fonts or third-party scripts because scores depend on the deployed environment.

## Roadmap for a production launch

- Confirm all business facts and obtain written permission for brand assets
- Add a real menu/order or catering inquiry flow
- Add analytics only after confirming consent requirements
- Add a custom domain and verify Search Console
- Test keyboard navigation, reduced motion and mobile Safari
- Add a CMS or small admin workflow if the menu changes frequently
- Add image credits/licensing records for every externally supplied asset

## Author

Built by [Reza Ashrafi](https://github.com/RezaAshrafii), a statistics student and frontend developer interested in practical AI-assisted product development.

## License

No open-source license has been declared yet. Until the repository owner adds one, the source code and visual assets should be treated as **all rights reserved** and reused only with permission.
