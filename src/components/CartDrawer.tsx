import { useEffect } from "react";
import { X, Minus, Plus, Trash2, Truck, Lock, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import { products } from "../data/content";
import { productImages } from "../data/product-images";

export type CartItem = { id: string; qty: number };

type Props = {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdate: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
};

const FREE_SHIPPING = 25;

export default function CartDrawer({ open, items, onClose, onUpdate, onRemove, onCheckout }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  const detailed = items
    .map((it) => ({ ...it, product: products.find((p) => p.id === it.id)! }))
    .filter((d) => d.product);
  const subtotal = detailed.reduce((s, d) => s + d.product.price * d.qty, 0);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING) * 100);
  const missing = Math.max(0, FREE_SHIPPING - subtotal);

  return (
    <div className={`fixed inset-0 z-[80] ${open ? "" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-espresso/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-espresso/10 bg-espresso px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rosso text-cream">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl text-cream">Tu carrito</h3>
              <p className="text-xs text-cream/55">{detailed.length} producto(s)</p>
            </div>
          </div>
          <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-rosso" aria-label="Cerrar carrito">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="border-b border-espresso/10 bg-white px-6 py-4">
          <div className="flex items-center gap-2 text-[13px]">
            <Truck className={`h-4 w-4 ${missing === 0 ? "text-green" : "text-rosso"}`} />
            {missing === 0 ? (
              <p className="font-bold text-green">¡Tienes ENVÍO GRATIS! 🎉</p>
            ) : (
              <p className="text-espresso/70">
                Te faltan <strong className="text-rosso">${missing.toFixed(2)}</strong> para envío gratis
              </p>
            )}
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-espresso/10">
            <div
              className={`h-full rounded-full transition-all duration-500 ${missing === 0 ? "bg-green" : "bg-gradient-to-r from-rosso to-red"}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {detailed.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <Logo className="h-20 w-auto opacity-50" />
              <p className="mt-4 font-display text-2xl text-espresso">Tu carrito está vacío</p>
              <p className="mt-1 max-w-[240px] text-sm text-espresso/55">
                La pasta perfecta te espera. Empieza con nuestros más vendidos.
              </p>
              <button
                onClick={onClose}
                className="mt-5 rounded-full bg-rosso px-6 py-3 text-xs font-bold uppercase tracking-wider text-cream transition hover:bg-rosso-deep"
              >
                Ver productos
              </button>
            </div>
          ) : (
            detailed.map((d) => (
              <div key={d.id} className="flex gap-3 rounded-2xl border border-espresso/10 bg-white p-3">
                <img
                  src={productImages[d.id] ?? d.product.img ?? ""}
                  alt={d.product.name}
                  className="h-20 w-20 shrink-0 rounded-xl bg-cream-dark object-contain p-1"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-espresso leading-tight">{d.product.name}</p>
                      <p className="text-xs text-espresso/50">{d.product.weight}</p>
                    </div>
                    <button onClick={() => onRemove(d.id)} className="text-espresso/30 transition hover:text-rosso" aria-label="Eliminar">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 rounded-full border border-espresso/10 px-1.5 py-1">
                      <button
                        onClick={() => onUpdate(d.id, Math.max(0, d.qty - 1))}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-espresso/5 transition hover:bg-rosso hover:text-cream"
                        aria-label="Quitar uno"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-5 text-center text-sm font-bold">{d.qty}</span>
                      <button
                        onClick={() => onUpdate(d.id, d.qty + 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-espresso/5 transition hover:bg-rosso hover:text-cream"
                        aria-label="Agregar uno"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="font-display text-lg text-espresso">${(d.product.price * d.qty).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {detailed.length > 0 && (
          <div className="border-t border-espresso/10 bg-white px-6 py-5">
            <div className="flex items-center justify-between text-sm text-espresso/60">
              <span>Subtotal</span>
              <span className="font-semibold text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm text-espresso/60">
              <span>Envío</span>
              <span className={`font-semibold ${missing === 0 ? "text-green" : "text-espresso"}`}>
                {missing === 0 ? "GRATIS" : "$3.95"}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-dashed border-espresso/15 pt-3">
              <span className="font-bold text-espresso">Total</span>
              <span className="font-display text-2xl text-rosso">${(subtotal + (missing === 0 ? 0 : 3.95)).toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-rosso py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-lg shadow-rosso/30 transition hover:bg-rosso-deep active:scale-[0.98]"
            >
              <Lock className="h-4 w-4" /> Pagar ahora — Pago seguro
            </button>
            <p className="mt-2 text-center text-[11px] text-espresso/45">Tarjeta · Yappy · Transferencia · Pago contra entrega</p>
          </div>
        )}
      </aside>
    </div>
  );
}
