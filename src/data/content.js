export const images = {
  heroDark:
    "https://images.unsplash.com/photo-1748063578185-3d68121b11ff?auto=format&fit=crop&w=2400&q=80",
  heroLight:
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=80",
  visionA:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
  visionB:
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80",
  unitHorizonte:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
  unitCresta:
    "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?auto=format&fit=crop&w=1400&q=80",
  unitMirador:
    "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?auto=format&fit=crop&w=1400&q=80",
  unitBosque:
    "https://images.unsplash.com/photo-1599777560450-e462cffc5368?auto=format&fit=crop&w=1400&q=80",
  galleryEntrada:
    "https://images.unsplash.com/photo-1688653802629-5360086bf632?auto=format&fit=crop&w=1800&q=80",
  gallerySala:
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1800&q=80",
  galleryTerraza:
    "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1800&q=80",
  galleryPiscina:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
  gallerySuite:
    "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?auto=format&fit=crop&w=1800&q=80",
  galleryEstudio:
    "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?auto=format&fit=crop&w=1800&q=80",
  ubicacion:
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1800&q=80",
  contacto:
    "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?auto=format&fit=crop&w=1800&q=80",
};

export const units = [
  {
    id: "horizonte",
    name: "Villa Horizonte",
    code: "Tipo A",
    area: "412 m²",
    rooms: "4 habitaciones",
    view: "Vista al valle",
    detail:
      "Una sola línea de planta baja que se abre por completo hacia el paisaje. El living y el jardín comparten un mismo piso, sin puertas de por medio.",
    image: images.unitHorizonte,
    available: true,
  },
  {
    id: "cresta",
    name: "Villa Cresta",
    code: "Tipo B",
    area: "486 m²",
    rooms: "5 habitaciones",
    view: "Vista panorámica 270°",
    detail:
      "Dos niveles escalonados que siguen la pendiente natural del terreno. La suite principal ocupa la cota más alta de la unidad.",
    image: images.unitCresta,
    available: true,
  },
  {
    id: "mirador",
    name: "Ático Mirador",
    code: "Tipo C",
    area: "298 m²",
    rooms: "3 habitaciones",
    view: "Vista abierta, terraza perimetral",
    detail:
      "La unidad más alta del desarrollo. Una terraza continua rodea los cuatro frentes del volumen, sin columnas que interrumpan la vista.",
    image: images.unitMirador,
    available: false,
  },
  {
    id: "bosque",
    name: "Residencia Bosque",
    code: "Tipo D",
    area: "540 m²",
    rooms: "5 habitaciones + estudio",
    view: "Vista al arbolado, privacidad total",
    detail:
      "La más resguardada de las seis. Rodeada de vegetación existente que se conservó durante la construcción, en lugar de despejarla.",
    image: images.unitBosque,
    available: true,
  },
];

export const galleryStops = [
  {
    id: "entrada",
    label: "La entrada",
    caption: "Un umbral bajo, pensado para hacer una pausa antes de llegar.",
    image: images.galleryEntrada,
  },
  {
    id: "sala",
    label: "La sala",
    caption: "Piedra local, madera sin tratar, y una chimenea que no se apaga en invierno.",
    image: images.gallerySala,
  },
  {
    id: "terraza",
    label: "La terraza",
    caption: "El punto donde el interior deja de tener paredes.",
    image: images.galleryTerraza,
  },
  {
    id: "piscina",
    label: "La piscina",
    caption: "Borde infinito, alineado con la línea del horizonte.",
    image: images.galleryPiscina,
  },
  {
    id: "estudio",
    label: "El estudio",
    caption: "Luz del norte, todo el día, sin necesidad de encender una lámpara.",
    image: images.galleryEstudio,
  },
  {
    id: "suite",
    label: "La suite principal",
    caption: "Se despierta con la misma vista con la que uno se duerme.",
    image: images.gallerySuite,
  },
];

export const amenities = [
  {
    icon: "Waves",
    title: "Piscina infinita",
    text: "Climatizada todo el año, borde compartido con el paisaje.",
    size: "lg",
  },
  {
    icon: "Dumbbell",
    title: "Gimnasio y spa privado",
    text: "Sauna, sala de recuperación y entrenador disponible por reserva.",
    size: "sm",
  },
  {
    icon: "ShieldCheck",
    title: "Seguridad 24/7",
    text: "Acceso controlado y vigilancia perimetral discreta.",
    size: "sm",
  },
  {
    icon: "Wine",
    title: "Bodega de vinos",
    text: "Cava comunitaria con espacio reservado por residencia.",
    size: "sm",
  },
  {
    icon: "Car",
    title: "Valet y cochera privada",
    text: "Dos espacios cubiertos por unidad, más visitas.",
    size: "sm",
  },
  {
    icon: "Trees",
    title: "Senderos y arbolado nativo",
    text: "3.2 hectáreas de área verde conservada entre residencias.",
    size: "lg",
  },
  {
    icon: "Users",
    title: "Conserjería personal",
    text: "Un punto de contacto único para cualquier necesidad del hogar.",
    size: "sm",
  },
];

export const pointsOfInterest = [
  { label: "Centro histórico", distance: "12 min" },
  { label: "Club de golf", distance: "8 min" },
  { label: "Colegio internacional", distance: "15 min" },
  { label: "Aeropuerto privado", distance: "22 min" },
  { label: "Distrito financiero", distance: "18 min" },
];

export const contactUnits = units.map((u) => ({ id: u.id, name: `${u.name} — ${u.code}` }));
