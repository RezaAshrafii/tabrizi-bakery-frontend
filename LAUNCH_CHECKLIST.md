# Launch & Wix Migration Checklist — Tabrizi Bakery Website

This operational guide details how to safely migrate the live Wix website (`tabrizibakery.com`) to this Next.js production deployment without email disruption, downtime, or data loss.

---

## Phase 1: Pre-Migration Discovery & Backup (Wix & DNS Audit)

- [ ] **Record Current DNS Zone:** Export or screenshot all existing DNS records from the domain registrar (Namecheap, GoDaddy, Google Domains, Cloudflare, etc.):
  - All `A` and `AAAA` records (pointing to Wix IP addresses: e.g. `23.236.62.147`, etc.)
  - All `CNAME` records (e.g. `www`, `point.wixdns.net`)
  - All `MX` records (Google Workspace, Microsoft 365, or Zoho Mail)
  - All `TXT` records (SPF records, DKIM keys, Google site verification, DMARC)
- [ ] **Audit Email Dependencies:**
  > ⚠️ **CRITICAL:** Do NOT change Name Servers (NS) carelessly if email accounts are tied to the domain. Preserving `MX`, `TXT (SPF/DKIM)`, and mail `CNAME` records is mandatory to prevent email delivery failure for `tabrizibakery@gmail.com` or custom domain mail.
- [ ] **Preserve Live Wix Content & Media:**
  - Archive full HTML/text copies and image assets from the existing Wix site.
  - Record all active legacy URLs to plan 301 redirects if necessary.
- [ ] **Lower DNS TTL (Time To Live):**
  - 48 to 72 hours before the planned switch, lower the TTL on `A` and `CNAME` records from `86400` (24h) to `300` (5 minutes). This allows rapid DNS propagation and immediate rollback capability.

---

## Phase 2: Production Hosting & Environment Configuration

- [ ] **Account Ownership:** Deploy on a production host (Vercel, Cloudflare Pages, AWS) owned directly or co-managed by the business owner.
- [ ] **Environment Variables:**
  - `NEXT_PUBLIC_SITE_URL` = `https://www.tabrizibakery.com`
  - `NEXT_PUBLIC_ALLOW_INDEXING` = `true`
- [ ] **Verify SSL/TLS Certificate Provisioning:** Ensure the host provisions an SSL certificate before traffic cutover.

---

## Phase 3: Cutover & DNS Switch

- [ ] **Update Apex (`@`) and `www` DNS Records:**
  - Set Apex `A` record to the new host IP or `CNAME` flattening target.
  - Set `www` `CNAME` to host target (e.g., `cname.vercel-dns.com`).
- [ ] **Leave MX/Mail Records Untouched:** Confirm zero changes were made to mail routing records.
- [ ] **Test Live Site:** Verify HTTPS loads, mobile action bar operates, telephone links trigger dialer, and Google Maps links open correctly.

---

## Phase 4: Instant Rollback Strategy (Emergency Plan)

If any unforeseen issue occurs during launch:
1. **Revert DNS `A` / `CNAME` Records:** Immediately re-enter the recorded Wix DNS targets documented in Phase 1.
2. Because TTL was reduced to 300 seconds, traffic will revert back to the legacy Wix website within 5 minutes.
3. No email or server data is impacted.

---

## Phase 5: Post-Launch SEO & Business Verification

- [ ] Submit `https://www.tabrizibakery.com/sitemap.xml` to Google Search Console.
- [ ] Update Google Business Profile website link.
- [ ] Increase DNS TTL back to standard values (e.g. `3600` or `86400`) once stability is verified.
