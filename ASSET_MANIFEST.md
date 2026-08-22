# Asset Manifest — Tabrizi Bakery Website

This manifest documents all imagery and media assets used in the demo proposal, their origin, current license/permission status, and access control guidelines.

> **CRITICAL ACCESS CONTROL NOTICE:**
> Setting `robots: noindex` in headers or robots.txt **IS NOT** access control or privacy protection. Anyone with the preview URL can inspect, download, or scrape images.
> For private demonstrations containing unconfirmed business photos:
> 1. **Do not publish public preview links.**
> 2. Present via **private 1-on-1 screen share / local recording**, OR
> 3. Enforce **HTTP Basic Authentication / Vercel Password Protection** on the preview deployment until owner permissions are documented.

---

## Media Asset Inventory (Total: 10 Assets)

| # | File Path | Description / Location in UI | Source Status | Permission Status | Launch Recommendation |
| :- | :--- | :--- | :--- | :--- | :--- |
| 1 | `/images/hero/01-storefront-entrance.webp` | Hero storefront entrance visual | Public Google / Business reference photo | `Demo-only / Permission Required` | Keep if owner approves, or replace with current storefront photo |
| 2 | `/images/products/01-baklava-closeup.webp` | Products grid: Baklava | Reference photo of Persian baklava | `Demo-only / Permission Required` | Replace with photo of Tabrizi's actual baklava |
| 3 | `/images/products/05-barbari-bread.webp` | Products grid: Flatbreads | Reference photo of Barbari flatbread | `Demo-only / Permission Required` | Replace with photo of fresh bread in bakery |
| 4 | `/images/products/07-premium-pastry-platter.webp` | Products grid: Pastry Platter | Reference photo of pastry platter | `Demo-only / Permission Required` | Replace with actual Tabrizi platter photo |
| 5 | `/images/products/12-persian-cookie-selection.webp` | Products grid: Persian Cookies | Reference photo of cookies | `Demo-only / Permission Required` | Replace with current cookie display photo |
| 6 | `/images/interior/02-bakery-display-front.webp` | Gallery: Pastry Display Counter | Storefront interior reference photo | `Demo-only / Permission Required` | Keep if owner confirms or replace with high-res interior |
| 7 | `/images/interior/03-bakery-interior-counter.webp` | Story section: Bakery counter & shelves | Interior counter reference photo | `Demo-only / Permission Required` | Keep if owner confirms or replace with owner portrait |
| 8 | `/images/gallery/13-bakery-display-case.webp` | Gallery: Glass confections case | Interior reference photo | `Demo-only / Permission Required` | Owner review |
| 9 | `/images/gallery/16-bakery-shelf-products.webp` | Gallery: Specialty grocery shelves | Grocery shelves reference photo | `Demo-only / Permission Required` | Owner review |
| 10 | `/images/gallery/17-dessert-display-counter.webp` | Gallery: Dessert counter | Display counter reference photo | `Demo-only / Permission Required` | Owner review |

---

## Guidelines for Replacing Images

1. Place high-resolution JPG or WebP images in the corresponding directory under `/public/images/`.
2. Update the filename reference in `content/site.ts`.
3. Provide descriptive `alt` text in `content/site.ts` reflecting the genuine contents of the photo.
4. Next.js image optimization will automatically generate responsive WebP and AVIF formats for all device screens.
