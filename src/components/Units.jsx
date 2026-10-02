import { units } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const availableCount = units.filter((u) => u.available).length;

function UnitCard({ unit }) {
  return (
    <div data-reveal className="group relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={unit.image}
          alt={`${unit.name}, ${unit.area}, ${unit.rooms}`}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,12,10,0) 40%, rgba(13,12,10,0.88) 100%)",
          }}
        />

        {!unit.available && (
          <span
            className="absolute right-4 top-4 rounded-full border px-3 py-1 text-[0.7rem] tracking-wide"
            style={{ borderColor: "var(--line-strong)", color: "#EDE4D3", background: "rgba(13,12,10,0.5)" }}
          >
            Reservada
          </span>
        )}

        {/* detail panel — slides up on hover / focus */}
        <div
          className="absolute inset-x-0 bottom-0 translate-y-[62%] px-6 pb-6 pt-10 transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0"
        >
          <p className="text-[0.72rem] tracking-wide" style={{ color: "var(--accent)" }}>
            {unit.code}
          </p>
          <h3 className="font-display mt-1 text-[1.5rem] font-light text-[#F7F3EA]">{unit.name}</h3>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.8rem] text-[#EDE4D3]/85">
            <span>{unit.area}</span>
            <span>{unit.rooms}</span>
            <span>{unit.view}</span>
          </div>
          <p className="mt-4 max-w-sm text-[0.85rem] leading-relaxed text-[#EDE4D3]/70 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100 group-focus-within:opacity-100">
            {unit.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Units() {
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section id="unidades" ref={ref} className="w-full py-28 md:py-36" style={{ background: "var(--bg)" }}>
      <div className="container-page">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div data-reveal>
            <p className="eyebrow mb-6">Unidades</p>
            <h2 className="font-display max-w-xl text-[2.4rem] font-light leading-[1.05] tracking-[-0.02em] sm:text-[3.1rem]">
              Seis residencias. Cuatro tipologías.
            </h2>
          </div>
          <p data-reveal className="text-[0.95rem]" style={{ color: "var(--text-muted)" }}>
            Quedan <span style={{ color: "var(--accent)" }}>{availableCount} de {units.length}</span>{" "}
            tipologías disponibles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--line)" }}>
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>
    </section>
  );
}
