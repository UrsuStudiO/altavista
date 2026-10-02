import { images } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Vision() {
  const ref = useReveal({ duration: 1.2 });

  return (
    <section
      id="vision"
      ref={ref}
      className="relative w-full pt-28 pb-24 md:pt-40 md:pb-56"
      style={{ background: "var(--bg)" }}
    >
      <div className="container-page grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5" data-reveal>
          <p className="eyebrow mb-6">Visión</p>
          <h2 className="font-display text-[2.4rem] font-light leading-[1.05] tracking-[-0.02em] sm:text-[3.1rem]">
            Ninguna pared decide dónde empieza el paisaje.
          </h2>
          <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Altavista se construyó sobre un principio simple: el sitio ya era hermoso antes de que
            llegáramos. Cada volumen se acomodó a la pendiente, cada ventana se ubicó siguiendo una
            vista específica, y cada material —piedra, madera, hierro oscuro— se dejó envejecer al
            ritmo del lugar.
          </p>
          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            No es una casa que se impone sobre el terreno. Es una casa que el terreno hace posible.
          </p>
        </div>

        <div className="relative md:col-span-7 md:col-start-6">
          <div
            data-reveal
            className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/11]"
          >
            <img
              src={images.visionA}
              alt="Fachada de piedra y vidrio de una residencia Altavista integrada al terreno"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            data-reveal
            className="relative mt-6 aspect-[5/4] w-[70%] overflow-hidden sm:mt-8 md:absolute md:-bottom-16 md:-left-16 md:mt-0 md:w-[55%]"
            style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)" }}
          >
            <img
              src={images.visionB}
              alt="Detalle de la piscina y el patio de una residencia Altavista al atardecer"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
