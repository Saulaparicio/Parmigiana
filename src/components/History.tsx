import { useState } from "react";
import { timeline } from "../data/content";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function History() {
  const [active, setActive] = useState(0);
  const item = timeline[active];

  return (
    <section id="historia" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <Logo className="mx-auto h-20 w-auto drop-shadow-[0_10px_25px_rgba(16,24,64,0.18)]" />
          <div className="ornament justify-center mt-5 text-red">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Nuestra storia</span>
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05]">
            42 años <span className="italic text-rosso">alimentando historias</span>
          </h2>
          <p className="mt-4 text-espresso/60">
            De un molino en Veraguas a la mesa de todo Panamá y la región. Esta es nuestra línea del tiempo.
          </p>
        </div>

        {/* Year selector */}
        <div className="reveal d-1 mt-10 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {timeline.map((t, i) => (
            <button
              key={t.year}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-display text-lg transition-all duration-300 ${
                active === i
                  ? "bg-rosso text-cream shadow-lg shadow-rosso/30 scale-105"
                  : "bg-white text-espresso/50 border border-espresso/10 hover:border-rosso/40 hover:text-rosso"
              }`}
            >
              {t.year}
            </button>
          ))}
        </div>

        {/* Progress line */}
        <div className="mx-auto mt-4 h-1 max-w-3xl overflow-hidden rounded-full bg-espresso/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rosso to-red transition-all duration-500"
            style={{ width: `${((active + 1) / timeline.length) * 100}%` }}
          />
        </div>

        {/* Card */}
        <div className="reveal d-2 mx-auto mt-8 max-w-5xl">
          <div className="grid overflow-hidden rounded-[28px] border border-espresso/10 bg-white shadow-[0_30px_80px_-20px_rgba(16,24,64,0.25)] md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                key={item.image}
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
              <span className="absolute bottom-4 left-4 rounded-full bg-espresso/80 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-mist">
                {item.year}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-rosso">
                <MapPin className="h-3.5 w-3.5" /> Panamá · Veraguas
              </p>
              <h3 key={item.title} className="mt-2 font-display text-3xl md:text-4xl text-espresso">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-espresso/60">{item.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => setActive((a) => (a - 1 + timeline.length) % timeline.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-all hover:bg-espresso hover:text-cream"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setActive((a) => (a + 1) % timeline.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-rosso text-cream transition-all hover:bg-rosso-deep"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="ml-2 text-sm text-espresso/40 font-medium">
                  {String(active + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
