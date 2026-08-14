<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AK Precision Components Website

## Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack
- Next.js 16.2.11 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- @heroicons/react
- Geist (variable font via next/font/google)
- Typography: max weight 600 (headings), 500 (labels/buttons), 400 (body); hero 48-52px, section headings 32-40px

## Conventions
- All components in `src/components/` organized by feature
- Pages in `src/app/` using App Router
- Use `Container` and `Section` wrappers for consistent spacing
- Framer Motion for animations via `AnimatedSection` wrapper
- Tailwind classes only (no CSS modules)
- Design system colors: navy (#0A1628), accent-blue (#2563EB), gray-metallic (#6B7280), gray-light (#F3F4F6)