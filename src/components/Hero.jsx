import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { images } from "../data/content";
import { useTheme } from "../context/ThemeContext";
import { scrollToId } from "../hooks/useLenis";

export default function Hero() {
  const { theme } = useTheme();
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const eyebrowRef = useRef(null);
  const imgRef = useRef(null);
  const chevronRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(imgRef.current, { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 1, duration: 2.2 })
      .fromTo(eyebrowRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1 }, 0.5)
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 24, scale: 1.02 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4 },
        0.7
      )
      .fromTo(subRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 1.1 }, 1.25)
      .fromTo(chevronRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, 1.8);

    // gentle parallax on background image tied to scroll
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (imgRef.current) {
          imgRef.current.style.transform = `scale(1.06) translateY(${y * 0.18}px)`;
        }
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative flex h-[100svh] min-h-[600px] w-full items-end overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={theme === "dark" ? images.heroDark : images.heroLight}
          alt="Residencia contemporánea de Altavista al atardecer, con iluminación cálida y vista abierta al paisaje"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--overlay-grad)" }} />
      </div>

      <div className="container-page relative z-10 pb-[9vh] pt-40">
        <p ref={eyebrowRef} className="eyebrow mb-6">
          Altavista — Desarrollo residencial privado
        </p>
        <h1
          ref={titleRef}
          className="font-display max-w-4xl text-[3.4rem] leading-[0.98] font-light tracking-[-0.03em] sm:text-[5.2rem] md:text-[6.6rem] lg:text-[7.4rem]"
        >
          Altavista
        </h1>
        <div className="mt-8 flex flex-col items-start justify-between gap-8 border-t pt-8 sm:flex-row sm:items-end">
          <p ref={subRef} className="max-w-md text-[1.05rem] font-light leading-relaxed">
            Seis residencias sobre la ciudad. Cada una orientada a una vista que no se repite en
            ninguna otra.
          </p>
          <button
            onClick={() => scrollToId("contacto")}
            className="shrink-0 rounded-full px-7 py-3.5 text-[0.85rem] tracking-wide text-[#0D0C0A] transition-transform duration-300 hover:scale-[1.03]"
            style={{ background: "#EDE4D3" }}
          >
            Agenda tu visita privada
          </button>
        </div>
      </div>

      <button
        ref={chevronRef}
        onClick={() => scrollToId("vision")}
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#EDE4D3]/80 transition-opacity hover:opacity-100"
      >
        <ChevronDown size={22} strokeWidth={1} />
      </button>
    </section>
  );
}
