import { Clock, Users, ArrowUpRight, Flame } from "lucide-react";
import { recipes, type Recipe } from "../data/content";

type Props = { onOpen: (r: Recipe) => void };

export default function Recipes({ onOpen }: Props) {
  return (
    <section id="recetas" className="relative overflow-hidden bg-cream-dark/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="reveal max-w-xl">
            <div className="ornament text-red">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Ricette della casa</span>
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05]">
              Recetas que saben <span className="italic text-rosso">a domingo en familia</span>
            </h2>
          </div>
          <p className="reveal d-1 max-w-sm text-espresso/60 md:text-right">
            Creadas por nuestros chefs con productos Parmigiana. Elige una, cocina y presume.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {recipes.map((r, i) => (
            <article
              key={r.id}
              onClick={() => onOpen(r)}
              className={`reveal d-${i + 1} group cursor-pointer overflow-hidden rounded-[26px] bg-white border border-espresso/8 shadow-[0_15px_50px_-15px_rgba(16,24,64,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_70px_-15px_rgba(228,0,43,0.35)]`}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-espresso/75 backdrop-blur px-3 py-1.5 text-[11px] font-bold text-cream">
                    <Clock className="h-3 w-3 text-mist" /> {r.time}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-espresso/75 backdrop-blur px-3 py-1.5 text-[11px] font-bold text-cream">
                    <Flame className="h-3 w-3 text-mist" /> {r.difficulty}
                  </span>
                </div>
                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-espresso opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <div className="absolute bottom-4 left-4 right-16">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mist">{r.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-espresso group-hover:text-rosso transition-colors">{r.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-espresso/55">{r.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-espresso/8 pt-4 text-xs text-espresso/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-rosso" /> {r.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" /> {r.servings}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
