# Scroll-Driven Hero Section Animation

A hero section where a concept car drives across the screen as you scroll. Built with vanilla HTML, CSS and JavaScript, with GSAP handling the animation.

**Live demo:** https://manjeetshekhawat0609.github.io/car-scroll-animation/

## Features

- **Hero layout:** full-screen hero with a letter-spaced "WELCOME ITZFIZZ" headline and four impact statistics.
- **Load animation:** the headline reveals letter by letter, then the stats fade in one after another while the numbers count up.
- **Scroll-driven motion:** the hero is pinned while scrolling. The car moves left to right, the wheels rotate, the road markings slide backward, and the headline and stats fade out.
- **Smooth interpolation:** animation is tied to scroll progress (not autoplay) using GSAP ScrollTrigger `scrub`, so motion eases toward the scroll position instead of jumping.
- **Performance:** only `transform` and `opacity` are animated, and there are no layout reads on scroll.
- **Accessibility:** respects `prefers-reduced-motion`, and the headline has an `aria-label`.
- **Responsive:** works on desktop and mobile.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- [GSAP](https://gsap.com/) 3 with the ScrollTrigger plugin (loaded via CDN)

## Project Structure

```
car-scroll-animation/
├── index.html   # Markup and inline SVG car
├── style.css    # Layout, colours, responsive styles
├── script.js    # Intro timeline and scroll-driven timeline
└── README.md
```

## How It Works

1. `script.js` splits the headline into individual letter spans so they can be staggered.
2. An intro GSAP timeline reveals the letters, then the stats, and runs the count-up numbers.
3. A second timeline is linked to page scroll with ScrollTrigger (`scrub: 1.2`, `pin: "#hero"`). It moves the car, spins the wheels, shifts the road and sun, and fades the text.

## Run Locally

No build step is needed.

```bash
git clone https://github.com/Manjeetshekhawat0609/car-scroll-animation.git
cd car-scroll-animation
```

Then open `index.html` in a browser. An internet connection is needed to load GSAP from the CDN.

## Deployment

Hosted on GitHub Pages from the `main` branch (root folder).

## Author

Manjeet Shekhawat
