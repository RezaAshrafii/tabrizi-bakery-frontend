# Tabrizi Bakery — Website Redesign Proposal

> **Note:** This project is a private, client-facing website proposal concept for **Tabrizi Bakery** in Watertown, Massachusetts. It is designed to be honest, lightning fast, mobile-first, and easily reviewed by the business owner.

---

## 🎯 Business Objectives & Proposed Solution

| Business Challenge | Engineering & Design Solution |
| :--- | :--- |
| **Mobile customers need quick answers** | Sticky mobile utility bar with instant `Call`, `Directions`, and `Inquire` actions. |
| **No online checkout confusion** | Clear communication: phone orders, holds, and direct in-person service without false ecommerce promises. |
| **High local trust & discoverability** | Verified local schema (`Bakery` structured data), clear store hours, and lightweight Google Maps integration. |
| **Content ownership & maintenance** | All facts, hours, text, and product details centralized in a single typed configuration (`content/site.ts`). |
| **Brand authenticity** | Warm editorial design respecting Persian heritage without fabricated history, awards, or ingredients. |

---

## 📱 Mobile-First User Experience

- **Sticky Action Bar:** Mobile users get immediate 1-tap calling to `(617) 926-0880`, 1-tap Google Maps navigation to `56A Mount Auburn Street`, and smooth inquiry access.
- **Click-to-Load Interactive Map:** Eliminates heavy third-party iframe lag on initial load, saving mobile data while maintaining full utility.
- **Custom Order Inquiries:** An accessible inquiry form tailored for party platters, celebration boxes, and large family orders with clear status handling.

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS (Modern token-based color system with warm cream, espresso, and restrained saffron accents)
- **Icons:** Lucide React
- **Centralized Content:** `content/site.ts`

---

## 🔒 Owner Review & Deployment Documents

- [`OWNER_APPROVAL_CHECKLIST.md`](./OWNER_APPROVAL_CHECKLIST.md): Itemized breakdown of all facts, hours, product categories, and story copy for client sign-off.
- [`ASSET_MANIFEST.md`](./ASSET_MANIFEST.md): Inventory of all imagery, source tracking, and permission statuses.
- [`LAUNCH_CHECKLIST.md`](./LAUNCH_CHECKLIST.md): Domain connection, DNS records, indexing activation, and owner handoff.

---

## 🚀 Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build & Type Check
```bash
npm run build
```

### 4. Run Linter
```bash
npm run lint
```

---

## 🌐 Deploying a Private Preview

1. Push to a private Git repository (GitHub / GitLab).
2. Connect to [Vercel](https://vercel.com) or [Cloudflare Pages](https://pages.cloudflare.com).
3. Set environment variable:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-preview-domain.vercel.app
   NEXT_PUBLIC_ALLOW_INDEXING=false
   ```
4. Share the private preview link with the bakery owner for interactive review.
