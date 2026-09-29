# Scroll-Driven Hero Section Animation

A hero section where a concept car drives across the screen as you scroll. Built with **Next.js (React)**, **Tailwind CSS** and **GSAP + ScrollTrigger**.

**Live demo:** https://manjeetshekhawat0609.github.io/car-scroll-animation/

## Features

- Full-screen hero with a letter-spaced "WELCOME ITZFIZZ" headline and four impact statistics.
- Load animation: letters reveal with a stagger, then the stats fade in one by one with a count-up.
- Scroll-driven motion: the hero is pinned while the car moves across the screen, the wheels rotate, the road markings slide backward, and the text fades out.
- Motion is tied to scroll progress (GSAP `scrub: 1.2`), so it eases toward the scroll position instead of autoplaying.
- Only `transform` and `opacity` are animated, with no layout reads on scroll.
- Respects `prefers-reduced-motion` and is responsive down to mobile.

## Tech Stack

- Next.js 14 (App Router, static export)
- React 18
- Tailwind CSS 3
- GSAP 3 with ScrollTrigger

## Project Structure

```
app/
  layout.js        # Root layout and metadata
  page.js          # Renders the hero
  globals.css      # Tailwind layers + a few custom CSS pieces
components/
  Hero.jsx         # Layout, intro timeline, scroll timeline
  Car.jsx          # Inline SVG concept car
.github/workflows/deploy.yml   # Builds and deploys to GitHub Pages
```

## Run Locally

```bash
git clone https://github.com/Manjeetshekhawat0609/car-scroll-animation.git
cd car-scroll-animation
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

The site is exported as static HTML (`output: "export"`) and deployed to GitHub Pages by a GitHub Actions workflow on every push to `main`. In the repo, set **Settings → Pages → Source** to **GitHub Actions**.

## Author

Manjeet Shekhawat
