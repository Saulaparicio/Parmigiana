import { useEffect } from "react";
import { X, Clock, Users, Flame, ShoppingBag, Check } from "lucide-react";
import type { Recipe } from "../data/content";
import { products } from "../data/content";
import { productImages } from "../data/product-images";

type Props = {
  recipe: Recipe | null;
  onClose: () => void;
  onAdd: (id: string) => void;
};

export default function RecipeModal({ recipe, onClose, onAdd }: Props) {
  useEffect(() => {
    document.body.style.overflow = recipe ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [recipe, onClose]);

  if (!recipe) return null;
  const used = products.filter((p) => recipe.productIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-espresso/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] sm:rounded-[28px] bg-cream shadow-2xl">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-espresso/70 text-cream backdrop-blur transition hover:bg-rosso"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-5 left-6 right-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-mist">{recipe.subtitle}</p>
            <h3 className="mt-1 font-display text-3xl sm:text-4xl text-cream">{recipe.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {[
                { icon: Clock, t: recipe.time },
                { icon: Users, t: recipe.servings },
                { icon: Flame, t: recipe.difficulty },
              ].map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 rounded-full bg-cream/15 backdrop-blur px-3 py-1.5 font-semibold text-cream">
                  <b.icon className="h-3.5 w-3.5 text-mist" /> {b.t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="leading-relaxed text-espresso/70">{recipe.description}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.4fr]">
            <div className="rounded-2xl bg-white border border-espresso/10 p-5 h-fit">
              <h4 className="font-display text-lg text-espresso">Ingredientes</h4>
              <ul className="mt-3 space-y-2.5">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-espresso/70">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg text-espresso">Preparación</h4>
              <ol className="mt-3 space-y-3">
                {recipe.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 rounded-xl bg-white border border-espresso/10 p-4 text-[13px] leading-relaxed text-espresso/70">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rosso font-display text-sm text-cream">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Products used */}
          <div className="mt-6 rounded-2xl bg-espresso p-5 sm:p-6 grain relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(201,162,39,0.2),transparent_50%)]" />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.25em] text-mist">
              Cocínala con Parmigiana
            </p>
            <div className="relative mt-3 space-y-2.5">
              {used.map((p) => (
                <div key={p.id} className="flex items-center gap-3 rounded-xl bg-cream/8 border border-cream/10 p-2.5 bg-white/5">
                  <img src={productImages[p.id] ?? p.img ?? ""} alt={p.name} className="h-12 w-12 rounded-lg bg-cream object-contain p-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-cream">{p.name}</p>
                    <p className="text-xs text-cream/50">${p.price.toFixed(2)} · {p.weight}</p>
                  </div>
                  <button
                    onClick={() => onAdd(p.id)}
                    className="flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-espresso transition hover:bg-mist"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Añadir
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
