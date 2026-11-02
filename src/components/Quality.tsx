import { Wheat, Dna, Zap, Award, ArrowRight } from "lucide-react";
import { media } from "../data/media";

const features = [
  {
    icon: Wheat,
    title: "100% Hard Amber Durum",
    text: "El trigo con más proteína del mundo, importado de EE.UU. Color dorado natural y mordida firme que no se deshace.",
  },
  {
    icon: Award,
    title: "13.75% de proteína",
    text: "La cifra más alta del mercado panameño. Más nutrición, mejor textura y salsas que se adhieren perfecto.",
  },
  {
    icon: Dna,
    title: "Trigo Non-GMO",
    text: "Grano certificado libre de modificación genética. Pureza que se saborea en cada tenedor.",
  },
  {
    icon: Zap,
    title: "Energía 100% limpia",
    text: "Producimos con energía hidroeléctrica y solar del Grupo EMNADESA. Buena para ti, mejor para Panamá.",
  },
];

export default function Quality() {
  return (
    <section id="calidad" className="relative overflow-hidden bg-espresso py-20 md:py-28 grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(228,0,43,0.35),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(201,162,39,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image side */}
          <div className="reveal-left relative">
            <div className="relative overflow-hidden rounded-[32px] border border-cream/10">
              <img
                src={media["quality"]}
                alt="Trigo dorado Hard Amber Durum"
                className="h-[420px] md:h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              {/* Floating protein badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-5 rounded-2xl border border-mist/30 bg-espresso/80 p-5 backdrop-blur-xl">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cream font-display text-lg font-bold text-espresso leading-none text-center">
                  13.75<br />%
                </div>
                <div>
                  <p className="font-display text-lg text-cream leading-tight">Proteína verificada en laboratorio</p>
                  <p className="text-xs text-cream/60 mt-1">vs. 10-11% promedio de pastas importadas</p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-cream/10">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-red-deep to-red" />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating ISO card */}
            <div className="absolute -right-3 md:-right-6 -top-6 animate-float rounded-2xl border border-cream/15 bg-cream p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rosso text-cream">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-espresso leading-none">ISO 9001</p>
                  <p className="mt-1 text-[11px] text-espresso/60">Primeros en Panamá · 2018</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy side */}
          <div>
            <div className="reveal">
              <div className="ornament text-mist">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Por qué somos diferentes</span>
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-cream">
                No toda la pasta es <span className="italic text-mist">Parmigiana</span>
              </h2>
              <p className="mt-4 max-w-lg text-cream/65 leading-relaxed">
                Mientras otros abaratan con trigos blandos, nosotros mantenemos desde 1983 una obsesión:
                el mejor grano, la mejor tecnología italiana y cero atajos.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal d-${i + 1} group rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 backdrop-blur transition-all duration-300 hover:border-mist/40 hover:bg-cream/[0.07] hover:-translate-y-1`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist/15 text-mist transition-all group-hover:bg-cream group-hover:text-espresso">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-lg text-cream">{f.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-cream/60">{f.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#historia"
              className="reveal d-4 group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-mist hover:text-cream transition-colors"
            >
              Conoce nuestra historia de 42 años
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
