import { products as catalogoReal, FEATURED_IDS, type RealProduct } from "./products";
import { media } from "./media";

/* ————————————————————————————————————————————————
   CATÁLOGO REAL — 262 productos activos en la tienda
   oficial de La Parmigiana (delivery.parmigiana.com.pa)
   Nombres, precios, presentaciones y fotos oficiales.
   ———————————————————————————————————————————————— */

export type Product = RealProduct;

export const products: RealProduct[] = catalogoReal;

export const totalProducts = catalogoReal.length;

export const featuredProducts: RealProduct[] = FEATURED_IDS.map((id) =>
  catalogoReal.find((p) => p.id === id)
).filter((p): p is RealProduct => Boolean(p));

export const categories = [
  { id: "all", label: "Todos" },
  { id: "pasta", label: "Pastas" },
  { id: "panaderia", label: "Galletas & Panadería" },
  { id: "despensa", label: "Despensa" },
  { id: "enlatado", label: "Enlatados" },
  { id: "aceite", label: "Aceites & Vinagres" },
  { id: "salsa", label: "Salsas" },
  { id: "mascota", label: "Mascotas" },
  { id: "navidad", label: "Temporada" },
] as const;

/* ————————————————————————————————————————————————
   RECETAS OFICIALES — del sitio de La Parmigiana
   ———————————————————————————————————————————————— */

export type Recipe = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  time: string;
  difficulty: string;
  servings: string;
  description: string;
  ingredients: string[];
  steps: string[];
  productIds: string[];
};

