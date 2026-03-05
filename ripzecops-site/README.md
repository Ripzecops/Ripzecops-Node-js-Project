# RIPZECOPS – Premium IT Project Services Website (Next.js + 3D Globe)

A production-ready, marketing-focused website with a lightweight **3D hologram globe** (Three.js / React Three Fiber), smooth scrolling (Lenis), and premium UI animations (Framer Motion + GSAP).

## Tech Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- Three.js + @react-three/fiber + @react-three/drei
- Framer Motion, GSAP
- Lenis smooth scrolling
- React Hook Form + Zod (contact form)
- ESLint + Prettier

---

## Getting Started

### 1) Install
```bash
npm install
```

### 2) Run Dev Server
```bash
npm run dev
```
Open http://localhost:3000

### 3) Build
```bash
npm run build
npm run start
```

---

## Deploy to Vercel
1. Push this repo to GitHub
2. Import into Vercel
3. Framework preset: **Next.js**
4. Build Command: `npm run build`
5. Output: default

---

## Logo
Place your logo at:
`/public/brand/logo.png`

If it’s missing, the UI falls back to a text logo.

---

## WhatsApp
Floating WhatsApp button is enabled on all pages:
- Number: **0742591795**
- Link: https://wa.me/94742591795

---

## Notes
- 3D globe is disabled automatically when `prefers-reduced-motion` is enabled.
- A toggle (**Background FX**) is available in the navbar.
