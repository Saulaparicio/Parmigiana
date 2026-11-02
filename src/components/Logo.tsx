import { media } from "../data/media";

type Props = {
  className?: string;
  variant?: "full" | "dark" | "mark";
  title?: string;
};

/**
 * Logo oficial de La Parmigiana (globo + cinta tricolor + wordmark).
 * Activo real de la marca, embebido en base64 para que siempre cargue.
 */
export default function Logo({ className = "", variant = "full", title = "La Parmigiana" }: Props) {
  const src = variant === "dark" ? media["logo-footer"] : media["logo-full"];
  return (
    <img
      src={src}
      alt={title}
      className={className}
      loading="eager"
      draggable={false}
      style={{ objectFit: "contain" }}
    />
  );
}
