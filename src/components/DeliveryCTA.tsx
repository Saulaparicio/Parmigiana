import { Truck, MousePointerClick, CreditCard, PackageCheck, ArrowRight, Phone } from "lucide-react";
import { media } from "../data/media";

const steps = [
  { icon: MousePointerClick, title: "Elige", text: "Arma tu pedido con +260 productos" },
  { icon: CreditCard, title: "Paga online", text: "Tarjeta, Yappy o transferencia" },
  { icon: PackageCheck, title: "Recibe gratis", text: "Entrega a domicilio en Panamá" },
];

export default function DeliveryCTA() {
  return (
    <section id="delivery" className="relative overflow-hidden bg-rosso py-20 md:py-24 grain">
      {/* pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border-[28px] border-cream" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full border-[32px] border-mist" />
        <div className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full border-[20px] border-espresso" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-espresso/25 border border-cream/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur">
              <Truck className="h-4 w-4 text-mist" />
              Delivery oficial Parmigiana
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.03] text-cream">
              Tu despensa italiana <span className="italic text-mist">a domicilio</span>
            </h2>
            <p className="mx-auto lg:mx-0 mt-4 max-w-md text-cream/80 leading-relaxed">
              Sin filas, sin vueltas. Compra desde tu celular y recibe nuestros productos de fábrica
              con <strong className="text-cream">entrega GRATIS a domicilio</strong> en todo Panamá.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              {steps.map((s, i) => (
                <div key={s.title} className="relative rounded-2xl bg-cream/10 border border-cream/20 p-4 backdrop-blur text-center">
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-cream px-2 py-0.5 text-[10px] font-bold text-espresso">
                    {i + 1}
                  </span>
                  <s.icon className="mx-auto h-6 w-6 text-mist" />
                  <p className="mt-2 text-sm font-bold text-cream">{s.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-cream/65">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#productos"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-bold uppercase tracking-wider text-rosso-deep shadow-2xl transition-all hover:bg-mist hover:-translate-y-1"
              >
                Empezar mi pedido
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+5071636862"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-cream/10"
              >
                <Phone className="h-4 w-4" /> 1636-862
              </a>
            </div>
            <p className="mt-4 text-[11px] text-cream/50">*Válido para Ciudad de Panamá, Panamá Oeste y Veraguas. Otras provincias desde $35.</p>
          </div>

          <div className="reveal-right relative hidden lg:block">
            <div className="relative animate-float-slow">
              <img
                src={media["delivery"]}
                alt="Familia sirviendo pasta Parmigiana"
                className="h-[480px] w-full rounded-[32px] object-cover shadow-2xl border-4 border-cream/20"
              />
              <div className="absolute -left-6 bottom-8 rounded-2xl bg-cream p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green text-cream">
                    <Truck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-espresso">Pedido #8,412 en camino</p>
                    <p className="text-xs text-espresso/55">Llega hoy · 3:00 — 5:00 pm</p>
                  </div>
                </div>
                <div className="mt-3 h-1.5 w-56 overflow-hidden rounded-full bg-espresso/10">
                  <div className="h-full w-3/4 rounded-full bg-green" />
                </div>
              </div>
              <div className="absolute -right-4 -top-4 rounded-2xl bg-espresso px-5 py-3 shadow-2xl">
                <p className="font-display text-2xl text-mist">Gratis</p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Envío +$25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
