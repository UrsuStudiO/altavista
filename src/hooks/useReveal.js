import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attaches a slow, cinematic fade + slight scale reveal to every element
 * carrying [data-reveal] inside the returned ref's subtree.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = root.hasAttribute("data-reveal")
      ? [root]
      : Array.from(root.querySelectorAll("[data-reveal]"));

    if (prefersReducedMotion || targets.length === 0) return undefined;

    const ctx = gsap.context(() => {
      targets.forEach((el, i) => {
        const delay = options.stagger ? i * options.stagger : 0;
        gsap.fromTo(
          el,
          { opacity: 0, y: 28, scale: options.scale ?? 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: options.duration ?? 1.1,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: options.start ?? "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, [options.stagger, options.duration, options.scale, options.start]);

  return ref;
}
