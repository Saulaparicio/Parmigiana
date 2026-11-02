import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check, CreditCard } from "lucide-react";
import Logo from "./Logo";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H7.5v3H10v7h3.5Z" /></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg>
);
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.9C18.2 4.9 12 4.9 12 4.9s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27.4 27.4 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.9c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.9c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" /></svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingresa un correo válido");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-espresso grain overflow-hidden">
      {/* Newsletter band */}
      <div className="border-b border-cream/10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8 py-14 lg:grid-cols-2">
          <div className="reveal-left text-center lg:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-mist">La Famiglia Parmigiana</p>
            <h3 className="mt-2 font-display text-3xl md:text-4xl text-cream leading-tight">
              Recibe recetas y <span className="italic text-mist">10% OFF</span> en tu primer pedido
            </h3>
            <p className="mt-2 text-sm text-cream/55">Únete a +25,000 panameños. Sin spam, solo sabor. Date de baja cuando quieras.</p>
          </div>
          <div className="reveal-right">
            {subscribed ? (
              <div className="flex items-center gap-4 rounded-2xl border border-green/40 bg-green/15 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green text-cream">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-cream">¡Benvenuto alla famiglia! 🎉</p>
                  <p className="text-sm text-cream/60">Revisa tu correo: tu cupón <strong className="text-mist">BENVENUTO10</strong> va en camino.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full rounded-full border border-cream/20 bg-cream/8 bg-white/5 px-6 py-4 text-sm text-cream placeholder:text-cream/35 outline-none transition focus:border-mist/60 focus:bg-white/10"
                  />
                  {error && <p className="mt-2 pl-4 text-xs text-[#FF8A9B]">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-lg shadow-red/30 transition hover:bg-red-deep hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" /> Quiero mi 10%
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo className="h-24 w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]" />
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.32em] text-mist">Dal 1983 · Panamá</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
              Empresa 100% panameña, líder en pastas desde 1983. Calidad ISO 9001, trigo Non-GMO
              y energía 100% limpia en cada producto.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: FacebookIcon, label: "Facebook" },
                { icon: InstagramIcon, label: "Instagram" },
                { icon: YoutubeIcon, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#inicio"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition hover:border-red hover:bg-red hover:text-cream hover:-translate-y-1"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-cream/40">
              <CreditCard className="h-4 w-4" /> Visa · Mastercard · Yappy · ACH
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-mist">Productos</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/65">
              {["Pastas clásicas", "Pastas especiales", "Salsas artesanales", "Aceites de oliva", "Sin gluten", "Tienda online"].map((l) => (
                <li key={l}>
                  <a href="#productos" className="transition hover:text-mist">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-mist">Empresa</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/65">
              {[
                ["Nuestra historia", "#historia"],
                ["Calidad ISO 9001", "#calidad"],
                ["Recetas", "#recetas"],
                ["Sostenibilidad", "#sostenibilidad"],
                ["Delivery", "#delivery"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="transition hover:text-mist">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-mist">Contacto</h4>
            <ul className="mt-4 space-y-3.5 text-sm text-cream/65">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-mist" />
                Vía Interamericana, Santiago de Veraguas, Panamá
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-mist" />
                <a href="tel:+5071636862" className="hover:text-mist">+507 1636-862 · Pedidos y delivery</a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-mist" />
                <a href="mailto:hola@parmigiana.com.pa" className="hover:text-mist">hola@parmigiana.com.pa</a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-mist" />
                Lun–Sáb · 8:00 am – 6:00 pm
              </li>
            </ul>
            <a
              href="#delivery"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-mist/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-mist transition hover:bg-red hover:text-cream"
            >
              Rastrear mi pedido →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-5 text-xs text-cream/40">
          <p>© 2026 La Parmigiana · Agro Industrias Alimenticias de Veraguas. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#inicio" className="hover:text-mist">Política de privacidad</a>
            <a href="#inicio" className="hover:text-mist">Términos</a>
            <span className="text-mist/60">Hecho con ♥ en Panamá</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
