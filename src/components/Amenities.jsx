import { Waves, Dumbbell, ShieldCheck, Wine, Car, Trees, Users } from "lucide-react";
import { amenities } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const ICONS = { Waves, Dumbbell, ShieldCheck, Wine, Car, Trees, Users };

export default function Amenities() {
  const ref = useReveal({ stagger: 0.06, duration: 0.9 });

  return (
    <section id="amenidades" ref={ref} className="w-full py-28 md:py-36" style={{ background: "var(--bg-2)" }}>
      <div className="container-page">
        <div className="mb-14 max-w-xl" data-reveal>
          <p className="eyebrow mb-6">Amenidades</p>
          <h2 className="font-display text-[2.4rem] font-light leading-[1.05] tracking-[-0.02em] sm:text-[3.1rem]">
            Todo lo que una casa sola no puede ofrecer.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--line)" }}>
          {amenities.map((a) => {
            const Icon = ICONS[a.icon];
            const spanClass = a.size === "lg" ? "lg:col-span-2" : "";
            return (
              <div
                key={a.title}
                data-reveal
                className={`flex flex-col justify-between gap-10 p-8 md:p-10 ${spanClass}`}
                style={{ background: "var(--bg-2)", minHeight: a.size === "lg" ? "260px" : "220px" }}
              >
                <Icon size={26} strokeWidth={1} style={{ color: "var(--accent)" }} />
                <div>
                  <h3 className="font-display text-[1.2rem] font-light">{a.title}</h3>
                  <p className="mt-2 max-w-xs text-[0.88rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {a.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
