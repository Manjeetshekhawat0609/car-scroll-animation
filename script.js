gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 1. Split headline into letters */
const headline = document.getElementById("headline");
headline.innerHTML = [..."WELCOME ITZFIZZ"]
  .map(c => (c === " " ? '<span class="gap">&nbsp;</span>' : `<span aria-hidden="true">${c}</span>`))
  .join("");
const letters = headline.querySelectorAll("span");

/* 2. Intro sequence: letters stagger in, then stats one by one with count-up */
gsap.set(".stat", { y: 24 });
const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
intro
  .from(letters, { yPercent: 70, opacity: 0, duration: 1.1, stagger: 0.045 })
  .to(".stat", { opacity: 1, y: 0, duration: 0.9, stagger: 0.18 }, "-=0.4")
  .add(() => {
    document.querySelectorAll("[data-count]").forEach((el, i) => {
      const o = { v: 0 };
      gsap.to(o, {
        v: +el.dataset.count, duration: 1.5, delay: i * 0.18, ease: "power2.out",
        onUpdate: () => (el.textContent = Math.round(o.v))
      });
    });
  }, "<");
if (reduce) intro.progress(1);

/* 3. Scroll-driven timeline (scrub = eased follow of scroll position) */
const car = document.querySelector(".car");
const wheels = gsap.utils.toArray(".wheel");
gsap.set(wheels, { transformOrigin: "50% 50%" });

const tl = gsap.timeline({
  defaults: { ease: "none" },
  scrollTrigger: {
    trigger: "#track", start: "top top", end: "bottom bottom",
    scrub: 1.2, pin: "#hero", anticipatePin: 1, invalidateOnRefresh: true
  }
});

tl.fromTo(car,
    { x: () => -car.offsetWidth * 0.7 },
    { x: () => innerWidth - car.offsetWidth * 0.3, scale: 1.1, transformOrigin: "50% 100%" }, 0)
  .to(".dashes", { x: "-25%" }, 0)
  .to(".sun", { yPercent: 25, scale: 1.15 }, 0)
  .to(wheels, { rotation: 1440 }, 0)
  .to(letters, { y: -40, opacity: 0.15, stagger: 0.02 }, 0.15)
  .to(".stat", { y: -60, opacity: 0, stagger: 0.06 }, 0.55);