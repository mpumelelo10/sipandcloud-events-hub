# Sip & Cloud Tech – Events Hub

**Live target:** https://your-site.example (or sipandcloud-events-hub.netlify.app)

**Positioning:** Automated home for cloud, AI & tech opportunities in Africa — designed for busy professionals.  
**Monetization ready:** Event hosts can charge tickets. Sip & Cloud takes a platform fee (default 10%). Attendees get QR tickets, connections, and personalized opportunities.

---

## What this gives you

### For attendees
- One-time preferences → location-aware event alerts
- Instant QR ticket (powered by your qr.cloudboost.co.za)
- Edit / cancel RSVP anytime
- Personalized opportunities matched to their profile
- Clean, fast experience — no WhatsApp noise

### For event hosts (your revenue)
- Create paid or free events
- Set ticket price in ZAR (or other currency)
- Platform fee automatically calculated (default 10%)
- Host receives the rest
- Check-in / check-out with QR
- Capacity control

### For you (Sip & Cloud)
- Own the data and relationships
- 10% platform fee on every paid ticket
- Grow the community while generating revenue
- Link from sipandcloud.co.za + LinkedIn

---

## Netlify site already created for you

- **Site name:** sipandcloud-events-hub
- **Site ID:** 281ef567-f059-42f5-8973-babb68e60e9d
- **Dashboard:** https://app.netlify.com/projects/sipandcloud-events-hub
- **Temporary URL:** https://sipandcloud-events-hub.netlify.app

---

## Deploy steps (do this once – 10 minutes)

### 1. Link repository on Netlify
1. Open https://app.netlify.com/projects/sipandcloud-events-hub
2. Site configuration → Build & deploy → Continuous deployment → Link repository
3. Authorize GitHub if needed → select `mpumelelo10/sipandcloud-events-hub`
4. Build settings (Next.js is auto-detected):
   - Build command: `npm run build`
   - Publish directory: leave default (Netlify Next.js runtime handles it)

### 2. Environment variables
Copy `.env.example` to `.env.local` for local development and fill in your own values. In Netlify → Site configuration → Environment variables, set the same variables with the appropriate values for each deploy context. Keep private keys and `CHECKIN_SECRET` server-only; never give them a `NEXT_PUBLIC_` prefix. Generate a unique random value for `CHECKIN_SECRET`.

The template intentionally contains no values. `NEXT_PUBLIC_SITE_URL` is a public URL and is excluded from value scanning because it appears in page metadata. All other variables remain subject to secrets scanning.

Required configuration includes:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
EMAIL_FROM=
CHECKIN_SECRET=
```

If a real credential was previously committed or exposed in a deploy, rotate it at its provider and update Netlify. Removing it from current files does not revoke it or erase Git history.

### 3. Custom domain
Domain management → Add domain `events.sipandcloud.co.za` and update your DNS.

### 4. Supabase setup
1. Create a free project at supabase.com
2. Run the entire `supabase/schema.sql` in the SQL Editor
3. Copy the URL + keys into the Netlify env vars above

---

## Monetization model (already in the database)

| Role              | What they get                                      | Money flow                  |
|-------------------|----------------------------------------------------|-----------------------------|
| **Attendee**      | QR ticket, connections, personalized opportunities | Pays ticket price (or free) |
| **Event Host**    | Easy ticketing + check-in + audience               | Keeps ~90% after fee        |
| **Sip & Cloud**   | Platform + community + data                        | 10% platform fee            |

Change the fee per event via `platform_fee_percent` column (default 10.00).

Recommended SA payment providers to plug in next:
- Paystack (most popular)
- Yoco
- Or start with manual bank transfer + admin mark-as-paid

---

## Project structure

- `app/` – pages & API routes
- `supabase/schema.sql` – full database + monetization columns
- `lib/qr.ts` – talks to your existing qr.cloudboost.co.za
- `lib/email.ts` – beautiful confirmation emails
- Ready for host dashboard & payment webhooks

---

Happy Cloud, Happy Explorers ☁️  
Built for Mpumelelo Pinky & Sip and Cloud Tech