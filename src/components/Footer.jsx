import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { scrollToId } from "../hooks/useLenis";

export default function Footer() {
  const [showCredit, setShowCredit] = useState(false);

  return (
    <footer
      className="w-full pt-16 pb-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="container-page">
        <div className="hairline mb-12" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <button
              onClick={() => scrollToId("hero")}
              className="font-display text-[1.1rem] tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Alta<span style={{ color: "var(--accent)" }}>vista</span>
            </button>

            <p
              className="mt-4 max-w-xs text-[0.85rem] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Desarrollos residenciales de arquitectura contemporánea.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Ubicación</p>

            <p
              className="text-[0.85rem] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Camino a la Cumbre, km 6.5
              <br />
              Visitas con cita previa
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Contacto</p>

            <div
              className="flex flex-col gap-2 text-[0.85rem]"
              style={{ color: "var(--text-muted)" }}
            >
              <a
                href="mailto:ventas@altavista.com"
                className="flex items-center gap-1 transition-colors duration-300 hover:text-[var(--text)]"
              >
                ventas@altavista.com
                <ArrowUpRight size={13} strokeWidth={1.25} />
              </a>

              <a
                href="tel:+59170000000"
                className="flex items-center gap-1 transition-colors duration-300 hover:text-[var(--text)]"
              >
                +591 700 00000
                <ArrowUpRight size={13} strokeWidth={1.25} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col gap-5 border-t pt-6 text-[0.75rem] sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: "var(--line)",
            color: "var(--text-muted)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Altavista. Todos los derechos
            reservados.
          </p>

          <div
            className="relative"
            onMouseEnter={() => setShowCredit(true)}
            onMouseLeave={() => setShowCredit(false)}
          >
            <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 overflow-hidden whitespace-nowrap">
              <span
                className={`
                  block font-display text-[1.78rem] tracking-wide
                  transition-all duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${showCredit
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                  }
                `}
                style={{ color: "var(--text)" }}
              >
                Ursu<span style={{ color: "var(--accent)" }}>Studio</span>
              </span>
            </div>

            <a
              href="https://ursustudio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full border px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] transition-all duration-300"
              style={{
                borderColor: "var(--line)",
                color: "var(--text-muted)",
              }}
            >
              <span className="transition-colors duration-300 group-hover:text-[var(--text)]">
                Créditos
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}