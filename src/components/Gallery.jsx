import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryStops } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (prefersReducedMotion || !isDesktop) return undefined;

    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return undefined;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - window.innerWidth;
      if (distance <= 0) return;

      section.classList.add("gallery-pinned");

      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.6}`,
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // each image eases from a slight zoom to 1x as its panel enters the viewport
      const panels = gsap.utils.toArray(".gallery-panel", track);
      panels.forEach((panel) => {
        const img = panel.querySelector("img");
        if (!img) return;

        gsap.fromTo(
          img,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 90%",
              end: "left 10%",
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => {
      ctx.revert();
      section.classList.remove("gallery-pinned");
    };
  }, []);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
      style={{ background: "var(--bg-2)" }}
    >
      <div
        ref={trackRef}
        className="flex h-[100svh] w-max items-stretch md:will-change-transform"
      >
        <div className="gallery-panel flex h-full w-[88vw] shrink-0 snap-center flex-col justify-center px-8 sm:w-screen md:w-[42vw] md:px-14">
          <p className="eyebrow mb-6">Galería inmersiva</p>
          <h2 className="font-display max-w-md text-[2.3rem] font-light leading-[1.06] tracking-[-0.02em] sm:text-[2.9rem]">
            Un recorrido, no una lista de fotos.
          </h2>
          <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Desliza para caminar por Altavista, en el mismo orden en que se descubre al visitarla.
          </p>
        </div>

        {galleryStops.map((stop) => (
          <figure
            key={stop.id}
            className="gallery-panel relative h-full w-[88vw] shrink-0 snap-center overflow-hidden sm:w-[70vw] md:w-[52vw]"
          >
            <img
              src={stop.image}
              alt={stop.caption}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,12,10,0) 55%, rgba(13,12,10,0.78) 100%)",
              }}
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="text-[0.75rem] tracking-wide" style={{ color: "#D9BE8C" }}>
                {stop.label}
              </p>
              <p className="mt-2 max-w-sm text-[1.05rem] font-light leading-relaxed text-[#F7F3EA]">
                {stop.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