export const recipes: Recipe[] = [
  {
    id: "arepas-mozzarella",
    title: "Arepas de Maíz Blanco con Queso Mozzarella",
    subtitle: "El clásico panameño, hecho con nuestra harina precocida",
    image: media["receta-arepas"],
    time: "45 min",
    difficulty: "Fácil",
    servings: "4 porciones",
    description:
      "Arepas doradas por fuera, suaves y esponjosas por dentro, rellenas de mozzarella fundida. Con Harina de Maíz Precocida Blanca La Parmigiana quedan perfectas cada vez.",
    ingredients: [
      "2 tazas Harina de Maíz Precocida Blanca 1 lb La Parmigiana",
      "2 tazas de agua templada + 1 cdta de sal",
      "4 rebanadas gruesas de queso mozzarella",
      "Aceite o mantequilla para el teflón",
      "Salsa de Tomate Estilo Italiana La Parmigiana para acompañar",
    ],
    steps: [
      "Mezcla la harina de maíz precocida con el agua templada y la sal. Amasa 2 minutos hasta obtener una masa suave y pegajosa.",
      "Forma 8 discos de unos 2 cm de grosor y cocínalos 3-4 min por lado en teflón engrasado, a fuego medio.",
      "Abre la mitad de las arepas como bolsillo, coloca la mozzarella y cierra.",
      "Vuelve a pasarlas 1 min por lado para fundir el queso.",
      "Sirve calientes con salsa de tomate y un hilo de aceite de oliva.",
    ],
    productIds: ["harina-de-maiz-precocida-blanca-1-lb", "salsa-de-tomate-estilo-italiana-314ml"],
  },
  {
    id: "ensalada-pasta-pollo",
    title: "Ensalada Cremosa de Pasta con Pollo",
    subtitle: "Fresca, cremosa y lista en 25 minutos",
    image: media["receta-ensalada"],
    time: "25 min",
    difficulty: "Fácil",
    servings: "4 porciones",
    description:
      "Spaguetti La Parmigiana, pollo desmechado, vegetales crujientes y una vinagreta de mostaza. La ensalada que desaparece en la mesa.",
    ingredients: [
      "1 paquete Spaguetti 500 g La Parmigiana",
      "300 g de pollo a la plancha desmechado",
      "1/2 taza de aceitunas negras sin hueso La Parmigiana",
      "Pimiento rojo y pepino en cubos, tomate cherry",
      "Vinagre de Vino Blanco 250 ml La Parmigiana + mostaza + aceite de oliva",
    ],
    steps: [
      "Cuece el spaguetti al dente, pásalo por agua fría y déjalo escurrir por completo.",
      "Mezcla 2 cdas de vinagre de vino blanco, 1 cda de mostaza, sal y 3 cdas de aceite de oliva hasta emulsionar.",
      "Combina la pasta con el pollo, los vegetales y las aceitunas.",
      "Baña con la vinagreta y mezcla bien con cuchara de madera.",
      "Refrigera 30 min para que tomen sabor. Sirve bien fría.",
    ],
    productIds: ["spaguetti-500gr", "aceitunas-negras-sin-hueso-350gr", "vinagre-de-vino-blanco-250ml"],
  },
  {
    id: "ensalada-lentejas",
    title: "Ensalada Fresca de Lentejas con Vegetales",
    subtitle: "Proteína ligera para todo el año",
    image: media["receta-lentejas"],
    time: "30 min",
    difficulty: "Fácil",
    servings: "4 porciones",
    description:
      "Lentejas tiernas con vegetales de la huerta, aceitunas y aceitunas kalamata. Una ensalada completa que también funciona como plato principal.",
    ingredients: [
      "1 ½ tazas de lentejas cocidas",
      "200 g Vegetales Mixtos La Parmigiana (escurridos)",
      "1/2 taza Aceitunas Kalamata Sin Hueso La Parmigiana",
      "1/4 taza Aceitunas para Ensalada La Parmigiana",
      "Aceite de Oliva Clásico 250 ml La Parmigiana + vinagre y orégano",
    ],
    steps: [
      "Cocina las lentejas 20-25 min hasta que estén tiernas pero firmes. Escurre y enfría.",
      "Escurre los vegetales mixtos y córtalos si son grandes.",
      "Mezcla lentejas, vegetales y ambas aceitunas en un bol amplio.",
      "Dressingea con aceite de oliva, un chorrito de vinagre, sal y orégano.",
      "Refrigera 20 min y sirve con una pizca más de orégano.",
    ],
    productIds: ["vegetales-mixtos-425gr", "aceitunas-kalamata-sin-hueso-330gr", "aceite-de-oliva-clasico-250-ml"],
  },
  {
    id: "galletas-avena-manzana",
    title: "Galletas de Avena con Manzana Verde",
    subtitle: "El postre de la casa, receta de abuela",
    image: media["receta-galletas"],
    time: "40 min",
    difficulty: "Media",
    servings: "12 unidades",
    description:
      "Galletas de avena con manzana verde crujiente, canela y un toque de azúcar morena. La mezcla para dulce La Parmigiana hace la mitad del trabajo por ti.",
    ingredients: [
      "2 tazas Crema de Avena 454 g La Parmigiana (hojuelas)",
      "1 taza de harina + 1 cdta de canela",
      "1 manzana verde en cubitos pequeños",
      "½ taza Azúcar Morena Molino P. 400 g La Parmigiana",
      "½ taza de mantequilla derretida + 1 huevo",
    ],
    steps: [
      "Mezcla la avena, la harina, la canela y la mantequilla hasta lograr migajas húmedas.",
      "Agrega el huevo, el azúcar morena y la manzana en cubitos.",
      "Forma galletas generosas sobre bandeja forrada, separadas (crecen al hornear).",
      "Hornea a 180°C por 15-18 min, hasta bordes dorados.",
      "Deja enfriar 5 min sobre la bandeja: quedan tiernas por dentro.",
    ],
    productIds: ["crema-de-avena-454-gr", "azucar-morena-molino-p-400g"],
  },
  {
    id: "linguini-alfredo",
    title: "Linguini con Pollo y Champiñones en Salsa Alfredo",
    subtitle: "La cena elegante, lista antes de que llegue el invitado",
    image: media["receta-linguini"],
    time: "35 min",
    difficulty: "Media",
    servings: "4 porciones",
    description:
      "Linguini La Parmigiana bañado en una salsa alfredo cremosa, con pollo dorado y champiñones salteados. Con parmesano rallado al final, es de restaurante.",
    ingredients: [
      "2 paquetes Linguine 500 g La Parmigiana",
      "400 g champiñones (Hongos en Trozos La Parmigiana)",
      "4 pechugas de pollo en tiras, sal y pimienta",
      "1 taza de crema para batir + 1 taza de agua de cocción de la pasta",
      "½ taza Queso Parmesano 8 oz La Parmigiana rallado",
    ],
    steps: [
      "Dora el pollo con ajo en sartén bien caliente (4 min), reserva.",
      "En la misma sartén saltea los champiñones hasta dorar (5-6 min).",
      "Cuece el linguine al dente; reserva una taza del agua antes de escurrir.",
      "Baja el fuego: agrega la crema, el agua reservada y el parmesano hasta espesar la salsa.",
      "Devuelve el pollo, mezcla la pasta con la salsa y sirve con más parmesano y pimienta negra.",
    ],
    productIds: ["linguine-500gr", "hongos-en-trozos-425gr", "queso-parmesano-8oz"],
  },
  {
    id: "noquis-zucchini",
    title: "Ñoquis con Zucchini, Queso Crema y Nueces",
    subtitle: "Cremoso, otoñal, irresistible",
    image: media["receta-noquis"],
    time: "30 min",
    difficulty: "Fácil",
    servings: "4 porciones",
    description:
      "Gnocchi di Patate La Parmigiana con zucchini salteado, queso crema, nueces crujientes y un hilo de aceite de oliva al romero. Sencillo y memorable.",
    ingredients: [
      "2 paquetes Gnocchi di Patate 500 g La Parmigiana",
      "2 zucchini (o Zucchini en Aceite a la Parrilla La Parmigiana)",
      "½ taza de queso crema, ¼ taza de nueces picadas",
      "Aceite de Oliva Extra Virgen/Rosemary 250 ml La Parmigiana",
      "Parmesano rallado y sal en escamas",
    ],
    steps: [
      "Saltea el zucchini en aceite de oliva al romero hasta dorarlo (4 min). Reserva la mitad.",
      "Cocina los ñoquis: están listos al flotar. Escurre con espumadera.",
      "Devuelve el zucchini a la sartén, agrega los ñoquis, el queso crema y las nueces.",
      "Baja el fuego y mezcla 1 min para que la salsa cubra cada ñoqui.",
      "Sirve con parmesano, sal en escamas y un hilo más de aceite al romero.",
    ],
    productIds: ["gnocchi-di-patate-500-g", "zucchini-en-aceite-a-la-parrilla-393g", "aceite-de-oliva-extra-virgen-rosemary-250ml"],
  },
];

