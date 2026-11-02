import { useMemo, useState } from "react";
import { ShoppingBag, Star, ArrowRight, BadgeCheck, ExternalLink } from "lucide-react";
import { products, featuredProducts, categories, totalProducts } from "../data/content";
import { productImages } from "../data/product-images";

type Props = { onAdd: (id: string) => void };

const STORE = "https://delivery.parmigiana.com.pa/shop/";

function Card({ p, i, onAdd, addedId }: { p: (typeof products)[number]; i: number; onAdd: (id: string) => void; addedId: string | null }) {
  const done = addedId === p.id;
  const handleAdd = () => onAdd(p.id);

  return (
    <article
      className="hero-anim group relative flex flex-col overflow-hidden rounded-3xl border border-espresso/8 bg-white shadow-[0_10px_40px_-15px_rgba(16,24,64,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(228,0,43,0.3)]"
      style={{ animationDelay: `${(i % 8) * 60}ms` }}
    >
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        className="relative block h-52 overflow-hidden bg-cream-dark"
        aria-label={`Ver ${p.name} en la tienda oficial`}
      >
        {productImages[p.id] ? (
          <img
            src={productImages[p.id]}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Star className="h-8 w-8 text-espresso/15" />
          </div>
        )}
        {p.kosher && (
          <span className="absolute left-3 top-3 rounded-full bg-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream shadow">
            Kosher
          </span>
        )}
        {p.weight && (
          <span className="absolute right-3 top-3 rounded-full bg-espresso/75 px-2.5 py-1 text-[10px] font-semibold text-cream backdrop-blur">
            {p.weight}
          </span>
        )}
        <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-espresso opacity-0 shadow transition-all duration-300 group-hover:opacity-100">
          <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.05rem] leading-snug text-espresso transition-colors group-hover:text-rosso min-h-[2.9em]">
          {p.name}
        </h3>

        <div className="mt-auto flex items-center justify-between border-t border-espresso/8 pt-4">
          <span className="font-display text-2xl text-espresso tnum">${p.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
              done
                ? "bg-green text-cream scale-105"
                : "bg-rosso text-cream hover:bg-rosso-deep hover:shadow-lg hover:shadow-rosso/30 active:scale-95"
            }`}
          >
            {done ? (
              <>
                <BadgeCheck className="h-4 w-4" /> ¡Listo!
              </>
            ) : (
              <>
                <ShoppingBag className="h-3.5 w-3.5" /> Añadir
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Products({ onAdd }: Props) {
  const [cat, setCat] = useState<string>("all");
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (cat === "all") return featuredProducts;
    return products.filter((p) => p.group === cat);
  }, [cat]);

  const countFor = (id: string) => (id === "all" ? products.length : products.filter((p) => p.group === id).length);

  const handleAdd = (id: string) => {
    onAdd(id);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <section id="productos" className="relative bg-cream py-20 md:py-28 overflow-hidden">
      <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-logo text-[18vw] leading-none text-espresso/[0.035] whitespace-nowrap">
        Parmigiana
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="ornament justify-center text-red">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Catálogo de fábrica</span>
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-espresso">
            Lo que vendemos <span className="italic text-rosso">hoy mismo</span>
          </h2>
          <p className="mt-4 text-espresso/60 leading-relaxed">
            {totalProducts} productos activos en la tienda oficial, con fotos, precios reales y entrega gratis a
            domicilio en todo Panamá.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal d-1 mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ${
                cat === c.id
                  ? "bg-espresso text-cream shadow-lg shadow-espresso/25 -translate-y-0.5"
                  : "bg-white text-espresso/60 border border-espresso/10 hover:border-rosso/40 hover:text-rosso"
              }`}
            >
              {c.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] tnum ${
                  cat === c.id ? "bg-cream/20 text-cream" : "bg-cream-dark text-espresso/50"
                }`}
              >
                {countFor(c.id)}
              </span>
            </button>
          ))}
        </div>

        {cat === "all" && (
          <p className="mt-6 text-center text-[13px] text-espresso/50">
            Mostrando destacados — selecciona una categoría para ver el estante completo.
          </p>
        )}

        {/* Grid */}
        <div key={cat} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <Card key={p.id} p={p} i={i} onAdd={handleAdd} addedId={addedId} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 flex flex-col items-center gap-4 rounded-3xl bg-espresso px-8 py-8 md:flex-row md:justify-between grain relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(228,0,43,0.22),transparent_55%)]" />
          <div className="relative text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-mist">Tienda online oficial</p>
            <h3 className="mt-1 font-display text-2xl md:text-3xl text-cream">
              ¿Quieres ver los {totalProducts} productos?
            </h3>
            <p className="mt-1 text-sm text-cream/60">
              Pago con tarjeta, Yappy o transferencia · Entrega gratis a domicilio
            </p>
          </div>
          <a
            href={STORE}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-espresso transition-all hover:bg-mist hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red/30"
          >
            Ir a la tienda completa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
