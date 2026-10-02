import { MapPin } from "lucide-react";
import { images, pointsOfInterest } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Location() {
  const ref = useReveal({ duration: 1.2 });

  return (
    <section id="ubicacion" ref={ref} className="relative w-full py-28 md:py-36" style={{ background: "var(--bg)" }}>
      <div className="container-page">
        <div className="mb-14 max-w-xl" data-reveal>
          <p className="eyebrow mb-6">Ubicación</p>
          <h2 className="font-display text-[2.4rem] font-light leading-[1.05] tracking-[-0.02em] sm:text-[3.1rem]">
            Lejos del ruido, cerca de todo lo que importa.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div data-reveal className="relative aspect-[4/3] overflow-hidden md:col-span-8 md:aspect-auto">
            <img
              src={images.ubicacion}
              alt="Vista aérea del terreno y los alrededores del desarrollo Altavista"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0" style={{ background: "var(--overlay-soft)" }} />
            <div
              className="absolute left-[38%] top-[46%] h-3 w-3 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 0 8px rgba(201,163,95,0.25)" }}
            />
          </div>

          <div data-reveal className="md:col-span-4">
            <ul className="flex flex-col">
              {pointsOfInterest.map((poi, i) => (
                <li
                  key={poi.label}
                  className="flex items-center justify-between gap-4 py-5"
                  style={{ borderBottom: i < pointsOfInterest.length - 1 ? "1px solid var(--line)" : "none" }}
                >
                  <span className="flex items-center gap-3 text-[0.98rem]">
                    <MapPin size={15} strokeWidth={1.25} style={{ color: "var(--accent)" }} />
                    {poi.label}
                  </span>
                  <span className="text-[0.85rem]" style={{ color: "var(--text-muted)" }}>
                    {poi.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
