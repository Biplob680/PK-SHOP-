# PK SHOP — starter project

প্রাথমিক Next.js storefront + Admin UI starter. এটি **প্রথম কাজের সংস্করণ**, সম্পূর্ণ production ecommerce নয়।

## কী আছে
- Responsive Bengali storefront এবং `/en` English homepage
- 36টি আলাদা প্রাথমিক product category
- Demo product catalog, search, category pages, product details
- Admin dashboard UI এবং products/categories/orders/inventory/reviews/couriers/payments/reports module outlines
- Supabase PostgreSQL initial schema (`supabase/schema.sql`)
- `.env.example` for Supabase and future courier/payment secrets

## কী এখনো বাস্তবভাবে সংযুক্ত নয়
- Real product database CRUD
- Admin login and role authorization
- Live cart persistence, checkout, order creation, inventory reservation
- Courier booking APIs and tracking webhooks
- Payment gateway checkout/webhook/refund
- Real review submission and buyer analytics

Do not accept real customer payments or customer personal data in this demo until the missing server-side features and security policies are implemented.

## Run locally
1. Install Node.js 20+ and Git.
2. Extract the ZIP, then open a terminal in this folder.
3. Run `npm install`
4. Copy `.env.example` to `.env.local`
5. Run `npm run dev`
6. Open `http://localhost:3000`

The storefront can render in demo mode without Supabase credentials.

## Supabase setup
1. Create a free project at https://supabase.com.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Copy Project URL and anon key into `.env.local`.
4. Before production, add carefully reviewed RLS policies and admin-only server actions. The starter intentionally does not provide public write access.

## Deploy
- Push the code to a private/public GitHub repository.
- Deploy the Next.js app on a host that supports the required Next.js runtime (for example, a free-tier platform where available).
- Add environment variables in the host dashboard.
- Check the provider's current free-tier limits before launch. A free subdomain may be used initially; custom domains and some usage may cost money.

## Real courier integration
Courier API calls must be implemented server-side, not in browser code. Create one adapter per approved provider, such as Pathao, Steadfast or REDX. Keep API keys private. Add idempotency to prevent duplicate bookings, save consignment/tracking IDs, and process provider webhooks.

## Real payments
Start with COD for the first usable version. Add a gateway only after merchant onboarding, current pricing confirmation, and production/sandbox testing. Always verify payment server-side; never trust a browser success page.

## Suggested build order
1. Secure admin login and roles.
2. Database-backed categories/products + image storage.
3. Cart, checkout, order records, stock reservation and COD.
4. Admin order workflow and reports.
5. One courier API, tested in sandbox/staging.
6. One payment gateway, tested in sandbox.
7. Reviews, returns, coupons, analytics and operational hardening.