/* ———————————————————————————————————————————————— HISTORIA */

export const timeline = [
  {
    year: "1983",
    title: "Nace un sueño panameño",
    text: "Fundación de Agro Industrias Alimenticias de Veraguas. Una sola misión: pasta de clase mundial con 100% trigo durum.",
    image: media["tl-1983"],
  },
  {
    year: "2000",
    title: "Salto tecnológico italiano",
    text: "Adquisición de dos líneas de producción PAVAN, de Italia: una para pastas largas y otra para cortas, con sistemas de alta temperatura.",
    image: media["tl-2000"],
  },
  {
    year: "2014",
    title: "Panamá conquista la región",
    text: "Nuestros productos cruzan fronteras: hoy La Parmigiana también se vende en Costa Rica.",
    image: media["tl-2014"],
  },
  {
    year: "2018",
    title: "Calidad certificada",
    text: "La fábrica obtiene la certificación ISO 9001 de gestión de la calidad. Estándares que se auditan, no se prometen.",
    image: media["tl-2018"],
  },
  {
    year: "Hoy",
    title: "Líderes con propósito",
    text: "La pasta de mayor venta de Panamá, con más de 260 productos, tiendas en Santiago, Panamá y David, y entrega gratis a domicilio.",
    image: media["tl-hoy"],
  },
];

/* ———————————————————————————————————————————————— TESTIMONIOS */

export const testimonials = [
  {
    quote: "Crecí comiendo Parmigiana en Santiago. Ahora mis hijos la compran en la tienda en línea y al otro día está en la puerta, gratis. Eso no lo tiene nadie.",
    name: "María Fernanda Delgado",
    role: "Clienta desde 1987 · Veraguas",
    initials: "MD",
  },
  {
    quote: "La lasagna precocida va directo al horno y quedó como de restaurante. Mis invitados no creyeron que salió de una caja.",
    name: "Ana Lucía Vallarino",
    role: "Clienta delivery · Ciudad de Panamá",
    initials: "AV",
  },
  {
    quote: "En mi bodega La Parmigiana es la pasta que más sale del estante. El cliente ya no compra otra: la sémola se nota al hervir.",
    name: "Don Eustorgio Pimentel",
    role: "Distribuidor · David, Chiriquí",
    initials: "EP",
  },
  {
    quote: "Pido por WhatsApp los lunes y el martes está todo en mi cocina. Aceite de oliva, galletas de avena y pasta. Mi despensa completa en un pedido.",
    name: "Sofía Méndez",
    role: "Clienta recurrente · San Miguelito",
    initials: "SM",
  },
];
