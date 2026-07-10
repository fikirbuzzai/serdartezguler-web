# serdartezguler.com

**Serdar Tezgüler — AI Dönüşüm Uzmanı & Stratejik Partner**

Kişisel otorite platformu. Bağımsız ve özerk proje.

## Stack

| Layer      | Tech                          |
|------------|-------------------------------|
| Framework  | Next.js 16 (App Router)       |
| Language   | TypeScript                    |
| Styling    | Tailwind CSS v4 + CSS vars    |
| Auth/DB    | Supabase                      |
| Email      | Resend                        |
| Deployment | Vercel (fra1)                 |
| Org        | FikirbuzzAI                   |

## Architecture

```
Workspace
  └── Brand Engine
        └── serdartezguler-web (this repo)
              ├── app/          Next.js App Router
              ├── content/      Type-safe content
              ├── lib/          Supabase + Resend utils
              └── supabase/     Schema + migrations
```

## Setup

```bash
# 1. Clone
git clone git@github.com:FikirbuzzAI/serdartezguler-web.git
cd serdartezguler-web

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Fill in: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
#          SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY

# 4. Supabase schema
# Run supabase/schema.sql in your Supabase project SQL Editor

# 5. Dev
npm run dev
```

## Environment Variables

| Variable                        | Required | Description                    |
|---------------------------------|----------|--------------------------------|
| NEXT_PUBLIC_SUPABASE_URL        | ✓        | Supabase project URL           |
| NEXT_PUBLIC_SUPABASE_ANON_KEY   | ✓        | Supabase anon key              |
| SUPABASE_SERVICE_ROLE_KEY       | ✓        | Supabase service role (secret) |
| RESEND_API_KEY                  | ✓        | Resend API key                 |
| CONTACT_EMAIL                   |          | Default: st@serdartezguler.com |
| NEXT_PUBLIC_SITE_URL            |          | Default: https://serdartezguler.com |
| NEXT_PUBLIC_GA4_ID              |          | Google Analytics 4             |
| NEXT_PUBLIC_GTM_ID              |          | Google Tag Manager             |

## Vercel Deployment

1. Connect `FikirbuzzAI/serdartezguler-web` to Vercel
2. Add environment variables in Vercel Dashboard
3. Deploy — preview URL auto-generated per branch

## ATLAS Integration

Future: This project will connect to ATLAS via API and Workspace integration.
Today: Standalone and autonomous.

## Security Notes

- No default passwords anywhere
- Supabase RLS enabled — service role only for lead access
- Admin route (`/admin`) protected by Supabase Auth
- All env vars via Vercel Dashboard, never in code
