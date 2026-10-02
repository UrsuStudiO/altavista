import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { images, contactUnits } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const fieldBase =
  "w-full border-b bg-transparent pb-3 pt-2 text-[0.98rem] outline-none transition-colors duration-300 placeholder:text-[var(--text-muted)]";

export default function Contact() {
  const ref = useReveal({ duration: 1.1 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", unit: contactUnits[0]?.id ?? "", message: "" });

  const handleChange = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" ref={ref} className="relative w-full py-28 md:py-36" style={{ background: "var(--bg)" }}>
      <div className="container-page grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5" data-reveal>
          <p className="eyebrow mb-6">Contacto</p>
          <h2 className="font-display max-w-md text-[2.4rem] font-light leading-[1.05] tracking-[-0.02em] sm:text-[3.1rem]">
            Agenda tu visita privada.
          </h2>
          <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Un asesor te acompaña en un recorrido de una hora por la unidad de tu interés, sin
            compromiso.
          </p>

          <div className="relative mt-10 hidden aspect-[4/5] w-full overflow-hidden md:block">
            <img
              src={images.contacto}
              alt="Residencia Altavista iluminada al anochecer"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} data-reveal className="md:col-span-6 md:col-start-7">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <label className="flex flex-col gap-1 sm:col-span-1">
              <span className="text-[0.78rem]" style={{ color: "var(--text-muted)" }}>
                Nombre
              </span>
              <input
                required
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Tu nombre completo"
                className={fieldBase}
                style={{ borderColor: "var(--line-strong)", color: "var(--text)" }}
              />
            </label>

            <label className="flex flex-col gap-1 sm:col-span-1">
              <span className="text-[0.78rem]" style={{ color: "var(--text-muted)" }}>
                Correo electrónico
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="tu@correo.com"
                className={fieldBase}
                style={{ borderColor: "var(--line-strong)", color: "var(--text)" }}
              />
            </label>

            <label className="flex flex-col gap-1 sm:col-span-1">
              <span className="text-[0.78rem]" style={{ color: "var(--text-muted)" }}>
                Teléfono
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={handleChange("phone")}
                placeholder="+591 ..."
                className={fieldBase}
                style={{ borderColor: "var(--line-strong)", color: "var(--text)" }}
              />
            </label>

            <label className="flex flex-col gap-1 sm:col-span-1">
              <span className="text-[0.78rem]" style={{ color: "var(--text-muted)" }}>
                Unidad de interés
              </span>
              <select
                value={form.unit}
                onChange={handleChange("unit")}
                className={fieldBase}
                style={{ borderColor: "var(--line-strong)", color: "var(--text)" }}
              >
                {contactUnits.map((u) => (
                  <option key={u.id} value={u.id} style={{ color: "#1A1917" }}>
                    {u.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1 sm:col-span-2">
              <span className="text-[0.78rem]" style={{ color: "var(--text-muted)" }}>
                Mensaje (opcional)
              </span>
              <textarea
                rows={3}
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Cuéntanos qué buscas o cuándo te gustaría visitar"
                className={`${fieldBase} resize-none`}
                style={{ borderColor: "var(--line-strong)", color: "var(--text)" }}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-10 w-full rounded-full py-4 text-[0.88rem] tracking-wide transition-transform duration-300 hover:scale-[1.01] sm:w-auto sm:px-10"
            style={{ background: "var(--accent)", color: "#0D0C0A" }}
          >
            Agenda tu visita privada
          </button>
        </form>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "rgba(10,9,7,0.7)" }}
              onClick={() => setSubmitted(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              className="relative w-full max-w-sm p-10 text-center"
              style={{ background: "var(--bg-2)", border: "1px solid var(--line-strong)" }}
            >
              <button
                onClick={() => setSubmitted(false)}
                aria-label="Cerrar"
                className="absolute right-4 top-4"
                style={{ color: "var(--text-muted)" }}
              >
                <X size={18} strokeWidth={1.25} />
              </button>
              <div
                className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ border: "1px solid var(--accent)" }}
              >
                <Check size={20} strokeWidth={1.25} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="font-display text-[1.4rem] font-light">Solicitud recibida</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Un asesor de Altavista se pondrá en contacto contigo en las próximas 24 horas para
                confirmar tu visita.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
