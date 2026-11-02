import { useState, useRef, useEffect } from "react";
import { ArrowRight, Play, Pause, SkipForward, Star, Award, Leaf, Wheat, ChevronDown, ShoppingBag, Film } from "lucide-react";
import { media } from "../data/media";

type Props = {
  onAdd: (id: string) => void;
};

const PASTA_VIDEOS = [
  {
    id: "salteado",
    title: "Salteado artesanal al sartén",
    subtitle: "Pasta cremosa al dente con salsa caliente",
    src: "https://videos.pexels.com/video-files/8964471/8964471-hd_1920_1080_25fps.mp4",
  },
  {
    id: "hervor",
    title: "Pasta fresca al hervor vivo",
    subtitle: "Inmersión y cocción con sal marina",
    src: "https://videos.pexels.com/video-files/6222571/6222571-hd_1920_1080_24fps.mp4",
  },
  {
    id: "ebullicion",
    title: "Punto al dente en olla de cobre",
    subtitle: "Ebullición y textura perfecta de trigo durum",
    src: "https://videos.pexels.com/video-files/6222573/6222573-hd_1920_1080_24fps.mp4",
  },
];

export default function Hero({ onAdd }: Props) {
  const [videoIdx, setVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = PASTA_VIDEOS[videoIdx];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [videoIdx]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextVideo = () => {
    setVideoIdx((prev) => (prev + 1) % PASTA_VIDEOS.length);
  };

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso grain">
      {/* Background: Video de preparación de pastas + imagen fallback */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Imagen de base (siempre presente para que nunca haya parpadeo en negro) */}
        <img
          src={media["hero-bg"]}
          alt="Preparación de pasta artesanal"
          aria-hidden="true"
          className="kenburns absolute inset-0 h-full w-full object-cover"
        />

        {/* Video en loop continuo de preparación de pastas */}
        <video
          ref={videoRef}
          key={currentVideo.src}
          autoPlay
          muted
          loop={false}
          playsInline
          poster={media["hero-bg"]}
          onLoadedData={() => setVideoLoaded(true)}
          onEnded={nextVideo}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={currentVideo.src} type="video/mp4" />
        </video>

        {/* Cinematic overlays — manteniendo EXACTAMENTE los mismos colores y gradientes */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/70" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,transparent_0%,rgba(16,24,64,0.6)_100%)]" />
      </div>

      {/* Decorative Italian stripes */}
      <div className="absolute left-0 top-0 hidden h-full w-1.5 flex-col md:flex z-10">
        <div className="flex-1 bg-green" />
        <div className="flex-1 bg-cream" />
        <div className="flex-1 bg-red" />
      </div>

      {/* Rotating badge */}
      <div className="absolute right-8 top-28 z-10 hidden xl:block hero-anim hero-5">
        <div className="relative h-32 w-32">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
            <defs>
              <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-mist text-[9.5px] font-semibold uppercase tracking-[0.22em]">
              <textPath href="#circlePath">100% trigo durum · dal 1983 ·</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Wheat className="h-8 w-8 text-mist" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 pt-36 pb-28 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: copy */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="hero-anim hero-1 mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-mist/40 bg-espresso/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-mist backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-mist animate-pulse-dot" />
                100% Panameña · Desde 1983
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/90 backdrop-blur border border-cream/15">
                <Award className="h-3.5 w-3.5 text-mist" /> ISO 9001 · Non-GMO
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-anim hero-2 font-display text-[13vw] sm:text-6xl md:text-7xl xl:text-[5.4rem] leading-[0.98] text-cream font-medium">
              El sabor de Italia,
              <br />
              <span className="italic font-light text-mist">el corazón</span> de
              <span className="relative inline-block ml-3">
                Panamá.
                <svg viewBox="0 0 220 12" className="absolute -bottom-2 left-0 w-full" fill="none">
                  <path d="M2 9C60 3 160 3 218 8" stroke="#B4C2EE" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-anim hero-3 mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-cream/80 font-light">
              Pasta elaborada con <strong className="font-semibold text-cream">100% trigo Hard Amber Durum</strong> y{" "}
              <strong className="font-semibold text-cream">13.75% de proteína</strong> — la más alta del mercado.
              Energía 100% limpia, delivery gratis en todo el país.
            </p>

            {/* CTAs */}
            <div className="hero-anim hero-4 mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#productos"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-rosso px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-cream shadow-[0_20px_60px_-10px_rgba(228,0,43,0.7)] transition-all duration-300 hover:bg-red hover:shadow-[0_25px_70px_-10px_rgba(228,0,43,0.9)] hover:-translate-y-1"
              >
                <span className="pointer-events-none absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                <ShoppingBag className="h-5 w-5" />
                Comprar — Envío gratis
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#recetas"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-cream/25 bg-cream/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-cream backdrop-blur transition-all duration-300 hover:border-mist/60 hover:bg-cream/10 hover:-translate-y-1"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-espresso transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                </span>
                Descubrir recetas
              </a>
            </div>

            {/* Trust row */}
            <div className="hero-anim hero-5 mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {["MD", "RC", "AV", "EP"].map((i) => (
                    <span
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-deep text-[10px] font-bold text-espresso ring-2 ring-espresso"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-red text-mist" />
                    ))}
                    <span className="ml-1.5 text-sm font-bold text-cream">4.9</span>
                  </div>
                  <p className="text-xs text-cream/60">+12,400 familias felices</p>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-cream/15 sm:block" />
              <div className="flex items-center gap-5 text-xs text-cream/70">
                <span className="flex items-center gap-1.5"><Wheat className="h-4 w-4 text-mist" /> Trigo USA</span>
                <span className="flex items-center gap-1.5"><Leaf className="h-4 w-4 text-mist" /> Energía limpia</span>
              </div>
            </div>
          </div>

          {/* Right: featured product card */}
          <div className="hero-anim hero-5 hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-red/30 via-transparent to-rosso/30 blur-xl" />
              <div className="relative overflow-hidden rounded-[24px] border border-cream/15 bg-espresso/70 backdrop-blur-xl shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={media["hero-card"]}
                    alt="Lasagna della Domenica"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-espresso">
                    ★ Producto del mes
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-rosso px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                    -11%
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-mist">Edición Limitada</p>
                  <h3 className="mt-1 font-display text-2xl text-cream">Lasagna Precocida</h3>
                  <p className="mt-1 text-sm text-cream/60">Directo al horno · 250 g · Rinde 6 porciones</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl text-cream">$2.84</span>
                      <span className="text-sm text-cream/40 line-through">$3.20</span>
                    </div>
                    <button
                      onClick={() => onAdd("lasagna")}
                      className="rounded-full bg-cream px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-espresso transition-all hover:bg-cream hover:-translate-y-0.5"
                    >
                      Añadir +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="border-t border-cream/10 bg-espresso/60 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-cream/10 md:grid-cols-4">
            {[
              ["42+", "Años de tradición"],
              ["13.75%", "Proteína real"],
              ["3", "Países exportados"],
              ["100%", "Energía limpia"],
            ].map(([n, l]) => (
              <div key={l} className="flex items-center justify-center gap-3 px-4 py-4">
                <span className="font-display text-2xl md:text-3xl text-mist">{n}</span>
                <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/60 leading-tight">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video scene indicator & controls */}
      <div className="absolute right-6 bottom-20 z-20 hidden md:flex items-center gap-2.5 rounded-full border border-cream/20 bg-espresso/85 px-4 py-2 backdrop-blur-md shadow-xl text-xs text-cream">
        <span className="flex h-2 w-2 rounded-full bg-red animate-pulse" />
        <Film className="h-3.5 w-3.5 text-mist shrink-0" />
        <div className="flex flex-col text-left pr-1">
          <span className="font-bold text-[9.5px] uppercase tracking-wider text-mist">
            Preparación en video ({videoIdx + 1}/{PASTA_VIDEOS.length})
          </span>
          <span className="text-[11px] text-cream/90 font-medium truncate max-w-[210px]">
            {currentVideo.title}
          </span>
        </div>
        <div className="flex items-center gap-1 border-l border-cream/15 pl-2">
          <button
            onClick={togglePlay}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream hover:text-espresso transition"
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
            title={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 ml-0.5 fill-current" />}
          </button>
          <button
            onClick={nextVideo}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-mist hover:text-espresso transition"
            aria-label="Siguiente video de preparación"
            title="Cambiar video"
          >
            <SkipForward className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#productos"
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream/50 transition-colors hover:text-mist md:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Descubre</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
