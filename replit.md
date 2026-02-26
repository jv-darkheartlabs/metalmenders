# Metal Menders Collision Center

## Overview
Single-page business website for Metal Menders Collision Center, a collision repair shop located at 7308 W Saint Bernard Hwy, Arabi, LA 70032 (St. Bernard Parish). Pro-American, facts-based, work-first aesthetic with small-town underdog identity.

## Recent Changes
- 2026-02-13: Updated phone to (504) 812-5757, email to metalmenders@msn.com, replaced favicon with wrench icon
- 2026-02-11: Initial build - full single-page site with hero, services, stats, about, community, contact sections
- 2026-02-11: PostgreSQL database for contact form submissions
- 2026-02-11: Dark/light mode with ThemeProvider

## Project Architecture
- **Frontend**: React + Vite single-page app at `client/src/pages/home.tsx`
- **Backend**: Express server (no API endpoints currently)
- **Database**: PostgreSQL with Drizzle ORM (contact_submissions table exists but is unused since contact form was removed)
- **Styling**: Tailwind CSS with patriotic navy/red theme, Inter font

## Key Files
- `client/src/pages/home.tsx` - All page sections (NavBar, Hero, Services, Stats, About, Local, Contact, Footer)
- `client/src/components/theme-provider.tsx` - Dark/light mode provider
- `shared/schema.ts` - Contact form schema
- `server/routes.ts` - API routes
- `server/storage.ts` - Database storage interface
- `server/db.ts` - Database connection

## Design Tokens
- Primary: Navy blue (215 60% 30%)
- Accent: Red (0 70% 42%)
- Font: Inter (sans), Libre Baskerville (serif), Roboto Mono (mono)
- Approach: Method A (whitespace/headings for hierarchy) with Card components

## API Endpoints
- None currently (contact form was removed per user request)
