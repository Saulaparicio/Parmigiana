import { Wheat, Award, Truck, Leaf, Star, Flame } from "lucide-react";

const items = [
  { icon: Wheat, text: "100% Trigo Hard Amber Durum" },
  { icon: Truck, text: "Envío gratis +$25" },
  { icon: Award, text: "ISO 9001 Certificado" },
  { icon: Leaf, text: "Energía 100% limpia" },
  { icon: Star, text: "Líderes desde 1983" },
  { icon: Flame, text: "Tecnología italiana Pavan" },
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-mist/20 bg-rosso py-3.5">
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.2em] text-cream">
            <it.icon className="h-4 w-4 text-cream/80" />
            {it.text}
            <span className="ml-8 text-mist/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
