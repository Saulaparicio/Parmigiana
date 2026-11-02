import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import Quality from "./components/Quality";
import History from "./components/History";
import Recipes from "./components/Recipes";
import Sustainability from "./components/Sustainability";
import Testimonials from "./components/Testimonials";
import DeliveryCTA from "./components/DeliveryCTA";
import Footer from "./components/Footer";
import CartDrawer, { type CartItem } from "./components/CartDrawer";
import RecipeModal from "./components/RecipeModal";
import { useRevealObserver } from "./hooks/useReveal";
import type { Recipe } from "./data/content";
import { products } from "./data/content";
import { CheckCircle2, MessageCircle, ArrowUp } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [ordered, setOrdered] = useState(false);

  useRevealObserver();

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  };

  const addToCart = useCallback((id: string) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === id);
      if (found) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id, qty: 1 }];
    });
    const p = products.find((x) => x.id === id);
    showToast(`${p?.name ?? "Producto"} añadido al carrito`);
  }, []);

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
    }
  };

  const removeItem = (id: string) => setCart((prev) => prev.filter((i) => i.id !== id));

  const checkout = () => {
    setCartOpen(false);
    setOrdered(true);
    setCart([]);
    setTimeout(() => setOrdered(false), 5000);
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-cream font-body text-espresso">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero onAdd={addToCart} />
        <Marquee />
        <Quality />
        <History />
        <Recipes onOpen={setRecipe} />
        <Sustainability />
        <Testimonials />
        <DeliveryCTA />
        <Products onAdd={addToCart} />
      </main>

      <Footer />

      {/* Floating buttons */}
      <div className="fixed bottom-20 md:bottom-5 right-4 md:right-5 z-40 flex flex-col gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver arriba"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-cream/90 text-espresso shadow-lg backdrop-blur transition hover:bg-espresso hover:text-cream"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
        <a
          href="https://wa.me/50762998877?text=Hola%20La%20Parmigiana%2C%20quiero%20hacer%20un%20pedido"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_-8px_rgba(37,211,102,0.7)] transition hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          <MessageCircle className="relative h-6 w-6" />
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-espresso px-3 py-1.5 text-xs font-semibold text-cream opacity-0 transition-all group-hover:opacity-100">
            ¿Pedimos por WhatsApp?
          </span>
        </a>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
        <a
          href="#productos"
          className="flex items-center justify-center gap-2 rounded-full bg-rosso py-3.5 text-sm font-bold uppercase tracking-wider text-cream shadow-[0_15px_40px_-10px_rgba(228,0,43,0.8)]"
        >
          Comprar ahora — Envío gratis 🚚
        </a>
      </div>

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onUpdate={updateQty}
        onRemove={removeItem}
        onCheckout={checkout}
      />

      <RecipeModal recipe={recipe} onClose={() => setRecipe(null)} onAdd={addToCart} />

      {/* Toast */}
      <div
        className={`fixed left-1/2 top-24 z-[90] -translate-x-1/2 transition-all duration-300 ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2.5 rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-cream shadow-2xl border border-mist/30">
          <CheckCircle2 className="h-4.5 w-4.5 h-5 w-5 text-mist" />
          {toast}
        </div>
      </div>

      {/* Order success */}
      {ordered && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-espresso/80 backdrop-blur-sm" onClick={() => setOrdered(false)} />
          <div className="relative max-w-sm rounded-[28px] bg-cream p-8 text-center shadow-2xl hero-anim hero-1">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green text-cream">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <h3 className="mt-4 font-display text-3xl text-espresso">¡Grazie mille!</h3>
            <p className="mt-2 text-sm text-espresso/60">
              Tu pedido <strong>#8,413</strong> fue recibido. Te contactaremos por WhatsApp para coordinar la entrega gratis. 🍝
            </p>
            <button
              onClick={() => setOrdered(false)}
              className="mt-5 w-full rounded-full bg-rosso py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-rosso-deep"
            >
              Perfecto
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
