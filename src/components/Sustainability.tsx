import { Sun, Sprout, HeartHandshake, ArrowRight } from "lucide-react";
import { media } from "../data/media";

const cards = [
  {
    icon: Sun,
    stat: "100%",
    title: "Energía limpia",
    text: "Toda nuestra planta opera con energía hidroeléctrica y solar en alianza con el parque EMNADESA. Cada plato cuida el planeta.",
  },
  {
    icon: Sprout,
    stat: "0",
    title: "Transgénicos",
    text: "Trigo Non-GMO certificado de EE.UU. y procesos auditados ISO 9001. Trazabilidad total del campo a tu mesa.",
  },
  {
    icon: HeartHandshake,
    stat: "+40",
    title: "Años solidarios",
    text: "Patrocinadores oficiales de La Cremalotón y Pro Niñez. Porque crecer en Panamá es crecer con Panamá.",
  },
];

export default function Sustainability() {
  return (
    <section id="sostenibilidad" className="relative overflow-hidden bg-green-deep py-20 md:py-28 grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(201,162,39,0.12),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.35),transparent_60%)]" />
      {/* leaf pattern */}
      <div className="absolute inset-0 opacity-[0.06] text-cream text-[10rem] leading-none select-none pointer-events-none flex items-center justify-around font-display italic">
        <span>Terra</span><span className="hidden md:block">Nostra</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal-left">
            <div className="ornament text-mist">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Responsabilità</span>
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-cream">
              Buena pasta, <span className="italic text-mist">buen planeta</span>
            </h2>
            <p className="mt-4 leading-relaxed text-cream/70">
              Ser líderes no es solo vender más pasta: es producirla de forma que Panamá siga siendo verde
              por otros 40 años. Calidad certificada, energía renovable y compromiso social real.
            </p>
            <div className="mt-7 overflow-hidden rounded-2xl border border-cream/15">
              <img
                src={media["sustain"]}
                alt="Campo de trigo dorado sostenible"
                className="h-52 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-4">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className={`reveal-right d-${i + 1} group flex gap-5 rounded-3xl border border-cream/12 bg-cream/[0.06] p-6 md:p-7 backdrop-blur transition-all duration-300 hover:bg-cream/[0.1] hover:border-mist/40 hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-espresso transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-2xl text-mist">{c.stat}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-cream">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/65">{c.text}</p>
                </div>
              </div>
            ))}
            <a href="#delivery" className="reveal-right d-4 group inline-flex items-center gap-2 pl-2 text-sm font-bold uppercase tracking-wider text-mist hover:text-cream transition-colors">
              Compra consciente, recibe gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
