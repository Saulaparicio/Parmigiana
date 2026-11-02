import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, Truck, Phone, ChevronDown } from "lucide-react";
import Logo from "./Logo";

type Props = {
  cartCount: number;
  onCartOpen: () => void;
};

const links = [
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#historia" },
  { label: "Recetas", href: "#recetas" },
  { label: "Calidad", href: "#calidad" },
  { label: "Sostenibilidad", href: "#sostenibilidad" },
];

export default function Navbar({ cartCount, onCartOpen }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <div
        className={`bg-espresso text-cream transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-[11px] sm:text-xs tracking-wide">
          <Truck className="h-3.5 w-3.5 text-mist" />
          <p className="font-medium">
            <span className="text-mist font-semibold">ENVÍO GRATIS</span> en todo Panamá por compras desde $25
            <span className="mx-2 hidden sm:inline text-cream/40">|</span>
            <a href="#productos" className="hidden sm:inline underline decoration-mist/60 underline-offset-2 hover:text-mist transition">
              Comprar ahora
            </a>
          </p>
          <span className="hidden md:flex items-center gap-1.5 ml-6 text-cream/70">
            <Phone className="h-3 w-3" /> 1636-862
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(16,24,64,0.25)] border-b border-espresso/8"
            : "bg-gradient-to-b from-espresso/80 to-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          {/* Logo oficial */}
          <a href="#inicio" className="group flex shrink-0 items-center" aria-label="La Parmigiana — inicio">
            <Logo className="h-12 w-auto drop-shadow-[0_4px_12px_rgba(16,24,64,0.3)] transition-transform duration-300 group-hover:scale-[1.04] md:h-14" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`link-underline text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  scrolled ? "text-espresso/80 hover:text-rosso" : "text-cream/90 hover:text-mist"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="#productos"
              className="group relative hidden sm:inline-flex items-center gap-2 overflow-hidden rounded-full bg-rosso px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-cream shadow-lg shadow-rosso/30 transition-all hover:bg-rosso-deep hover:shadow-xl hover:shadow-rosso/40 hover:-translate-y-0.5"
            >
              <span className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shine" />
              Comprar ahora
              <ChevronDown className="h-4 w-4 rotate-[-90deg] transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={onCartOpen}
              aria-label="Abrir carrito"
              className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 ${
                scrolled
                  ? "border-espresso/15 bg-white text-espresso hover:border-rosso hover:text-rosso"
                  : "border-cream/25 bg-white/10 backdrop-blur text-cream hover:border-mist hover:text-mist"
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red px-1 text-[10px] font-bold text-cream ring-2 ring-cream">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menú"
              className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden transition-colors ${
                scrolled ? "text-espresso" : "text-cream"
              }`}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[420px]" : "max-h-0"}`}>
          <div className="bg-cream/98 backdrop-blur-xl border-t border-espresso/10 px-6 py-5 space-y-1">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-lg transition-all hover:bg-rosso/5 hover:text-rosso ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                {l.label}
                <span className="text-red text-xl">→</span>
              </a>
            ))}
            <a
              href="#productos"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-rosso px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-cream"
            >
              <ShoppingBag className="h-4 w-4" /> Comprar ahora — Envío gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
