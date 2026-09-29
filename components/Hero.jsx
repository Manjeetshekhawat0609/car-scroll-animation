"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car";

gsap.registerPlugin(ScrollTrigger);

const TITLE = "WELCOME ITZFIZZ";
const STATS = [
  { value: 58, label: "Increase in pick up point use" },
  { value: 23, label: "Decrease in customer phone calls" },
  { value: 27, label: "Increase in pick up point use" },
  { value: 40, label: "Decrease in customer phone calls" },
];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // gsap.context scopes selectors to this component and cleans up on unmount
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".letter");
      const wheels = gsap.utils.toArray(".wheel");
      const car = root.current.querySelector(".car");

      /* Intro: letters stagger in, then stats one by one with count-up */
      gsap.set(".stat", { y: 24 });
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(letters, { yPercent: 70, opacity: 0, duration: 1.1, stagger: 0.045 })
        .to(".stat", { opacity: 1, y: 0, duration: 0.9, stagger: 0.18 }, "-=0.4")
        .add(() => {
          gsap.utils.toArray("[data-count]").forEach((el, i) => {
            const o = { v: 0 };
            gsap.to(o, {
              v: +el.dataset.count, duration: 1.5, delay: i * 0.18, ease: "power2.out",
              onUpdate: () => (el.textContent = Math.round(o.v)),
            });
          });
        }, "<");
      if (reduce) intro.progress(1);

      /* Scroll-driven timeline: scrub gives eased, scroll-linked motion */
      gsap.set(wheels, { transformOrigin: "50% 50%" });
      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current, start: "top top", end: "bottom bottom",
          scrub: 1.2, pin: ".hero-pin", anticipatePin: 1, invalidateOnRefresh: true,
        },
      })
        .fromTo(car, { x: () => -car.offsetWidth * 0.7 },
          { x: () => window.innerWidth - car.offsetWidth * 0.3, scale: 1.1, transformOrigin: "50% 100%" }, 0)
        .to(".dashes", { x: "-25%" }, 0)
        .to(".sun", { yPercent: 25, scale: 1.15 }, 0)
        .to(wheels, { rotation: 1440 }, 0)
        .to(letters, { y: -40, opacity: 0.15, stagger: 0.02 }, 0.15)
        .to(".stat", { y: -60, opacity: 0, stagger: 0.06 }, 0.55);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="relative">
      <section className="hero-pin relative flex h-screen w-full flex-col items-center overflow-hidden bg-gradient-to-b from-night via-dusk to-[#7a2f5a] px-6 pt-[14vh]">
        <div className="sun sun-stripes absolute bottom-[20vh] left-1/2 h-[34vmin] w-[34vmin] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ffb35c] to-ember opacity-90" />
        <div className="skyline-shape absolute inset-x-0 bottom-[19vh] h-[14vh] bg-[#0d0a1e]" />

        <h1 aria-label="Welcome ItzFizz" className="relative z-10 m-0 whitespace-nowrap pl-[0.3em] text-[clamp(1.3rem,5vw,4.4rem)] font-light leading-none tracking-[0.3em] sm:pl-[0.55em] sm:tracking-[0.55em]">
          {[...TITLE].map((c, i) =>
            c === " " ? <span key={i} className="letter inline-block w-[0.6em]">&nbsp;</span>
                      : <span key={i} aria-hidden="true" className="letter inline-block will-change-transform">{c}</span>
          )}
        </h1>

        <div className="relative z-10 mt-[6vh] grid w-full max-w-5xl grid-cols-2 gap-x-10 gap-y-6 text-center md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="stat opacity-0 will-change-transform">
              <p className="m-0 text-[clamp(2rem,4.5vw,3.4rem)] font-semibold tabular-nums text-ember">
                <span data-count={s.value}>0</span>%
              </p>
              <small className="mt-1 block text-sm text-mist">{s.label}</small>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[19vh] overflow-hidden border-t-[3px] border-ember bg-[#0a0818]">
          <div className="dashes dash-lines absolute -left-1/2 top-[55%] h-1 w-[200%] opacity-55 will-change-transform" />
        </div>

        <div className="car absolute bottom-[calc(19vh-26px)] left-0 z-20 w-[min(48vw,560px)] min-w-[250px] will-change-transform">
          <Car />
        </div>
      </section>
      <div className="h-[250vh]" />
    </main>
  );
}
