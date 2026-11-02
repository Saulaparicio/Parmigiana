import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const item = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic text-[22vw] leading-none text-rosso/[0.04] select-none whitespace-nowrap">
        Grazie
      </span>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="reveal">
          <div className="ornament justify-center text-red">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Voces de Panamá</span>
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-espresso">
            Lo que dicen <span className="italic text-rosso">nuestras familias</span>
          </h2>
        </div>

        <div className="reveal d-1 relative mt-10 rounded-[28px] border border-espresso/10 bg-white p-8 md:p-12 shadow-[0_30px_70px_-20px_rgba(16,24,64,0.25)]">
          <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-rosso text-cream shadow-lg shadow-rosso/40">
            <Quote className="h-5 w-5 fill-current" />
          </span>
          <div key={active} className="hero-anim hero-1">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-red text-red" />
              ))}
            </div>
            <blockquote className="mx-auto mt-5 max-w-2xl font-display text-xl md:text-2xl leading-relaxed text-espresso italic">
              “{item.quote}”
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso font-bold text-sm text-mist">
                {item.initials}
              </span>
              <span className="text-left">
                <span className="block font-bold text-espresso text-sm">{item.name}</span>
                <span className="block text-xs text-espresso/55">{item.role}</span>
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 transition hover:bg-espresso hover:text-cream"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-rosso" : "w-2 bg-espresso/20 hover:bg-espresso/40"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((a) => (a + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-rosso text-cream transition hover:bg-rosso-deep"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
