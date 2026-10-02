import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { scrollToId } from "../hooks/useLenis";

const LINKS = [
  { id: "vision", label: "Visión" },
  { id: "unidades", label: "Unidades" },
  { id: "galeria", label: "Galería" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "amenidades", label: "Amenidades" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`
          mx-auto max-w-[1440px]
          overflow-hidden rounded-2xl
          border
          transition-all duration-500
          ${scrolled || open
            ? "shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : ""
          }
        `}
        style={{
          background:
            scrolled || open
              ? "var(--overlay-strong)"
              : "color-mix(in srgb, var(--bg) 20%, transparent)",
          backdropFilter: "blur(14px)",
          borderColor: "var(--line)",
        }}
      >
        <div className="container-page flex h-[68px] items-center justify-between">
          <button
            onClick={() => handleNav("hero")}
            className="group flex items-center gap-3"
            aria-label="Ir al inicio, Altavista"
          >
            <span
              className="font-display text-[1.05rem] tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Alta<span style={{ color: "var(--accent)" }}>vista</span>
            </span>

            <span
              className="hidden h-1.5 w-1.5 rounded-full sm:block"
              style={{ background: "var(--accent)" }}
            />
          </button>

          <nav className="hidden items-center md:flex">
            {LINKS.map((link, index) => (
              <div key={link.id} className="flex items-center">
                <button
                  onClick={() => handleNav(link.id)}
                  className="group relative px-4 py-2 text-[0.75rem] transition-colors duration-300"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span className="transition-colors duration-300 group-hover:text-[var(--text)]">
                    {link.label}
                  </span>

                  <span
                    className="
                      absolute bottom-0 left-4 right-4 h-px
                      origin-left scale-x-0
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                    style={{ background: "var(--accent)" }}
                  />
                </button>

                {index < LINKS.length - 1 && (
                  <span
                    className="h-3 w-px"
                    style={{ background: "var(--line)" }}
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center">
            <ThemeToggle className="mr-3 hidden sm:flex" />

            <span
              className="mr-3 hidden h-5 w-px sm:block"
              style={{ background: "var(--line)" }}
            />

            <button
              onClick={() => handleNav("contacto")}
              className="
                group hidden items-center gap-2
                rounded-full border
                px-4 py-2
                text-[0.72rem]
                transition-all duration-300
                hover:bg-[var(--accent)]
                hover:text-white
                sm:flex
              "
              style={{
                borderColor: "var(--accent)",
                color: "var(--text)",
              }}
            >
              Agenda tu visita

              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            <button
              className="flex h-9 w-9 items-center justify-center md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? (
                <X size={20} strokeWidth={1.25} />
              ) : (
                <Menu size={20} strokeWidth={1.25} />
              )}
            </button>
          </div>
        </div>

        {/* Panel desplegable (móvil) */}
        <div
          className={`
            grid transition-all duration-500 md:hidden
            ${open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div
              className="border-t px-5 py-4"
              style={{ borderColor: "var(--line)" }}
            >
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="flex w-full items-center justify-between border-b py-4 text-left text-[0.9rem]"
                  style={{
                    color: "var(--text)",
                    borderColor: "var(--line)",
                  }}
                >
                  {link.label}

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.25}
                    style={{ color: "var(--text-muted)" }}
                  />
                </button>
              ))}

              <div className="flex items-center justify-between pt-5">
                <ThemeToggle />

                <button
                  onClick={() => handleNav("contacto")}
                  className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-[0.75rem]"
                  style={{
                    borderColor: "var(--accent)",
                    color: "var(--text)",
                  }}
                >
                  Agenda tu visita
                  <ArrowUpRight size={13} strokeWidth={1.25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}