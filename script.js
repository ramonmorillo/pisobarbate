// Guía Vistas Marinas Barbate. Edita las estructuras de datos de esta zona para personalizar la guía.
const PLACEHOLDER_MAPS = "PEGAR_AQUI_ENLACE_GOOGLE_MAPS";

const TOURISM_URLS = {
  vejer: "https://turismovejer.es/",
  barbate: "https://www.turismobarbate.es/",
  conil: "https://turismoconil.com/",
  tarifa: "https://turismodetarifa.com/",
  cadiz: "https://www.cadizturismo.com/es",
  medinaSidonia: "https://www.turismomedinasidonia.es/"
};

const apartmentInfo = {
  name: "Vistas Marinas Barbate",
  guideName: "Guía Vistas Marinas Barbate",
  subtitle: "Terraza privada junto al paseo marítimo",
  capacity: "Hasta 5 huéspedes",
  bedrooms: "2 habitaciones",
  bathrooms: "1 baño",
  checkIn: "Desde las 16:00, entrada autónoma con código",
  checkOutDirect: "Hasta las 12:00 si reservas en tusereno.es",
  checkOutPlatform: "Hasta las 11:00 si reservas por plataforma externa",
  wifi: "PENDIENTE_DE_COMPLETAR",
  address: "PENDIENTE_DE_COMPLETAR",
  howToArrive: "PENDIENTE_DE_COMPLETAR",
  parking: "PENDIENTE_DE_COMPLETAR",
  hostContact: "PENDIENTE_DE_COMPLETAR",
  windUrl: "PEGAR_AQUI_ENLACE_WINDY_AEMET_O_WINDGURU",
  managedBy: "Sereno, alojamientos en Costa de la Luz"
};

const siteNameIdeas = ["Guía Vistas Marinas Barbate", "Barbate desde tu Terraza", "La Guía Azul de Vistas Marinas", "Costa de la Luz sin Prisa", "Tu Base en Barbate"];

const apartmentMoments = ["Desayunar en la terraza", "Bajar andando a la playa", "Comer atún rojo", "Pasear por el paseo marítimo", "Comprar producto local", "Cenar sin coger coche", "Explorar la Costa de la Luz"];

const quickLinks = [
  ["Playas", "#playas", "Arena, calas y planes familiares"], ["Dónde comer", "#gastronomia", "Atún rojo y cenas cerca"], ["Planes con niños", "#hoy", "Ideas fáciles y sin estrés"], ["Atardeceres", "#especiales", "Trafalgar, Caños y playa"], ["Rutas naturales", "#rutas", "La Breña y marismas"], ["Días de levante", "#viento", "Alternativas con viento"], ["Pueblos cercanos", "#escapadas", "Vejer, Tarifa, Cádiz"], ["Sin coche", "#sin-coche", "Todo andando desde el piso"], ["Servicios útiles", "#servicios", "Emergencias y básicos"], ["Información práctica", "#piso", "Check-in, WiFi y normas"]
];

const plans = [
  {title:"Tengo 1 hora", tags:["sin coche","tranquilo"], text:"Paseo por el paseo marítimo, café o helado, y vuelta tranquila al piso.", tip:"Perfecto para aterrizar después del viaje."},
  {title:"Tengo una mañana", tags:["playa","familia","sin coche"], text:"Playa del Carmen o Hierbabuena, comida cerca y descanso en la terraza.", tip:"Lleva solo lo imprescindible: puedes volver al piso cuando quieras."},
  {title:"Tengo una tarde", tags:["atardecer","escapada"], text:"Caños de Meca, Faro de Trafalgar y atardecer.", tip:"Consulta viento y aparcamiento en temporada alta."},
  {title:"Tengo un día completo", tags:["escapada","gastronomía"], text:"Vejer por la mañana, comida con calma en una referencia de atún y tarde en Zahara de los Atunes.", tip:"Un día redondo de pueblo blanco, playa y buena mesa."},
  {title:"Vengo con niños", tags:["familia","sin coche","playa"], text:"Playa cómoda, paseo marítimo, helado, descanso y cena temprana cerca del alojamiento.", tip:"La cercanía al piso facilita si hay que volver a por algo."},
  {title:"Quiero comer bien", tags:["gastronomía"], text:"Elige entre El Campero, Jarana, Variopinto o La Peña del Atún según busques homenaje, paseo marítimo o cocina local.", tip:"En verano, puentes y fines de semana conviene reservar."},
  {title:"Quiero naturaleza", tags:["naturaleza","ruta"], text:"Sendero de La Breña, Torre del Tajo o marismas, evitando horas centrales de calor.", tip:"Agua, calzado y protección solar son imprescindibles."},
  {title:"Quiero evitar coche", tags:["sin coche","tranquilo"], text:"Playa, paseo marítimo, mercado, restaurantes cercanos y cena junto al alojamiento.", tip:"El plan más cómodo para disfrutar la ubicación."},
  {title:"Hace viento", tags:["viento","pueblo"], text:"Cambia playa por Vejer, Cádiz, tapas, mercado o ruta corta resguardada.", tip:"Mira la previsión antes de salir."},
  {title:"Quiero un atardecer especial", tags:["atardecer","escapada"], text:"Faro de Trafalgar, Caños de Meca o paseo final por la playa antes de cenar.", tip:"Sal con margen para aparcar y caminar sin prisa."},
  {title:"Quiero un plan tranquilo", tags:["tranquilo","sin coche"], text:"Desayuno lento en la terraza, paseo por la playa, compra local y cena en casa.", tip:"No todos los mejores planes requieren agenda."}
];

const noCarItineraries = [
  {time:"Mañana sin coche", steps:["Desayuno en la terraza", "Playa del Carmen", "Café o mercado", "Vuelta al piso para descansar"]},
  {time:"Tarde sin coche", steps:["Paseo marítimo", "Helado o merienda", "Compra básica", "Cena cerca del alojamiento"]},
  {time:"Día completo sin coche", steps:["Playa", "Mercado o producto local", "Comida de atún", "Siesta", "Paseo al puerto", "Cena tranquila"]},
  {time:"Noche sin coche", steps:["Reserva cerca", "Cena sin coche", "Paseo junto al mar", "Vuelta andando al piso"]}
];

const beaches = [
  {name:"Playa del Carmen", type:"Urbana y cómoda", tags:["playa","sin coche","familia"], distance:"A unos pasos del piso", idealFor:"Bañarse sin mover el coche, paseo marítimo y plan familiar", bestTime:"Mañana o tarde", hostTip:"La opción más sencilla si quieres playa cómoda y volver al piso en cualquier momento.", occupancy:"Alta en verano", kids:"Sí", wind:"Consultar previsión", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Playa de la Hierbabuena", type:"Natural junto a La Breña", tags:["playa","naturaleza","ruta"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Naturaleza, paseo y paisaje", bestTime:"Mañana o atardecer", hostTip:"Perfecta para combinar playa y entorno natural de La Breña.", occupancy:"Media en temporada alta", kids:"Sí, valorando condiciones del mar", wind:"Consultar previsión", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Caños de Meca", type:"Calas y ambiente bohemio", tags:["playa","atardecer","escapada"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Atardecer, calas y plan relajado", bestTime:"Tarde", hostTip:"Combina paseo, Faro de Trafalgar y cena informal.", occupancy:"Alta en verano", kids:"Depende de zona y mar", wind:"Sensible al viento", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Zahora", type:"Playa amplia", tags:["playa","atardecer"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Día de playa y puesta de sol", bestTime:"Tarde", hostTip:"Buena para bajar el ritmo y alargar hasta el atardecer.", occupancy:"Media/alta en verano", kids:"Sí, con vigilancia de mareas", wind:"Consultar previsión", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Zahara de los Atunes", type:"Playa larga y ambiente de verano", tags:["playa","gastronomía","escapada"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Comida, paseo y tarde de playa", bestTime:"Mañana o tarde", hostTip:"Funciona muy bien combinada con una reserva para comer, aunque si quieres centrar el día en Barbate las cuatro referencias gastronómicas de la guía son más directas.", occupancy:"Alta en verano", kids:"Sí", wind:"Consultar previsión", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Playa de los Alemanes", type:"Paisaje atlántico", tags:["playa","escapada"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Aguas claras y paisaje", bestTime:"Mañana", hostTip:"Lleva agua y revisa accesos/aparcamiento antes de ir.", occupancy:"Alta en temporada", kids:"Sí, según mar", wind:"Sensible al viento", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Bolonia", type:"Salvaje, duna y cultura", tags:["playa","naturaleza","cultura"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Excursión especial con ruinas romanas", bestTime:"Mañana completa", hostTip:"Una de las salidas más memorables si el viento acompaña.", occupancy:"Alta en verano", kids:"Sí", wind:"Muy sensible al viento", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Valdevaqueros", type:"Amplia y surfera", tags:["playa","viento","escapada"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Ambiente surfero y deportes de viento", bestTime:"Mañana o tarde", hostTip:"Ideal si quieres ver ambiente de Tarifa; revisa viento.", occupancy:"Alta en verano", kids:"Según condiciones", wind:"Muy dependiente del viento", mapsUrl:PLACEHOLDER_MAPS},
  {name:"El Palmar", type:"Playa abierta", tags:["playa","atardecer","escapada"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Paseo largo, surf y atardecer", bestTime:"Tarde", hostTip:"Buen plan para combinar con merienda o cena informal.", occupancy:"Alta en temporada", kids:"Sí, según mar", wind:"Consultar previsión", mapsUrl:PLACEHOLDER_MAPS}
];

const windPlans = [
  {title:"Día perfecto de playa", text:"Elige playa cómoda por la mañana, lleva sombrilla y deja la tarde para paseo o terraza."},
  {title:"Día con levante fuerte", text:"Prioriza pueblos, gastronomía, Cádiz, Vejer o rutas cortas resguardadas antes que playas abiertas."},
  {title:"Día con poniente", text:"Suele ser más amable para playa, pero confirma intensidad, oleaje y bandera antes de bañarte."},
  {title:"Día para atardecer", text:"Caños de Meca, Trafalgar, Zahora o El Palmar funcionan si el viento permite estar cómodo."},
  {title:"Día para ruta interior", text:"Medina Sidonia, Vejer o compras gastronómicas son alternativas tranquilas."},
  {title:"Día para Vejer", text:"Calles blancas, miradores y cena: casi siempre buena idea cuando la playa no apetece."},
  {title:"Día para Cádiz/Tarifa", text:"Plan urbano, cultura, paseo y comida si quieres cambiar de paisaje."}
];

const foodCategories = ["Atún rojo de almadraba", "Cocina frente al mar", "Reserva imprescindible", "Tapas y platos para compartir", "Comida informal", "Cena especial", "Producto local", "Paseo marítimo"];
const dishes = ["Atún encebollado", "Tataki de atún", "Tarantelo", "Morrillo", "Ventresca", "Mojama", "Tostas y salazones", "Tacos barbateños", "Pescado frito", "Arroces y guisos marineros"];
const restaurants = [
  {name:"El Campero", category:"Templo del atún rojo", price:"€€€", distance:"Av. Constitución, 5 · imprescindible reservar", idealFor:"Una comida o cena especial centrada en el atún rojo de almadraba.", whatToOrder:"Menú degustación, cortes de atún, guisos marineros y platos para compartir en barra o sala.", why:"Es la referencia gastronómica de Barbate para entender el atún rojo de almadraba con una experiencia más cuidada.", bookingUrl:"https://restauranteelcampero.es/barbate/reserva/", mapsUrl:"https://www.google.com/maps/search/?api=1&query=El%20Campero%20Barbate"},
  {name:"Jarana Barbate", category:"Barbate playa", price:"€€€", distance:"Av. del Atlántico, 1 · paseo marítimo", idealFor:"Comer o cenar junto al mar sin alejarte del paseo marítimo.", whatToOrder:"Atún, producto marinero y platos actuales para compartir con el mar de fondo.", why:"Encaja con huéspedes que quieren una referencia cómoda, escénica y muy conectada con la playa.", bookingUrl:"https://grupomacarena.com/jarana", mapsUrl:"https://www.google.com/maps/search/?api=1&query=Jarana%20Barbate%20Avenida%20del%20Atlantico%201"},
  {name:"Variopinto Barbate", category:"Frente al mar", price:"€€", distance:"Edificio Trafalgar · Paseo Marítimo", idealFor:"Una comida flexible frente al mar, especialmente si buscas algo cómodo desde la playa.", whatToOrder:"Platos para compartir, sabores variados y opciones informales con vistas al paseo.", why:"Aporta una referencia de paseo marítimo más desenfadada para comidas sin complicar el plan de playa.", bookingUrl:"https://www.variopintobarbate.com/", mapsUrl:"https://www.google.com/maps/search/?api=1&query=Variopinto%20Barbate%20Edificio%20Trafalgar%20Paseo%20Maritimo"},
  {name:"La Peña del Atún", category:"Clásico local", price:"€€", distance:"C/ Ancha, 39 · centro de Barbate", idealFor:"Tapear, probar cocina local y comer atún rojo con ambiente barbateño.", whatToOrder:"Salazones, tostas, guisos, tacos barbateños, pescado y especialidades de atún rojo.", why:"Funciona como contrapunto local y cercano: cocina de producto, buen precio y tradición de Barbate.", bookingUrl:"https://www.elatun.es/", mapsUrl:"https://www.google.com/maps/search/?api=1&query=La%20Pe%C3%B1a%20del%20At%C3%BAn%20Barbate%20Calle%20Ancha%2039"}
];

const barbateTimeline = [
  {time:"Mañana", steps:["Playa o paseo marítimo", "Café/desayuno", "Mercado o compra local"]},
  {time:"Mediodía", steps:["Reserva en El Campero, Jarana, Variopinto o La Peña del Atún", "Pide atún rojo o producto marinero para compartir"]},
  {time:"Tarde", steps:["Playa de la Hierbabuena o paseo", "Descanso en la terraza"]},
  {time:"Noche", steps:["Cena en una de las referencias gastronómicas", "Vuelta caminando si eliges paseo marítimo o centro"]}
];

const routes = [
  {name:"Parque Natural de La Breña", duration:"Consulta la ficha oficial", difficulty:"Variable según sendero", bestTime:"Mañana o tarde", idealFor:"Pinar, acantilados, marismas, senderos señalizados e información oficial", recommendation:"Revisa la Ventana del Visitante antes de salir para elegir sendero, equipamientos y avisos del espacio protegido.", mapsUrl:PLACEHOLDER_MAPS, webUrl:"https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/la-bre%C3%91a-y-marismas-del-barbate/255035", webLabel:"Ficha oficial"},
  {name:"La Breña y Marismas en Cádiz Turismo", duration:"Lectura previa rápida", difficulty:"Informativa", bestTime:"Antes de planificar la ruta", idealFor:"Inspirarte con una visión turística del parque natural", recommendation:"Úsala para completar el plan con contexto, ideas de visita y puntos de interés de la provincia.", mapsUrl:PLACEHOLDER_MAPS, webUrl:"https://www.cadizturismo.com/naturaleza/espacios-naturales/la-brena-y-marismas-de-barbate", webLabel:"Cádiz Turismo"},
  {name:"Sendero de los Acantilados", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Media", bestTime:"Mañana", idealFor:"Paisaje atlántico y fotos", recommendation:"Respeta señalización y distancia a bordes.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Torre del Tajo", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Media", bestTime:"Atardecer con margen", idealFor:"Mirador natural", recommendation:"Consulta estado del sendero y viento.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Marismas del Barbate", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Baja", bestTime:"Mañana", idealFor:"Paseo tranquilo y observación", recommendation:"Buen plan suave si no quieres playa.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Ruta hacia Caños de Meca", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Media", bestTime:"Mañana", idealFor:"Naturaleza y final con ambiente", recommendation:"Planifica regreso y agua suficiente.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Breña Bikes", duration:"Según alquiler", difficulty:"A tu ritmo", bestTime:"Mañana o tarde suave", idealFor:"Alquilar bicicletas o e-bikes para moverte por el entorno de La Breña", recommendation:"Reserva con antelación en temporada alta y confirma punto de recogida, autonomía y rutas recomendadas.", mapsUrl:PLACEHOLDER_MAPS, webUrl:"https://brenabikes.com/", webLabel:"Alquiler de bicicletas"},
  {name:"Marine Atlantes", duration:"Según salida", difficulty:"Plan guiado", bestTime:"Días de mar tranquilo", idealFor:"Rutas en barco desde Barbate y una perspectiva diferente de la costa", recommendation:"Consulta horarios, disponibilidad y condiciones de viento o mar antes de reservar.", mapsUrl:PLACEHOLDER_MAPS, webUrl:"https://marineatlantes.com/", webLabel:"Rutas en barco"}
];

const escapes = [
  {name:"Vejer de la Frontera", see:"Calles blancas, miradores, patios, tiendas bonitas y buen ambiente gastronómico.", ideal:"Tarde sin playa o día con viento", time:"Medio día", best:"Tarde", plan:"Paseo por casco histórico, mirador y cena.", mapsUrl:TOURISM_URLS.vejer},
  {name:"Zahara de los Atunes", see:"Playa amplia, restaurantes y ambiente de verano.", ideal:"Combinar tarde junto al mar después de comer en Barbate", time:"Medio día", best:"Tarde", plan:"Comida en una referencia de Barbate y paseo por la playa de Zahara.", mapsUrl:TOURISM_URLS.barbate},
  {name:"Caños de Meca", see:"Ambiente bohemio, calas y Faro de Trafalgar.", ideal:"Atardecer especial", time:"Tarde", best:"Últimas horas de luz", plan:"Calas, faro y puesta de sol.", mapsUrl:TOURISM_URLS.barbate},
  {name:"Conil", see:"Pueblo marinero, playa y ambiente", ideal:"Paseo y comida informal", time:"Medio día", best:"Mañana o tarde", plan:"Casco urbano, playa y tapas.", mapsUrl:TOURISM_URLS.conil},
  {name:"Tarifa", see:"Casco histórico, ambiente viajero y playas abiertas", ideal:"Día diferente", time:"Día completo", best:"Día con ganas de moverse", plan:"Paseo, comida y playa si el viento acompaña.", mapsUrl:TOURISM_URLS.tarifa},
  {name:"Bolonia", see:"Playa salvaje, duna, paisaje atlántico y ruinas romanas de Baelo Claudia.", ideal:"Excursión memorable", time:"Mañana larga o día", best:"Mañana", plan:"Ruinas, duna, playa y comida sencilla.", mapsUrl:TOURISM_URLS.tarifa},
  {name:"Cádiz", see:"Centro histórico, mar, cultura y tapas", ideal:"Plan urbano con historia", time:"Día completo", best:"Día con viento", plan:"Paseo por centro, mercado y atardecer urbano.", mapsUrl:TOURISM_URLS.cadiz},
  {name:"Medina Sidonia", see:"Historia, vistas y dulces", ideal:"Ruta interior tranquila", time:"Medio día", best:"Mañana", plan:"Casco histórico, miradores y merienda.", mapsUrl:TOURISM_URLS.medinaSidonia},
  {name:"El Palmar", see:"Playa abierta, surf y ambiente relajado", ideal:"Puesta de sol y paseo", time:"Tarde", best:"Atardecer", plan:"Paseo largo y cena informal.", mapsUrl:TOURISM_URLS.vejer}
];

const specialPlans = ["Atardecer en Trafalgar", "Cena especial en Zahara", "Mañana en Bolonia", "Tarde en Vejer", "Ruta de La Breña", "Día en Cádiz", "Compra de productos locales para cenar en la terraza", "Desayuno lento junto al mar", "Día familiar sin coche", "Ruta gastronómica del atún rojo"];

const services = [
  {name:"Supermercados", category:"Supermercados", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Farmacias", category:"Farmacia", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Centro de salud", category:"Salud", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Aparcamientos", category:"Aparcamiento", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Playas", category:"Playas", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Restaurantes", category:"Restaurantes", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Gasolineras", category:"Gasolineras", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Cajeros", category:"Cajeros", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Cafeterías", category:"Cafeterías", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Mercado", category:"Mercado", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Herpac · tiendas", category:"Producto local", address:"Comprar conservas, salazones y productos de Barbate", phone:"", mapsUrl:"https://www.herpac.com/tiendas"},
  {name:"Gadira · atún rojo", category:"Producto local", address:"Comprar atún rojo salvaje de almadraba y productos locales", phone:"", mapsUrl:"https://www.gadira.com/"},
  {name:"Puntos de interés", category:"Puntos de interés", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS}
];

const emergencyServices = [
  {name:"Emergencias generales", detail:"112", address:"Llamada directa ante urgencia médica o emergencia", mapsUrl:"tel:112"},
  {name:"Guardia Civil (Barbate)", detail:"956 430 011", address:"Puesto P. de Barbate de Franco · Av. de Andalucía, 53", mapsUrl:"tel:956430011"},
  {name:"Policía Local", detail:"092 / 956 433 800", address:"Teléfonos de interés de Turismo de Barbate", mapsUrl:"tel:092"},
  {name:"Bomberos y Protección Civil", detail:"956 063 607 / 956 063 606", address:"Teléfonos de interés Barbate", mapsUrl:"tel:956063607"},
  {name:"Urgencias médicas", detail:"956 012 007", address:"Centro de Salud Barbate", mapsUrl:"tel:956012007"},
  {name:"Centro de Salud", detail:"600 147 539", address:"Av. de la Mar, s/n", mapsUrl:"tel:600147539"},
  {name:"Salud Responde (cita previa)", detail:"955 545 060", address:"Servicio de cita previa sanitaria", mapsUrl:"tel:955545060"},
  {name:"Ayuntamiento de Barbate", detail:"956 063 600 (ext. 1000-1003)", address:"Av. del Mar, 58", mapsUrl:"tel:956063600"},
  {name:"Oficina de Turismo", detail:"956 063 613", address:"Paseo Marítimo, 5", mapsUrl:"tel:956063613"},
  {name:"Sereno/anfitrión", detail:"PENDIENTE_DE_COMPLETAR", address:"Contacto editable", mapsUrl:"#"}
];

const seasons = [
  {title:"Primavera", text:"Almadraba, gastronomía, rutas y temperaturas suaves."},
  {title:"Verano", text:"Playa, chiringuitos, reservas, ambiente y más ocupación."},
  {title:"Otoño", text:"Tranquilidad, paseos, pueblos y gastronomía."},
  {title:"Invierno", text:"Desconexión, naturaleza y escapadas tranquilas."}
];

const hostTips = ["Reserva restaurantes en verano, fines de semana y puentes.", "Mira el viento antes de elegir playa.", "Madrugar mejora mucho la experiencia en verano.", "La terraza es perfecta para desayunos y cenas tranquilas.", "Para una tarde fácil sin coche, paseo marítimo y cena cerca.", "Para una escapada bonita, Vejer casi siempre funciona.", "Para un atardecer especial, Caños de Meca o Trafalgar.", "Lleva agua y protección solar a playas naturales.", "Respeta dunas, senderos y espacios protegidos.", "Evita dejar objetos visibles en el coche en playas aisladas."];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const placeholderHref = url => !url || url.includes("PEGAR_AQUI") || url.includes("PENDIENTE") ? "#" : url;
const isPlaceholder = value => !value || value.includes("PEGAR_AQUI") || value.includes("PENDIENTE");
const normalize = text => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const getFavorites = () => JSON.parse(localStorage.getItem("vistasMarinasFavorites") || "[]");
const saveFavorites = favs => localStorage.setItem("vistasMarinasFavorites", JSON.stringify(favs));
const cardId = (type, name) => `${type}:${name}`;

const SUPPORTED_LANGUAGES = ["es", "en", "de", "fr"];
const LANGUAGE_LABELS = {es: "Español", en: "English", de: "Deutsch", fr: "Français"};
let currentLanguage = getInitialLanguage();

const ui = {
  es: {
    title: "Guía Vistas Marinas Barbate | Playas, gastronomía y planes",
    description: "Guía digital para huéspedes de Vistas Marinas Barbate: playas, restaurantes, atún rojo, rutas, pueblos cercanos y consejos prácticos desde el paseo marítimo.",
    navLabel: "Navegación principal", languageLabel: "Selector de idioma", skip: "Saltar al contenido", menu: "Abrir menú",
    heroImage: "Terraza imaginada frente al mar en Barbate", brandSmall: "Barbate junto al mar",
    favoriteAria: name => `Guardar ${name} en favoritos`, maps: "Abrir en Google Maps", call: "Llamar/reservar", callShort: "Llamar", openMap: "Abrir mapa", copyAddress: "Copiar dirección",
    placeholderCopied: "Placeholder copiado para editar", addressCopied: "Dirección copiada", copyError: "No se pudo copiar automáticamente",
    all: "todos", localTip: "Tip local", why: "Por qué funciona", contactEditable: "Contacto editable", backTop: "Volver arriba", tourismWeb: "Web turística",
    specialTerrace: "Un plan muy conectado con la terraza y el ritmo del alojamiento.", specialDefault: "Completa horarios, reservas o enlaces si quieres convertirlo en una recomendación cerrada.",
    labels: {type:"Tipo", distance:"Distancia", idealFor:"Ideal para", bestTime:"Mejor momento", recommendation:"Recomendación", occupancy:"Ocupación", kids:"Niños", wind:"Viento", whatToOrder:"Qué pedir", duration:"Duración", difficulty:"Dificultad", bestHour:"Mejor hora", see:"Qué ver", recommendedTime:"Tiempo recomendado", suggestedPlan:"Plan sugerido", contact:"Contacto", address:"Dirección"}
  },
  en: {
    title: "Vistas Marinas Barbate Guide | Beaches, food and plans",
    description: "Digital guest guide for Vistas Marinas Barbate: beaches, restaurants, bluefin tuna, routes, nearby towns and practical tips from the seafront promenade.",
    navLabel: "Main navigation", languageLabel: "Language selector", skip: "Skip to content", menu: "Open menu",
    heroImage: "Imagined terrace overlooking the sea in Barbate", brandSmall: "Barbate by the sea",
    favoriteAria: name => `Save ${name} to favorites`, maps: "Open in Google Maps", call: "Call/book", callShort: "Call", openMap: "Open map", copyAddress: "Copy address",
    placeholderCopied: "Placeholder copied for editing", addressCopied: "Address copied", copyError: "Could not copy automatically",
    all: "all", localTip: "Local tip", why: "Why it works", contactEditable: "Editable contact", backTop: "Back to top", tourismWeb: "Tourism website",
    specialTerrace: "A plan closely connected with the terrace and the rhythm of the apartment.", specialDefault: "Add times, bookings or links if you want to turn it into a finished recommendation.",
    labels: {type:"Type", distance:"Distance", idealFor:"Best for", bestTime:"Best time", recommendation:"Recommendation", occupancy:"Crowds", kids:"Children", wind:"Wind", whatToOrder:"What to order", duration:"Duration", difficulty:"Difficulty", bestHour:"Best time", see:"What to see", recommendedTime:"Recommended time", suggestedPlan:"Suggested plan", contact:"Contact", address:"Address"}
  },
  de: {
    title: "Vistas Marinas Barbate Guide | Strände, Gastronomie und Ausflüge",
    description: "Digitaler Gästeguide für Vistas Marinas Barbate: Strände, Restaurants, Roter Thunfisch, Routen, nahe Orte und praktische Tipps von der Strandpromenade.",
    navLabel: "Hauptnavigation", languageLabel: "Sprachauswahl", skip: "Zum Inhalt springen", menu: "Menü öffnen",
    heroImage: "Gedachte Terrasse mit Meerblick in Barbate", brandSmall: "Barbate am Meer",
    favoriteAria: name => `${name} als Favorit speichern`, maps: "In Google Maps öffnen", call: "Anrufen/reservieren", callShort: "Anrufen", openMap: "Karte öffnen", copyAddress: "Adresse kopieren",
    placeholderCopied: "Platzhalter zum Bearbeiten kopiert", addressCopied: "Adresse kopiert", copyError: "Automatisches Kopieren nicht möglich",
    all: "alle", localTip: "Lokaler Tipp", why: "Warum es passt", contactEditable: "Bearbeitbarer Kontakt", backTop: "Nach oben", tourismWeb: "Tourismus-Website",
    specialTerrace: "Ein Plan, der sehr gut zur Terrasse und zum Rhythmus der Unterkunft passt.", specialDefault: "Ergänze Zeiten, Reservierungen oder Links, wenn daraus eine fertige Empfehlung werden soll.",
    labels: {type:"Art", distance:"Entfernung", idealFor:"Ideal für", bestTime:"Beste Zeit", recommendation:"Empfehlung", occupancy:"Auslastung", kids:"Kinder", wind:"Wind", whatToOrder:"Was bestellen", duration:"Dauer", difficulty:"Schwierigkeit", bestHour:"Beste Uhrzeit", see:"Was sehen", recommendedTime:"Empfohlene Zeit", suggestedPlan:"Planvorschlag", contact:"Kontakt", address:"Adresse"}
  },
  fr: {
    title: "Guide Vistas Marinas Barbate | Plages, gastronomie et sorties",
    description: "Guide numérique pour les hôtes de Vistas Marinas Barbate : plages, restaurants, thon rouge, itinéraires, villages proches et conseils pratiques depuis la promenade maritime.",
    navLabel: "Navigation principale", languageLabel: "Sélecteur de langue", skip: "Aller au contenu", menu: "Ouvrir le menu",
    heroImage: "Terrasse imaginée face à la mer à Barbate", brandSmall: "Barbate au bord de la mer",
    favoriteAria: name => `Enregistrer ${name} dans les favoris`, maps: "Ouvrir dans Google Maps", call: "Appeler/réserver", callShort: "Appeler", openMap: "Ouvrir la carte", copyAddress: "Copier l’adresse",
    placeholderCopied: "Placeholder copié pour modification", addressCopied: "Adresse copiée", copyError: "Copie automatique impossible",
    all: "tous", localTip: "Conseil local", why: "Pourquoi ça marche", contactEditable: "Contact modifiable", backTop: "Retour en haut", tourismWeb: "Site touristique",
    specialTerrace: "Un plan très lié à la terrasse et au rythme du logement.", specialDefault: "Ajoutez horaires, réservations ou liens pour en faire une recommandation complète.",
    labels: {type:"Type", distance:"Distance", idealFor:"Idéal pour", bestTime:"Meilleur moment", recommendation:"Recommandation", occupancy:"Fréquentation", kids:"Enfants", wind:"Vent", whatToOrder:"Que commander", duration:"Durée", difficulty:"Difficulté", bestHour:"Meilleure heure", see:"À voir", recommendedTime:"Temps conseillé", suggestedPlan:"Plan suggéré", contact:"Contact", address:"Adresse"}
  }
};

const staticTranslations = {
  en: {
    ".brand strong":"Vistas Marinas Guide", ".nav-links a[href='#hoy']":"What to do today", ".nav-links a[href='#sin-coche']":"Without a car", ".nav-links a[href='#playas']":"Beaches", ".nav-links a[href='#gastronomia']":"Food", ".nav-links a[href='#escapadas']":"Day trips", ".nav-links a[href='#piso']":"The apartment",
    ".hero .eyebrow":"Local recommendations for guests staying by the seafront promenade", "#hero-title":"Your local guide to discover Barbate from the seafront", ".hero-subtitle":"Beaches, almadraba bluefin tuna, white villages, nature routes and simple plans to enjoy your stay at Vistas Marinas Barbate.", ".microcopy":"Designed for guests staying by the promenade: what to do, where to go, when to move around and how to make the most of each day.",
    ".hero-actions a[href='#hoy']":"What to do today", ".hero-actions a[href='#playas']":"Beaches", ".hero-actions a[href='#gastronomia']":"Eat well", ".hero-actions a[href='#sin-coche']":"Car-free plans", ".hero-actions a[href='#escapadas']":"Day trips", ".hero-actions a[href='#piso']":"Apartment info",
    ".base-card h2":"Your base in Barbate", ".base-card li:nth-child(1)":"First line of the seafront promenade", ".base-card li:nth-child(2)":"Private terrace", ".base-card li:nth-child(3)":"Beach just steps away", ".base-card li:nth-child(4)":"Restaurants and supermarkets nearby", ".base-card li:nth-child(5)":"Ideal for walking around Barbate",
    "#bienvenida .eyebrow":"Welcome", "#welcome-title":"Welcome to Vistas Marinas Barbate", "#bienvenida .split > p":"This guide is designed to help you enjoy Barbate calmly without wasting time searching scattered information. You will find easy plans, food recommendations, beaches, nearby towns and practical tips for moving around from the apartment.", "#primera-tarde h3":"For an easy first afternoon", "#primera-tarde li:nth-child(1)":"Drop off your luggage.", "#primera-tarde li:nth-child(2)":"Walk along the seafront promenade.", "#primera-tarde li:nth-child(3)":"Buy basics if you need them.", "#primera-tarde li:nth-child(4)":"Have dinner near the accommodation.", "#primera-tarde li:nth-child(5)":"End with a walk by the sea.",
    ".apartment-start .eyebrow":"Your home by the sea", "#start-title":"Everything starts a few steps from the sea", ".apartment-start .section-heading p:last-child":"One advantage of staying here is that many plans do not require a car. You can start the day by the sea, walk around Barbate and keep the car for trips to Vejer, Zahara, Caños, Bolonia or Tarifa.",
    "#rapidos .eyebrow":"Quick access", "#quick-title":"Choose your next plan", "#hoy .eyebrow":"Today’s recommendation", "#today-title":"What would you like to do today?", "#hoy .section-heading p":"Filter by plan type or search by keyword. Save favorites to keep them handy during your stay.", ".search-box span":"Search the guide", "#emptyState":"No results for those filters. Try “beach”, “without a car” or “food”.",
    "#sin-coche .eyebrow":"Car-free plan from the apartment", "#no-car-title":"Plans without moving the car", "#sin-coche .section-heading p:last-child":"Playa del Carmen, the seafront promenade, nearby restaurants and bars, supermarkets, ice-cream shops, cafés, the food market, the harbour and local products for dinner at home.",
    "#playas .eyebrow":"Costa de la Luz", "#beaches-title":"Essential beaches from Barbate", "#viento .eyebrow":"Plan by wind", "#wind-title":"If Levante or Poniente wind blows", "#viento .section-heading p":"On the Costa de la Luz, wind can change the experience a lot. Before choosing a beach, check the forecast. If it is very windy, towns, food, short routes or urban plans may be better.", "#windLink":"Check wind before leaving",
    "#gastronomia .eyebrow":"4 places to eat", "#food-title":"Bluefin tuna, sea views and reference restaurants in Barbate", "#gastronomia .section-heading p":"This food guide focuses on four names: El Campero, Jarana, Variopinto and La Peña del Atún. Choose according to the day: a tuna-focused treat, a table by the sea, an easy promenade meal or a local classic.", ".food-guide-panel article:nth-child(1) strong":"Book first", ".food-guide-panel article:nth-child(1) p":"In summer, on weekends and holidays, book before planning beach time or day trips.", ".food-guide-panel article:nth-child(2) strong":"Choose by moment", ".food-guide-panel article:nth-child(2) p":"Lunch for tuna and a relaxed sobremesa; dinner for the promenade, terrace and an easy return.", ".food-guide-panel article:nth-child(3) strong":"Order to share", ".food-guide-panel article:nth-child(3) p":"This lets you try cuts, salted tuna, stews and seafood dishes without overthinking the choice.", "#barbate .eyebrow":"Essential Barbate", "#essential-title":"Barbate in a few hours", "#rutas .eyebrow":"Pine forests, cliffs and marshes", "#nature-title":"Nature and routes", "#rutas .section-heading p":"La Breña and Barbate Marshes Natural Park, the Cliffs trail, Torre del Tajo, marshes and the route towards Caños de Meca. Bring water, comfortable shoes, sun protection and avoid the hottest hours on warm days.",
    "#escapadas .eyebrow":"Costa de la Luz from your terrace", "#escapes-title":"Easy day trips from the apartment", "#especiales .eyebrow":"Plans to remember", "#special-title":"Moments that make the trip", "#mapa .eyebrow":"Useful map", "#map-title":"Useful map during your stay", "#piso .eyebrow":"Practical information", "#apartment-title":"Useful accommodation information", "#piso .highlight-card h3":"What to do before leaving", "#servicios .eyebrow":"If you need it", "#emergency-title":"Emergencies and services", "#servicios .alert":"In case of medical urgency or emergency, call <strong>112</strong> directly.", "#temporada .eyebrow":"Every season has its rhythm", "#season-title":"Barbate by season", "#temporada .highlight-card h3":"Editable events", "#temporada .highlight-card p":"Tuna Gastronomic Week · Fairs · Markets · Cultural activities. Add dates, links and times when confirmed.", "#consejos .eyebrow":"Host tips", "#tips-title":"Tips to enjoy more", "#editar .eyebrow":"Editable guide", "#edit-title":"How to complete this website", ".footer h2":"Vistas Marinas Barbate Guide", ".footer div > p:first-of-type":"Guide created for guests staying in our tourist apartment by Barbate’s seafront promenade.", ".footer-note":"Information may vary by season, weather, availability and opening times. We recommend confirming bookings and times before travelling."
  },
  de: {
    ".brand strong":"Vistas Marinas Guide", ".nav-links a[href='#hoy']":"Heute unternehmen", ".nav-links a[href='#sin-coche']":"Ohne Auto", ".nav-links a[href='#playas']":"Strände", ".nav-links a[href='#gastronomia']":"Essen", ".nav-links a[href='#escapadas']":"Ausflüge", ".nav-links a[href='#piso']":"Wohnung",
    ".hero .eyebrow":"Lokale Empfehlungen für Gäste an der Strandpromenade", "#hero-title":"Dein lokaler Guide, um Barbate direkt am Meer zu entdecken", ".hero-subtitle":"Strände, Almadraba-Roter-Thunfisch, weiße Dörfer, Naturwege und einfache Pläne für deinen Aufenthalt in Vistas Marinas Barbate.", ".microcopy":"Gedacht für Gäste an der Strandpromenade: was tun, wohin gehen, wann losziehen und wie jeder Tag gelingt.",
    ".hero-actions a[href='#hoy']":"Heute unternehmen", ".hero-actions a[href='#playas']":"Strände", ".hero-actions a[href='#gastronomia']":"Gut essen", ".hero-actions a[href='#sin-coche']":"Pläne ohne Auto", ".hero-actions a[href='#escapadas']":"Ausflüge", ".hero-actions a[href='#piso']":"Wohnungsinfos",
    ".base-card h2":"Deine Basis in Barbate", ".base-card li:nth-child(1)":"Erste Linie an der Strandpromenade", ".base-card li:nth-child(2)":"Private Terrasse", ".base-card li:nth-child(3)":"Strand wenige Schritte entfernt", ".base-card li:nth-child(4)":"Restaurants und Supermärkte in der Nähe", ".base-card li:nth-child(5)":"Ideal, um Barbate zu Fuß zu erkunden",
    "#bienvenida .eyebrow":"Willkommen", "#welcome-title":"Willkommen bei Vistas Marinas Barbate", "#bienvenida .split > p":"Dieser Guide hilft dir, Barbate entspannt zu genießen, ohne lange nach verstreuten Informationen zu suchen. Hier findest du einfache Pläne, Restauranttipps, Strände, nahe Orte und praktische Hinweise ab der Wohnung.", "#primera-tarde h3":"Für einen unkomplizierten ersten Nachmittag", "#primera-tarde li:nth-child(1)":"Gepäck abstellen.", "#primera-tarde li:nth-child(2)":"An der Strandpromenade spazieren.", "#primera-tarde li:nth-child(3)":"Bei Bedarf Basics einkaufen.", "#primera-tarde li:nth-child(4)":"In der Nähe essen gehen.", "#primera-tarde li:nth-child(5)":"Mit einem Spaziergang am Meer abschließen.",
    ".apartment-start .eyebrow":"Dein Zuhause am Meer", "#start-title":"Alles beginnt wenige Schritte vom Meer", ".apartment-start .section-heading p:last-child":"Ein Vorteil dieser Unterkunft: Viele Pläne brauchen kein Auto. Du kannst am Meer in den Tag starten, Barbate zu Fuß erkunden und das Auto für Vejer, Zahara, Caños, Bolonia oder Tarifa nutzen.",
    "#rapidos .eyebrow":"Schnellzugriff", "#quick-title":"Wähle deinen nächsten Plan", "#hoy .eyebrow":"Heute empfohlen", "#today-title":"Worauf hast du heute Lust?", "#hoy .section-heading p":"Filtere nach Art des Plans oder suche per Stichwort. Speichere Favoriten für deinen Aufenthalt.", ".search-box span":"Im Guide suchen", "#emptyState":"Keine Ergebnisse für diese Filter. Versuche „Strand“, „ohne Auto“ oder „Gastronomie“.",
    "#sin-coche .eyebrow":"Plan ohne Auto ab der Wohnung", "#no-car-title":"Pläne, ohne das Auto zu bewegen", "#sin-coche .section-heading p:last-child":"Playa del Carmen, Strandpromenade, nahe Restaurants und Bars, Supermärkte, Eisdielen, Cafés, Markthalle, Hafen und lokale Produkte für ein Abendessen zu Hause.",
    "#playas .eyebrow":"Costa de la Luz", "#beaches-title":"Wichtige Strände ab Barbate", "#viento .eyebrow":"Plan je nach Wind", "#wind-title":"Wenn Levante oder Poniente weht", "#viento .section-heading p":"An der Costa de la Luz kann Wind das Erlebnis stark verändern. Prüfe die Vorhersage, bevor du einen Strand wählst. Bei starkem Wind sind Orte, Gastronomie, kurze Routen oder Stadtpläne oft besser.", "#windLink":"Wind vor dem Aufbruch prüfen",
    "#gastronomia .eyebrow":"4 Referenzen zum Essen", "#food-title":"Roter Thunfisch, Meer und Referenzrestaurants in Barbate", "#gastronomia .section-heading p":"Der Gastronomieguide konzentriert sich auf vier Namen: El Campero, Jarana, Variopinto und La Peña del Atún. Wähle je nach Tagesplan: Thunfisch-Erlebnis, Tisch am Meer, unkompliziertes Essen an der Promenade oder lokaler Klassiker.", ".food-guide-panel article:nth-child(1) strong":"Zuerst reservieren", ".food-guide-panel article:nth-child(1) p":"Im Sommer, an Wochenenden und Feiertagen am besten reservieren, bevor Strand oder Ausflug geplant werden.", ".food-guide-panel article:nth-child(2) strong":"Nach Moment wählen", ".food-guide-panel article:nth-child(2) p":"Mittags für Thunfisch und entspannte Pause; abends für Promenade, Terrasse und ruhige Rückkehr.", ".food-guide-panel article:nth-child(3) strong":"Zum Teilen bestellen", ".food-guide-panel article:nth-child(3) p":"So probierst du Cuts, Salzprodukte, Eintöpfe und Meeresgerichte, ohne die Wahl zu komplizieren.", "#barbate .eyebrow":"Barbate kompakt", "#essential-title":"Barbate in wenigen Stunden", "#rutas .eyebrow":"Pinienwälder, Klippen und Marschland", "#nature-title":"Natur und Routen", "#rutas .section-heading p":"Naturpark La Breña und Marismas del Barbate, Klippenweg, Torre del Tajo, Marschland und Route Richtung Caños de Meca. Wasser, bequeme Schuhe und Sonnenschutz mitnehmen; mittags bei Hitze meiden.",
    "#escapadas .eyebrow":"Costa de la Luz von deiner Terrasse", "#escapes-title":"Einfache Ausflüge ab der Wohnung", "#especiales .eyebrow":"Pläne zum Erinnern", "#special-title":"Momente, die die Reise ausmachen", "#mapa .eyebrow":"Nützliche Karte", "#map-title":"Nützliche Karte während deines Aufenthalts", "#piso .eyebrow":"Praktische Informationen", "#apartment-title":"Nützliche Unterkunftsinformationen", "#piso .highlight-card h3":"Was vor der Abreise zu tun ist", "#servicios .eyebrow":"Falls du es brauchst", "#emergency-title":"Notfälle und Dienste", "#servicios .alert":"Bei medizinischem Notfall oder Notlage rufe direkt <strong>112</strong> an.", "#temporada .eyebrow":"Jede Jahreszeit hat ihren Rhythmus", "#season-title":"Barbate nach Saison", "#temporada .highlight-card h3":"Bearbeitbare Veranstaltungen", "#temporada .highlight-card p":"Thunfisch-Gastronomiewoche · Feste · Märkte · Kulturaktivitäten. Ergänze Daten, Links und Zeiten, sobald bestätigt.", "#consejos .eyebrow":"Tipps des Gastgebers", "#tips-title":"Tipps für mehr Genuss", "#editar .eyebrow":"Bearbeitbarer Guide", "#edit-title":"So vervollständigst du diese Website", ".footer h2":"Vistas Marinas Barbate Guide", ".footer div > p:first-of-type":"Guide für Gäste unserer Ferienwohnung an der Strandpromenade von Barbate.", ".footer-note":"Informationen können je nach Saison, Wetter, Verfügbarkeit und Öffnungszeiten variieren. Bitte Reservierungen und Zeiten vor der Fahrt bestätigen."
  },
  fr: {
    ".brand strong":"Guide Vistas Marinas", ".nav-links a[href='#hoy']":"Que faire aujourd’hui", ".nav-links a[href='#sin-coche']":"Sans voiture", ".nav-links a[href='#playas']":"Plages", ".nav-links a[href='#gastronomia']":"Manger", ".nav-links a[href='#escapadas']":"Excursions", ".nav-links a[href='#piso']":"Le logement",
    ".hero .eyebrow":"Recommandations locales pour les hôtes logés près de la promenade maritime", "#hero-title":"Votre guide local pour découvrir Barbate depuis le front de mer", ".hero-subtitle":"Plages, thon rouge d’almadraba, villages blancs, itinéraires nature et idées simples pour profiter de votre séjour à Vistas Marinas Barbate.", ".microcopy":"Pensé pour les hôtes près de la promenade : que faire, où aller, quand se déplacer et comment profiter de chaque journée.",
    ".hero-actions a[href='#hoy']":"Que faire aujourd’hui", ".hero-actions a[href='#playas']":"Plages", ".hero-actions a[href='#gastronomia']":"Bien manger", ".hero-actions a[href='#sin-coche']":"Plans sans voiture", ".hero-actions a[href='#escapadas']":"Excursions", ".hero-actions a[href='#piso']":"Infos logement",
    ".base-card h2":"Votre base à Barbate", ".base-card li:nth-child(1)":"Première ligne de la promenade maritime", ".base-card li:nth-child(2)":"Terrasse privée", ".base-card li:nth-child(3)":"Plage à quelques pas", ".base-card li:nth-child(4)":"Restaurants et supermarchés proches", ".base-card li:nth-child(5)":"Idéal pour se déplacer à pied dans Barbate",
    "#bienvenida .eyebrow":"Bienvenue", "#welcome-title":"Bienvenue à Vistas Marinas Barbate", "#bienvenida .split > p":"Ce guide est conçu pour vous aider à profiter de Barbate tranquillement sans perdre du temps à chercher des informations dispersées. Vous trouverez des idées simples, des recommandations gastronomiques, des plages, des villages proches et des conseils pratiques depuis le logement.", "#primera-tarde h3":"Pour un premier après-midi facile", "#primera-tarde li:nth-child(1)":"Déposez les valises.", "#primera-tarde li:nth-child(2)":"Promenez-vous sur la promenade maritime.", "#primera-tarde li:nth-child(3)":"Achetez l’essentiel si nécessaire.", "#primera-tarde li:nth-child(4)":"Dînez près du logement.", "#primera-tarde li:nth-child(5)":"Terminez par une balade au bord de la mer.",
    ".apartment-start .eyebrow":"Votre maison face à la mer", "#start-title":"Tout commence à quelques pas de la mer", ".apartment-start .section-heading p:last-child":"L’un des avantages de ce logement est que beaucoup de sorties ne nécessitent pas de voiture. Vous pouvez commencer la journée près de la mer, vous déplacer à pied dans Barbate et réserver la voiture pour Vejer, Zahara, Caños, Bolonia ou Tarifa.",
    "#rapidos .eyebrow":"Accès rapides", "#quick-title":"Choisissez votre prochain plan", "#hoy .eyebrow":"Aujourd’hui, nous recommandons", "#today-title":"Qu’avez-vous envie de faire aujourd’hui ?", "#hoy .section-heading p":"Filtrez par type de plan ou cherchez par mot-clé. Enregistrez vos favoris pour les garder sous la main pendant votre séjour.", ".search-box span":"Rechercher dans le guide", "#emptyState":"Aucun résultat avec ces filtres. Essayez “plage”, “sans voiture” ou “gastronomie”.",
    "#sin-coche .eyebrow":"Plan sans voiture depuis le logement", "#no-car-title":"Plans sans déplacer la voiture", "#sin-coche .section-heading p:last-child":"Playa del Carmen, promenade maritime, restaurants et bars proches, supermarchés, glaciers, cafés, marché, port et produits locaux pour dîner à la maison.",
    "#playas .eyebrow":"Costa de la Luz", "#beaches-title":"Plages incontournables depuis Barbate", "#viento .eyebrow":"Plan selon le vent", "#wind-title":"Si le Levante ou le Poniente souffle", "#viento .section-heading p":"Sur la Costa de la Luz, le vent peut beaucoup changer l’expérience. Avant de choisir une plage, consultez la prévision. S’il y a beaucoup de vent, les villages, la gastronomie, les petites randonnées ou les plans urbains peuvent être préférables.", "#windLink":"Consulter le vent avant de partir",
    "#gastronomia .eyebrow":"4 références pour manger", "#food-title":"Thon rouge, mer et restaurants de référence à Barbate", "#gastronomia .section-heading p":"Le guide gastronomique se concentre sur quatre noms : El Campero, Jarana, Variopinto et La Peña del Atún. Choisissez selon le programme : expérience thon, table face à la mer, repas facile sur la promenade ou classique local.", ".food-guide-panel article:nth-child(1) strong":"Réserver d’abord", ".food-guide-panel article:nth-child(1) p":"En été, les week-ends et jours fériés, mieux vaut réserver avant d’organiser plage ou excursion.", ".food-guide-panel article:nth-child(2) strong":"Choisir par moment", ".food-guide-panel article:nth-child(2) p":"Midi pour le thon et la pause; soir pour la promenade, la terrasse et un retour tranquille.", ".food-guide-panel article:nth-child(3) strong":"Commander à partager", ".food-guide-panel article:nth-child(3) p":"Cela permet de goûter coupes, salaisons, ragoûts et plats de mer sans compliquer le choix.", "#barbate .eyebrow":"Barbate essentiel", "#essential-title":"Barbate en quelques heures", "#rutas .eyebrow":"Pinèdes, falaises et marais", "#nature-title":"Nature et itinéraires", "#rutas .section-heading p":"Parc naturel de La Breña et Marismas del Barbate, sentier des falaises, Torre del Tajo, marais et route vers Caños de Meca. Emportez de l’eau, des chaussures confortables, une protection solaire et évitez les heures chaudes.",
    "#escapadas .eyebrow":"Costa de la Luz depuis votre terrasse", "#escapes-title":"Excursions faciles depuis le logement", "#especiales .eyebrow":"Plans à retenir", "#special-title":"Moments qui font le voyage", "#mapa .eyebrow":"Carte utile", "#map-title":"Carte utile pendant votre séjour", "#piso .eyebrow":"Informations pratiques", "#apartment-title":"Informations utiles du logement", "#piso .highlight-card h3":"Que faire avant de partir", "#servicios .eyebrow":"Si vous en avez besoin", "#emergency-title":"Urgences et services", "#servicios .alert":"En cas d’urgence médicale ou d’urgence, appelez directement le <strong>112</strong>.", "#temporada .eyebrow":"Chaque saison a son rythme", "#season-title":"Barbate selon la saison", "#temporada .highlight-card h3":"Événements modifiables", "#temporada .highlight-card p":"Semaine gastronomique du thon · Foires · Marchés · Activités culturelles. Ajoutez dates, liens et horaires lorsqu’ils sont confirmés.", "#consejos .eyebrow":"Conseils de l’hôte", "#tips-title":"Conseils pour mieux profiter", "#editar .eyebrow":"Guide modifiable", "#edit-title":"Comment compléter ce site", ".footer h2":"Guide Vistas Marinas Barbate", ".footer div > p:first-of-type":"Guide créé pour les hôtes de notre appartement touristique près de la promenade maritime de Barbate.", ".footer-note":"Les informations peuvent varier selon la saison, la météo, la disponibilité et les horaires. Nous recommandons de confirmer réservations et horaires avant de vous déplacer."
  }
};

const phraseTranslations = {
  en: {
    "Terraza privada junto al paseo marítimo":"Private terrace by the seafront promenade", "Hasta 5 huéspedes":"Up to 5 guests", "2 habitaciones":"2 bedrooms", "1 baño":"1 bathroom", "Desde las 16:00, entrada autónoma con código":"From 4:00 pm, self check-in with code", "Hasta las 12:00 si reservas en tusereno.es":"Until 12:00 if you book on tusereno.es", "Hasta las 11:00 si reservas por plataforma externa":"Until 11:00 if you book through an external platform", "Sereno, alojamientos en Costa de la Luz":"Sereno, accommodation on the Costa de la Luz",
    "Desayunar en la terraza":"Breakfast on the terrace", "Bajar andando a la playa":"Walk down to the beach", "Comer atún rojo":"Eat bluefin tuna", "Pasear por el paseo marítimo":"Walk along the seafront", "Comprar producto local":"Buy local produce", "Cenar sin coger coche":"Dinner without taking the car", "Explorar la Costa de la Luz":"Explore the Costa de la Luz",
    "Playas":"Beaches", "Dónde comer":"Where to eat", "Planes con niños":"Plans with children", "Atardeceres":"Sunsets", "Rutas naturales":"Nature routes", "Días de levante":"Levante windy days", "Pueblos cercanos":"Nearby towns", "Sin coche":"Without a car", "Servicios útiles":"Useful services", "Información práctica":"Practical info", "Arena, calas y planes familiares":"Sand, coves and family plans", "Atún rojo y cenas cerca":"Bluefin tuna and nearby dinners", "Ideas fáciles y sin estrés":"Easy, stress-free ideas", "Trafalgar, Caños y playa":"Trafalgar, Caños and beach", "La Breña y marismas":"La Breña and marshes", "Alternativas con viento":"Windy alternatives", "Vejer, Tarifa, Cádiz":"Vejer, Tarifa, Cádiz", "Todo andando desde el piso":"Everything on foot from the apartment", "Emergencias y básicos":"Emergencies and basics", "Check-in, WiFi y normas":"Check-in, WiFi and house rules",
    "Mañana sin coche":"Car-free morning", "Tarde sin coche":"Car-free afternoon", "Día completo sin coche":"Full day without a car", "Noche sin coche":"Car-free evening", "Desayuno en la terraza":"Breakfast on the terrace", "Playa del Carmen":"Playa del Carmen", "Café o mercado":"Coffee or market", "Vuelta al piso para descansar":"Back to the apartment to rest", "Paseo marítimo":"Seafront promenade", "Helado o merienda":"Ice cream or snack", "Compra básica":"Basic shopping", "Cena cerca del alojamiento":"Dinner near the accommodation", "Playa":"Beach", "Mercado o producto local":"Market or local produce", "Comida de atún":"Tuna lunch", "Siesta":"Siesta", "Paseo al puerto":"Walk to the harbour", "Cena tranquila":"Quiet dinner", "Reserva cerca":"Book nearby", "Cena sin coche":"Dinner without a car", "Paseo junto al mar":"Walk by the sea", "Vuelta andando al piso":"Walk back to the apartment"
  },
  de: {
    "Terraza privada junto al paseo marítimo":"Private Terrasse an der Strandpromenade", "Hasta 5 huéspedes":"Bis zu 5 Gäste", "2 habitaciones":"2 Schlafzimmer", "1 baño":"1 Bad", "Desde las 16:00, entrada autónoma con código":"Ab 16:00 Uhr, Self-Check-in mit Code", "Hasta las 12:00 si reservas en tusereno.es":"Bis 12:00 Uhr bei Buchung über tusereno.es", "Hasta las 11:00 si reservas por plataforma externa":"Bis 11:00 Uhr bei Buchung über externe Plattform", "Sereno, alojamientos en Costa de la Luz":"Sereno, Unterkünfte an der Costa de la Luz",
    "Desayunar en la terraza":"Frühstück auf der Terrasse", "Bajar andando a la playa":"Zu Fuß zum Strand", "Comer atún rojo":"Roten Thunfisch essen", "Pasear por el paseo marítimo":"An der Promenade spazieren", "Comprar producto local":"Lokale Produkte kaufen", "Cenar sin coger coche":"Abendessen ohne Auto", "Explorar la Costa de la Luz":"Costa de la Luz erkunden",
    "Playas":"Strände", "Dónde comer":"Wo essen", "Planes con niños":"Pläne mit Kindern", "Atardeceres":"Sonnenuntergänge", "Rutas naturales":"Naturwege", "Días de levante":"Levante-Tage", "Pueblos cercanos":"Nahe Orte", "Sin coche":"Ohne Auto", "Servicios útiles":"Nützliche Dienste", "Información práctica":"Praktische Infos", "Arena, calas y planes familiares":"Sand, Buchten und Familienpläne", "Atún rojo y cenas cerca":"Roter Thunfisch und Abendessen in der Nähe", "Ideas fáciles y sin estrés":"Einfache, stressfreie Ideen", "Trafalgar, Caños y playa":"Trafalgar, Caños und Strand", "La Breña y marismas":"La Breña und Marschland", "Alternativas con viento":"Alternativen bei Wind", "Vejer, Tarifa, Cádiz":"Vejer, Tarifa, Cádiz", "Todo andando desde el piso":"Alles zu Fuß ab der Wohnung", "Emergencias y básicos":"Notfälle und Basics", "Check-in, WiFi y normas":"Check-in, WLAN und Regeln",
    "Mañana sin coche":"Vormittag ohne Auto", "Tarde sin coche":"Nachmittag ohne Auto", "Día completo sin coche":"Ganzer Tag ohne Auto", "Noche sin coche":"Abend ohne Auto", "Desayuno en la terraza":"Frühstück auf der Terrasse", "Playa del Carmen":"Playa del Carmen", "Café o mercado":"Café oder Markt", "Vuelta al piso para descansar":"Zurück zur Wohnung zum Ausruhen", "Paseo marítimo":"Strandpromenade", "Helado o merienda":"Eis oder Snack", "Compra básica":"Basiseinkauf", "Cena cerca del alojamiento":"Abendessen nahe der Unterkunft", "Playa":"Strand", "Mercado o producto local":"Markt oder lokale Produkte", "Comida de atún":"Thunfisch-Mittagessen", "Siesta":"Siesta", "Paseo al puerto":"Spaziergang zum Hafen", "Cena tranquila":"Ruhiges Abendessen", "Reserva cerca":"In der Nähe reservieren", "Cena sin coche":"Abendessen ohne Auto", "Paseo junto al mar":"Spaziergang am Meer", "Vuelta andando al piso":"Zu Fuß zurück zur Wohnung"
  },
  fr: {
    "Terraza privada junto al paseo marítimo":"Terrasse privée près de la promenade maritime", "Hasta 5 huéspedes":"Jusqu’à 5 hôtes", "2 habitaciones":"2 chambres", "1 baño":"1 salle de bain", "Desde las 16:00, entrada autónoma con código":"À partir de 16 h, arrivée autonome avec code", "Hasta las 12:00 si reservas en tusereno.es":"Jusqu’à 12 h si vous réservez sur tusereno.es", "Hasta las 11:00 si reservas por plataforma externa":"Jusqu’à 11 h si vous réservez via une plateforme externe", "Sereno, alojamientos en Costa de la Luz":"Sereno, hébergements sur la Costa de la Luz",
    "Desayunar en la terraza":"Petit-déjeuner sur la terrasse", "Bajar andando a la playa":"Descendre à pied à la plage", "Comer atún rojo":"Manger du thon rouge", "Pasear por el paseo marítimo":"Se promener sur le front de mer", "Comprar producto local":"Acheter des produits locaux", "Cenar sin coger coche":"Dîner sans prendre la voiture", "Explorar la Costa de la Luz":"Explorer la Costa de la Luz",
    "Playas":"Plages", "Dónde comer":"Où manger", "Planes con niños":"Plans avec enfants", "Atardeceres":"Couchers de soleil", "Rutas naturales":"Itinéraires nature", "Días de levante":"Jours de Levante", "Pueblos cercanos":"Villages proches", "Sin coche":"Sans voiture", "Servicios útiles":"Services utiles", "Información práctica":"Infos pratiques", "Arena, calas y planes familiares":"Sable, criques et plans en famille", "Atún rojo y cenas cerca":"Thon rouge et dîners proches", "Ideas fáciles y sin estrés":"Idées faciles et sans stress", "Trafalgar, Caños y playa":"Trafalgar, Caños et plage", "La Breña y marismas":"La Breña et marais", "Alternativas con viento":"Alternatives avec vent", "Vejer, Tarifa, Cádiz":"Vejer, Tarifa, Cadix", "Todo andando desde el piso":"Tout à pied depuis le logement", "Emergencias y básicos":"Urgences et essentiels", "Check-in, WiFi y normas":"Check-in, WiFi et règles",
    "Mañana sin coche":"Matin sans voiture", "Tarde sin coche":"Après-midi sans voiture", "Día completo sin coche":"Journée complète sans voiture", "Noche sin coche":"Soirée sans voiture", "Desayuno en la terraza":"Petit-déjeuner sur la terrasse", "Playa del Carmen":"Playa del Carmen", "Café o mercado":"Café ou marché", "Vuelta al piso para descansar":"Retour au logement pour se reposer", "Paseo marítimo":"Promenade maritime", "Helado o merienda":"Glace ou goûter", "Compra básica":"Courses de base", "Cena cerca del alojamiento":"Dîner près du logement", "Playa":"Plage", "Mercado o producto local":"Marché ou produit local", "Comida de atún":"Repas de thon", "Siesta":"Sieste", "Paseo al puerto":"Balade au port", "Cena tranquila":"Dîner tranquille", "Reserva cerca":"Réservation proche", "Cena sin coche":"Dîner sans voiture", "Paseo junto al mar":"Balade au bord de la mer", "Vuelta andando al piso":"Retour à pied au logement"
  }
};


Object.assign(phraseTranslations.en, {
  "Tengo 1 hora":"I have 1 hour", "Tengo una mañana":"I have a morning", "Tengo una tarde":"I have an afternoon", "Tengo un día completo":"I have a full day", "Vengo con niños":"I’m coming with children", "Quiero comer bien":"I want to eat well", "Quiero naturaleza":"I want nature", "Quiero evitar coche":"I want to avoid the car", "Hace viento":"It’s windy", "Quiero un atardecer especial":"I want a special sunset", "Quiero un plan tranquilo":"I want a quiet plan",
  "Paseo por el paseo marítimo, café o helado, y vuelta tranquila al piso.":"Walk along the seafront, coffee or ice cream, then a relaxed return to the apartment.", "Perfecto para aterrizar después del viaje.":"Perfect for settling in after the journey.", "Playa del Carmen o Hierbabuena, comida cerca y descanso en la terraza.":"Playa del Carmen or Hierbabuena, lunch nearby and a rest on the terrace.", "Lleva solo lo imprescindible: puedes volver al piso cuando quieras.":"Take only the essentials: you can return to the apartment whenever you want.", "Caños de Meca, Faro de Trafalgar y atardecer.":"Caños de Meca, Trafalgar Lighthouse and sunset.", "Consulta viento y aparcamiento en temporada alta.":"Check wind and parking in high season.", "Vejer por la mañana, comida con calma y tarde en Zahara de los Atunes.":"Vejer in the morning, a relaxed lunch and afternoon in Zahara de los Atunes.", "Un día redondo de pueblo blanco, playa y buena mesa.":"A complete day of white village, beach and good food.", "Playa cómoda, paseo marítimo, helado, descanso y cena temprana cerca del alojamiento.":"Comfortable beach, promenade, ice cream, rest and early dinner near the accommodation.", "La cercanía al piso facilita si hay que volver a por algo.":"Being close to the apartment makes it easy to go back for anything.", "Reserva un restaurante de atún rojo, pide platos para compartir y termina con paseo junto al mar.":"Book a bluefin tuna restaurant, order dishes to share and finish with a walk by the sea.", "En verano, puentes y fines de semana conviene reservar.":"In summer, holidays and weekends, booking is recommended.", "Sendero de La Breña, Torre del Tajo o marismas, evitando horas centrales de calor.":"La Breña trail, Torre del Tajo or marshes, avoiding the hottest hours.", "Agua, calzado y protección solar son imprescindibles.":"Water, footwear and sun protection are essential.", "Playa, paseo marítimo, mercado, restaurantes cercanos y cena junto al alojamiento.":"Beach, promenade, market, nearby restaurants and dinner by the accommodation.", "El plan más cómodo para disfrutar la ubicación.":"The most comfortable plan to enjoy the location.", "Cambia playa por Vejer, Cádiz, tapas, mercado o ruta corta resguardada.":"Swap beach for Vejer, Cádiz, tapas, market or a sheltered short route.", "Mira la previsión antes de salir.":"Check the forecast before leaving.", "Faro de Trafalgar, Caños de Meca o paseo final por la playa antes de cenar.":"Trafalgar Lighthouse, Caños de Meca or a final beach walk before dinner.", "Sal con margen para aparcar y caminar sin prisa.":"Leave time to park and walk without rushing.", "Desayuno lento en la terraza, paseo por la playa, compra local y cena en casa.":"Slow breakfast on the terrace, beach walk, local shopping and dinner at home.", "No todos los mejores planes requieren agenda.":"Not all the best plans need an agenda.",
  "playa":"beach", "sin coche":"without a car", "familia":"family", "tranquilo":"quiet", "atardecer":"sunset", "escapada":"day trip", "gastronomía":"food", "naturaleza":"nature", "ruta":"route", "viento":"wind", "pueblo":"town", "cultura":"culture",
  "Día perfecto de playa":"Perfect beach day", "Día con levante fuerte":"Day with strong Levante", "Día con poniente":"Day with Poniente", "Día para atardecer":"Sunset day", "Día para ruta interior":"Inland route day", "Día para Vejer":"Day for Vejer", "Día para Cádiz/Tarifa":"Day for Cádiz/Tarifa", "Primavera":"Spring", "Verano":"Summer", "Otoño":"Autumn", "Invierno":"Winter", "Supermercados":"Supermarkets", "Farmacias":"Pharmacies", "Centro de salud":"Health centre", "Aparcamientos":"Parking", "Restaurantes":"Restaurants", "Gasolineras":"Petrol stations", "Cajeros":"ATMs", "Cafeterías":"Cafés", "Mercado":"Market", "Puntos de interés":"Points of interest", "Emergencias":"Emergencies", "Farmacias cercanas":"Nearby pharmacies", "Policía local":"Local police", "Guardia Civil":"Civil Guard", "Taxi":"Taxi", "Hospital de referencia":"Reference hospital", "Sereno/anfitrión":"Sereno/host", "Contacto editable":"Editable contact", "Llamada directa ante urgencia médica o emergencia":"Direct call for medical urgency or emergency"
});
Object.assign(phraseTranslations.de, {
  "Tengo 1 hora":"Ich habe 1 Stunde", "Tengo una mañana":"Ich habe einen Vormittag", "Tengo una tarde":"Ich habe einen Nachmittag", "Tengo un día completo":"Ich habe einen ganzen Tag", "Vengo con niños":"Ich reise mit Kindern", "Quiero comer bien":"Ich möchte gut essen", "Quiero naturaleza":"Ich möchte Natur", "Quiero evitar coche":"Ich möchte das Auto vermeiden", "Hace viento":"Es ist windig", "Quiero un atardecer especial":"Ich möchte einen besonderen Sonnenuntergang", "Quiero un plan tranquilo":"Ich möchte einen ruhigen Plan",
  "Paseo por el paseo marítimo, café o helado, y vuelta tranquila al piso.":"Spaziergang an der Promenade, Kaffee oder Eis und entspannt zurück zur Wohnung.", "Perfecto para aterrizar después del viaje.":"Perfekt, um nach der Reise anzukommen.", "playa":"Strand", "sin coche":"ohne Auto", "familia":"Familie", "tranquilo":"ruhig", "atardecer":"Sonnenuntergang", "escapada":"Ausflug", "gastronomía":"Gastronomie", "naturaleza":"Natur", "ruta":"Route", "viento":"Wind", "pueblo":"Ort", "cultura":"Kultur",
  "Día perfecto de playa":"Perfekter Strandtag", "Día con levante fuerte":"Tag mit starkem Levante", "Día con poniente":"Tag mit Poniente", "Día para atardecer":"Tag für Sonnenuntergang", "Día para ruta interior":"Tag für eine Route im Inland", "Día para Vejer":"Tag für Vejer", "Día para Cádiz/Tarifa":"Tag für Cádiz/Tarifa", "Primavera":"Frühling", "Verano":"Sommer", "Otoño":"Herbst", "Invierno":"Winter", "Supermercados":"Supermärkte", "Farmacias":"Apotheken", "Centro de salud":"Gesundheitszentrum", "Aparcamientos":"Parkplätze", "Restaurantes":"Restaurants", "Gasolineras":"Tankstellen", "Cajeros":"Geldautomaten", "Cafeterías":"Cafés", "Mercado":"Markt", "Puntos de interés":"Sehenswürdigkeiten", "Emergencias":"Notfälle", "Farmacias cercanas":"Nahe Apotheken", "Policía local":"Lokalpolizei", "Guardia Civil":"Guardia Civil", "Hospital de referencia":"Referenzkrankenhaus", "Sereno/anfitrión":"Sereno/Gastgeber", "Contacto editable":"Bearbeitbarer Kontakt", "Llamada directa ante urgencia médica o emergencia":"Direkter Anruf bei medizinischem Notfall oder Notlage"
});
Object.assign(phraseTranslations.fr, {
  "Tengo 1 hora":"J’ai 1 heure", "Tengo una mañana":"J’ai une matinée", "Tengo una tarde":"J’ai un après-midi", "Tengo un día completo":"J’ai une journée complète", "Vengo con niños":"Je viens avec des enfants", "Quiero comer bien":"Je veux bien manger", "Quiero naturaleza":"Je veux de la nature", "Quiero evitar coche":"Je veux éviter la voiture", "Hace viento":"Il y a du vent", "Quiero un atardecer especial":"Je veux un coucher de soleil spécial", "Quiero un plan tranquilo":"Je veux un plan tranquille",
  "Paseo por el paseo marítimo, café o helado, y vuelta tranquila al piso.":"Balade sur la promenade, café ou glace, puis retour tranquille au logement.", "Perfecto para aterrizar después del viaje.":"Parfait pour arriver en douceur après le voyage.", "playa":"plage", "sin coche":"sans voiture", "familia":"famille", "tranquilo":"tranquille", "atardecer":"coucher de soleil", "escapada":"excursion", "gastronomía":"gastronomie", "naturaleza":"nature", "ruta":"itinéraire", "viento":"vent", "pueblo":"village", "cultura":"culture",
  "Día perfecto de playa":"Journée plage parfaite", "Día con levante fuerte":"Journée avec fort Levante", "Día con poniente":"Journée avec Poniente", "Día para atardecer":"Journée pour coucher de soleil", "Día para ruta interior":"Journée pour itinéraire intérieur", "Día para Vejer":"Journée pour Vejer", "Día para Cádiz/Tarifa":"Journée pour Cadix/Tarifa", "Primavera":"Printemps", "Verano":"Été", "Otoño":"Automne", "Invierno":"Hiver", "Supermercados":"Supermarchés", "Farmacias":"Pharmacies", "Centro de salud":"Centre de santé", "Aparcamientos":"Parkings", "Restaurantes":"Restaurants", "Gasolineras":"Stations-service", "Cajeros":"Distributeurs", "Cafeterías":"Cafés", "Mercado":"Marché", "Puntos de interés":"Points d’intérêt", "Emergencias":"Urgences", "Farmacias cercanas":"Pharmacies proches", "Policía local":"Police locale", "Guardia Civil":"Guardia Civil", "Hospital de referencia":"Hôpital de référence", "Sereno/anfitrión":"Sereno/hôte", "Contacto editable":"Contact modifiable", "Llamada directa ante urgencia médica o emergencia":"Appel direct en cas d’urgence médicale ou d’urgence"
});


Object.assign(phraseTranslations.en, {
  "Web/reservar":"Website/book", "Templo del atún rojo":"Temple of bluefin tuna", "Barbate playa":"Barbate beach", "Frente al mar":"Facing the sea", "Clásico local":"Local classic", "Cocina frente al mar":"Cuisine by the sea", "Reserva imprescindible":"Booking essential", "Tapas y platos para compartir":"Tapas and sharing dishes", "Comida informal":"Casual meal", "Producto local":"Local produce", "Paseo marítimo":"Seafront promenade", "Tostas y salazones":"Toasts and salted tuna", "Tacos barbateños":"Barbate-style tacos", "Arroces y guisos marineros":"Rice dishes and seafood stews",
  "Av. Constitución, 5 · imprescindible reservar":"Av. Constitución, 5 · booking essential", "Av. del Atlántico, 1 · paseo marítimo":"Av. del Atlántico, 1 · seafront promenade", "Edificio Trafalgar · Paseo Marítimo":"Edificio Trafalgar · seafront promenade", "C/ Ancha, 39 · centro de Barbate":"C/ Ancha, 39 · Barbate centre",
  "Una comida o cena especial centrada en el atún rojo de almadraba.":"A special lunch or dinner focused on almadraba bluefin tuna.", "Comer o cenar junto al mar sin alejarte del paseo marítimo.":"Lunch or dinner by the sea without leaving the promenade.", "Una comida flexible frente al mar, especialmente si buscas algo cómodo desde la playa.":"A flexible meal by the sea, especially if you want something easy from the beach.", "Tapear, probar cocina local y comer atún rojo con ambiente barbateño.":"Tapas, local cooking and bluefin tuna in a Barbate atmosphere."
});
Object.assign(phraseTranslations.de, {"Web/reservar":"Website/reservieren", "Templo del atún rojo":"Tempel des roten Thunfischs", "Barbate playa":"Barbate Strand", "Frente al mar":"Direkt am Meer", "Clásico local":"Lokaler Klassiker", "Reserva imprescindible":"Reservierung wichtig", "Paseo marítimo":"Strandpromenade"});
Object.assign(phraseTranslations.fr, {"Web/reservar":"Site/réserver", "Templo del atún rojo":"Temple du thon rouge", "Barbate playa":"Barbate plage", "Frente al mar":"Face à la mer", "Clásico local":"Classique local", "Reserva imprescindible":"Réservation indispensable", "Paseo marítimo":"Promenade maritime"});


Object.assign(phraseTranslations.en, {
  "Parque Natural de La Breña":"La Breña Natural Park", "Consulta la ficha oficial":"Check the official page", "Variable según sendero":"Varies by trail", "Pinar, acantilados, marismas, senderos señalizados e información oficial":"Pine forest, cliffs, marshes, marked trails and official information", "Revisa la Ventana del Visitante antes de salir para elegir sendero, equipamientos y avisos del espacio protegido.":"Check the Visitor Window before leaving to choose trails, facilities and protected-area notices.", "Ficha oficial":"Official page",
  "La Breña y Marismas en Cádiz Turismo":"La Breña and Marshes on Cádiz Tourism", "Lectura previa rápida":"Quick pre-trip read", "Informativa":"Informational", "Antes de planificar la ruta":"Before planning the route", "Inspirarte con una visión turística del parque natural":"Get inspired with a tourist overview of the natural park", "Úsala para completar el plan con contexto, ideas de visita y puntos de interés de la provincia.":"Use it to complete your plan with context, visit ideas and provincial points of interest.",
  "Según alquiler":"Depending on rental", "A tu ritmo":"At your own pace", "Mañana o tarde suave":"Morning or mild afternoon", "Alquilar bicicletas o e-bikes para moverte por el entorno de La Breña":"Rent bikes or e-bikes to move around La Breña", "Reserva con antelación en temporada alta y confirma punto de recogida, autonomía y rutas recomendadas.":"Book ahead in high season and confirm pickup point, battery range and recommended routes.", "Alquiler de bicicletas":"Bike rental",
  "Según salida":"Depending on departure", "Plan guiado":"Guided plan", "Días de mar tranquilo":"Calm-sea days", "Rutas en barco desde Barbate y una perspectiva diferente de la costa":"Boat routes from Barbate and a different perspective of the coast", "Consulta horarios, disponibilidad y condiciones de viento o mar antes de reservar.":"Check times, availability and wind or sea conditions before booking.", "Rutas en barco":"Boat routes",
  "Herpac · tiendas":"Herpac · shops", "Gadira · atún rojo":"Gadira · bluefin tuna", "Comprar conservas, salazones y productos de Barbate":"Buy preserves, salted products and Barbate produce", "Comprar atún rojo salvaje de almadraba y productos locales":"Buy wild almadraba bluefin tuna and local products"
});
Object.assign(phraseTranslations.de, {
  "Parque Natural de La Breña":"Naturpark La Breña", "Consulta la ficha oficial":"Offizielle Seite ansehen", "Variable según sendero":"Je nach Wanderweg", "Ficha oficial":"Offizielle Seite", "La Breña y Marismas en Cádiz Turismo":"La Breña und Marschland bei Cádiz Turismo", "Lectura previa rápida":"Kurze Vorbereitung", "Informativa":"Informativ", "Antes de planificar la ruta":"Vor der Routenplanung", "Según alquiler":"Je nach Verleih", "A tu ritmo":"In deinem Tempo", "Alquiler de bicicletas":"Fahrradverleih", "Según salida":"Je nach Abfahrt", "Plan guiado":"Geführter Plan", "Rutas en barco":"Bootstouren", "Herpac · tiendas":"Herpac · Geschäfte", "Gadira · atún rojo":"Gadira · roter Thunfisch", "Comprar conservas, salazones y productos de Barbate":"Konserven, Salzprodukte und Produkte aus Barbate kaufen", "Comprar atún rojo salvaje de almadraba y productos locales":"Wilden Almadraba-Thunfisch und lokale Produkte kaufen"
});
Object.assign(phraseTranslations.fr, {
  "Parque Natural de La Breña":"Parc naturel de La Breña", "Consulta la ficha oficial":"Consulter la fiche officielle", "Variable según sendero":"Variable selon le sentier", "Ficha oficial":"Fiche officielle", "La Breña y Marismas en Cádiz Turismo":"La Breña et marais sur Cádiz Turismo", "Lectura previa rápida":"Lecture rapide avant visite", "Informativa":"Informative", "Antes de planificar la ruta":"Avant de planifier l’itinéraire", "Según alquiler":"Selon la location", "A tu ritmo":"À votre rythme", "Alquiler de bicicletas":"Location de vélos", "Según salida":"Selon la sortie", "Plan guiado":"Sortie guidée", "Rutas en barco":"Balades en bateau", "Herpac · tiendas":"Herpac · boutiques", "Gadira · atún rojo":"Gadira · thon rouge", "Comprar conservas, salazones y productos de Barbate":"Acheter conserves, salaisons et produits de Barbate", "Comprar atún rojo salvaje de almadraba y productos locales":"Acheter du thon rouge sauvage d’almadraba et des produits locaux"
});

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("lang");
  const stored = localStorage.getItem("vistasMarinasLanguage");
  const browser = (navigator.language || "es").slice(0, 2);
  return [fromUrl, stored, browser].find(lang => SUPPORTED_LANGUAGES.includes(lang)) || "es";
}

function t(value) {
  if (typeof value !== "string" || currentLanguage === "es") return value;
  return phraseTranslations[currentLanguage]?.[value] || value;
}

function translateItems(items = []) { return items.map(t); }
function u(key) { return ui[currentLanguage]?.[key] || ui.es[key]; }
function l(key) { return u("labels")[key] || ui.es.labels[key]; }

function applyPageTranslation() {
  const pack = ui[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = pack.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", pack.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", pack.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", pack.description);
  $(".skip-link").textContent = pack.skip;
  $(".nav").setAttribute("aria-label", pack.navLabel);
  $(".language-switcher").setAttribute("aria-label", pack.languageLabel);
  $(".sr-only", $(".nav-toggle")).textContent = pack.menu;
  $(".hero-bg").setAttribute("aria-label", pack.heroImage);
  $(".brand small").textContent = pack.brandSmall;
  $("#siteSearch").placeholder = currentLanguage === "es" ? "Ej. atún, sin coche, atardecer, niños..." : currentLanguage === "en" ? "E.g. tuna, no car, sunset, children..." : currentLanguage === "de" ? "Z. B. Thunfisch, ohne Auto, Sonnenuntergang, Kinder..." : "Ex. thon, sans voiture, coucher de soleil, enfants...";
  $("#backToTop").setAttribute("aria-label", pack.backTop);
  $$(".language-switcher button").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage)));
  Object.entries(staticTranslations[currentLanguage] || {}).forEach(([selector, value]) => {
    const node = $(selector);
    if (node) node.innerHTML = value;
  });
}


function htmlList(items) { return `<ul>${items.map(item => `<li>${t(item)}</li>`).join("")}</ul>`; }
function tagsHtml(tags = []) { return `<div class="card-meta">${tags.map(tag => `<span class="pill">${t(tag)}</span>`).join("")}</div>`; }
function favoriteButton(type, name) {
  const id = cardId(type, name);
  const active = getFavorites().includes(id);
  return `<button class="icon-btn favorite ${active ? "active" : ""}" type="button" data-fav-id="${id}" aria-pressed="${active}" aria-label="${u("favoriteAria")(t(name))}">${active ? "★" : "☆"}</button>`;
}
function mapButton(url, label = u("maps")) {
  const href = placeholderHref(url);
  const klass = href === "#" ? "btn placeholder-link" : "btn";
  return `<a class="${klass}" href="${href}" target="_blank" rel="noopener">${label}</a>`;
}
function routeActions(route) {
  const buttons = [];
  if (route.webUrl) buttons.push(mapButton(route.webUrl, t(route.webLabel || "Web oficial")));
  if (route.mapsUrl) buttons.push(mapButton(route.mapsUrl, "Maps/Wikiloc"));
  buttons.push(favoriteButton("ruta", route.name));
  return buttons.join("");
}
function copyButton(address) {
  if (!address) return "";
  return `<button class="btn copy-address" type="button" data-copy="${address}">${u("copyAddress")}</button><span class="copy-feedback" aria-live="polite"></span>`;
}

function renderStaticContent() {
  $("#apartmentMoments").innerHTML = apartmentMoments.map((text, index) => `<article class="mini-card"><span>${["☕","🌊","🐟","🚶","🧺","🍽️","🚗"][index]}</span><strong>${t(text)}</strong></article>`).join("");
  $("#quickLinks").innerHTML = quickLinks.map(([title, href, text]) => `<a class="quick-card" href="${href}"><strong>${t(title)}</strong><small>${t(text)}</small></a>`).join("");
  $("#noCarItineraries").innerHTML = noCarItineraries.map((item, i) => `<article class="timeline-item"><span>${i + 1}</span><h3>${t(item.time)}</h3>${htmlList(item.steps)}</article>`).join("");
  $("#windGrid").innerHTML = windPlans.map(item => `<article class="card"><h3>${t(item.title)}</h3><p>${t(item.text)}</p></article>`).join("");
  $("#foodCategories").innerHTML = foodCategories.map(item => `<span>${t(item)}</span>`).join("");
  $("#dishList").innerHTML = dishes.map(item => `<span>${t(item)}</span>`).join("");
  $("#barbateTimeline").innerHTML = barbateTimeline.map((item, i) => `<article class="timeline-item"><span>${i + 1}</span><h3>${t(item.time)}</h3>${htmlList(item.steps)}</article>`).join("");
  $("#specialPlans").innerHTML = specialPlans.map((item, i) => `<article class="card"><h3>${t(item)}</h3><p>${i === 6 || i === 7 ? u("specialTerrace") : u("specialDefault")}</p>${favoriteButton("especial", item)}</article>`).join("");
  $("#seasonGrid").innerHTML = seasons.map(item => `<article class="card"><h3>${t(item.title)}</h3><p>${t(item.text)}</p></article>`).join("");
  $("#hostTips").innerHTML = hostTips.map(tip => `<div class="tip">${tip}</div>`).join("");
  $("#windLink").href = placeholderHref(apartmentInfo.windUrl);
  $("#footerContact").textContent = `${u("contactEditable")}: ${t(apartmentInfo.hostContact)}`;
}

function renderPlans(filter = "todos", query = "") {
  const q = normalize(query);
  const filtered = plans.filter(plan => (filter === "todos" || plan.tags.includes(filter)) && normalize(`${plan.title} ${plan.text} ${plan.tip} ${plan.tags.join(" ")} ${t(plan.title)} ${t(plan.text)} ${t(plan.tip)} ${plan.tags.map(t).join(" ")}`).includes(q));
  $("#plansGrid").innerHTML = filtered.map(plan => `<article class="card" data-search="${plan.tags.join(" ")}"><h3>${t(plan.title)}</h3>${tagsHtml(plan.tags)}<p>${t(plan.text)}</p><p><strong>${u("localTip")}:</strong> ${t(plan.tip)}</p><div class="card-actions">${favoriteButton("plan", plan.title)}</div></article>`).join("");
  $("#emptyState").hidden = filtered.length > 0;
}

function renderCards() {
  $("#beachesGrid").innerHTML = beaches.map(beach => `<article class="card"><h3>${t(beach.name)}</h3>${tagsHtml(beach.tags)}<p><strong>${l("type")}:</strong> ${t(beach.type)}</p><p><strong>${l("distance")}:</strong> ${t(beach.distance)}</p><p><strong>${l("idealFor")}:</strong> ${t(beach.idealFor)}</p><p><strong>${l("bestTime")}:</strong> ${t(beach.bestTime)}</p><p><strong>${l("recommendation")}:</strong> ${t(beach.hostTip)}</p><p><strong>${l("occupancy")}:</strong> ${t(beach.occupancy)} · <strong>${l("kids")}:</strong> ${t(beach.kids)} · <strong>${l("wind")}:</strong> ${t(beach.wind)}</p><div class="card-actions">${mapButton(beach.mapsUrl)}${favoriteButton("playa", beach.name)}</div></article>`).join("");
  $("#restaurantsGrid").innerHTML = restaurants.map((rest, index) => `<article class="card restaurant-card"><span class="restaurant-number">${String(index + 1).padStart(2, "0")}</span><h3>${t(rest.name)}</h3>${tagsHtml([rest.category, rest.price])}<p><strong>${l("idealFor")}:</strong> ${t(rest.idealFor)}</p><p><strong>${l("whatToOrder")}:</strong> ${t(rest.whatToOrder)}</p><p><strong>${u("why")}:</strong> ${t(rest.why)}</p><p><strong>${l("distance")}:</strong> ${t(rest.distance)}</p><div class="card-actions"><a class="btn primary ${isPlaceholder(rest.bookingUrl) ? "placeholder-link" : ""}" href="${placeholderHref(rest.bookingUrl)}" target="_blank" rel="noopener">${t("Web/reservar")}</a>${mapButton(rest.mapsUrl)}${favoriteButton("restaurante", rest.name)}</div></article>`).join("");
  $("#routesGrid").innerHTML = routes.map(route => `<article class="card"><h3>${t(route.name)}</h3><p><strong>${l("duration")}:</strong> ${t(route.duration)}</p><p><strong>${l("difficulty")}:</strong> ${t(route.difficulty)}</p><p><strong>${l("bestHour")}:</strong> ${t(route.bestTime)}</p><p><strong>${l("idealFor")}:</strong> ${t(route.idealFor)}</p><p><strong>${l("recommendation")}:</strong> ${t(route.recommendation)}</p><div class="card-actions">${mapButton(route.mapsUrl, "Maps/Wikiloc")}${favoriteButton("ruta", route.name)}</div></article>`).join("");
  $("#escapesGrid").innerHTML = escapes.map(escape => `<article class="card"><h3>${t(escape.name)}</h3><p><strong>${l("see")}:</strong> ${t(escape.see)}</p><p><strong>${l("idealFor")}:</strong> ${t(escape.ideal)}</p><p><strong>${l("recommendedTime")}:</strong> ${t(escape.time)}</p><p><strong>${l("bestTime")}:</strong> ${t(escape.best)}</p><p><strong>${l("suggestedPlan")}:</strong> ${t(escape.plan)}</p><div class="card-actions">${mapButton(escape.mapsUrl, u("tourismWeb"))}${favoriteButton("escapada", escape.name)}</div></article>`).join("");
  $("#routesGrid").innerHTML = routes.map(route => `<article class="card"><h3>${t(route.name)}</h3><p><strong>${l("duration")}:</strong> ${t(route.duration)}</p><p><strong>${l("difficulty")}:</strong> ${t(route.difficulty)}</p><p><strong>${l("bestHour")}:</strong> ${t(route.bestTime)}</p><p><strong>${l("idealFor")}:</strong> ${t(route.idealFor)}</p><p><strong>${l("recommendation")}:</strong> ${t(route.recommendation)}</p><div class="card-actions">${routeActions(route)}</div></article>`).join("");
  $("#escapesGrid").innerHTML = escapes.map(escape => `<article class="card"><h3>${t(escape.name)}</h3><p><strong>${l("see")}:</strong> ${t(escape.see)}</p><p><strong>${l("idealFor")}:</strong> ${t(escape.ideal)}</p><p><strong>${l("recommendedTime")}:</strong> ${t(escape.time)}</p><p><strong>${l("bestTime")}:</strong> ${t(escape.best)}</p><p><strong>${l("suggestedPlan")}:</strong> ${t(escape.plan)}</p><div class="card-actions">${mapButton(escape.mapsUrl)}${favoriteButton("escapada", escape.name)}</div></article>`).join("");
  $("#servicesGrid").innerHTML = services.map(service => `<a class="map-button ${isPlaceholder(service.mapsUrl) ? "placeholder-link" : ""}" href="${placeholderHref(service.mapsUrl)}" target="_blank" rel="noopener"><span>${t(service.name)}</span><span>↗</span></a>`).join("");
  $("#emergencyGrid").innerHTML = emergencyServices.map(service => `<article class="card"><h3>${t(service.name)}</h3><p><strong>${l("contact")}:</strong> ${t(service.detail)}</p><p><strong>${l("address")}:</strong> ${t(service.address)}</p><div class="card-actions">${mapButton(service.mapsUrl, service.mapsUrl.startsWith("tel:") ? u("callShort") : u("openMap"))}${copyButton(service.address)}</div></article>`).join("");
}

function renderApartmentInfo() {
  const info = [
    ["Dirección exacta", apartmentInfo.address], ["Cómo llegar", apartmentInfo.howToArrive], ["WiFi", apartmentInfo.wifi], ["Check-in", apartmentInfo.checkIn], ["Check-out reserva directa", apartmentInfo.checkOutDirect], ["Check-out plataforma externa", apartmentInfo.checkOutPlatform], ["Llegada autónoma", "Instrucciones a través del portal del huésped"], ["Capacidad", apartmentInfo.capacity], ["Habitaciones", apartmentInfo.bedrooms], ["Baño", apartmentInfo.bathrooms], ["Cocina", "Cocina equipada"], ["Climatización", "Aire acondicionado y calefacción"], ["Lavadora", "Incluida"], ["Exterior", "Terraza/patio privados y balcón con vistas laterales a la playa"], ["Ropa de cama y toallas", "Incluidas"], ["Normas básicas", "PENDIENTE_DE_COMPLETAR"], ["Basura y reciclaje", "PENDIENTE_DE_COMPLETAR"], ["Aparcamiento", apartmentInfo.parking], ["Contacto Sereno/anfitrión", apartmentInfo.hostContact], ["Gestión", apartmentInfo.managedBy]
  ];
  $("#apartmentInfoGrid").innerHTML = info.map(([label, value]) => `<div class="info-item"><strong>${t(label)}</strong><span>${t(value)}</span>${label.includes("Dirección") ? `<div class="card-actions">${copyButton(value)}</div>` : ""}</div>`).join("");
}

function renderFilterChips(activeFilter = "todos") {
  const filters = ["todos", ...new Set(plans.flatMap(plan => plan.tags))];
  $("#filterChips").innerHTML = filters.map(filter => `<button class="chip ${filter === activeFilter ? "active" : ""}" type="button" data-filter="${filter}">${filter === "todos" ? u("all") : t(filter)}</button>`).join("");
}

function setupFilters() {
  renderFilterChips();
  $("#filterChips").addEventListener("click", event => {
    const chip = event.target.closest(".chip");
    if (!chip) return;
    $$(".chip").forEach(item => item.classList.remove("active"));
    chip.classList.add("active");
    renderPlans(chip.dataset.filter, $("#siteSearch").value);
  });
  $("#siteSearch").addEventListener("input", event => {
    const active = $(".chip.active")?.dataset.filter || "todos";
    renderPlans(active, event.target.value);
  });
}

function setupInteractions() {
  document.addEventListener("click", event => {
    const fav = event.target.closest(".favorite");
    if (fav) {
      const id = fav.dataset.favId;
      const favorites = getFavorites();
      const next = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
      saveFavorites(next);
      $$(`[data-fav-id="${CSS.escape(id)}"]`).forEach(button => {
        const active = next.includes(id);
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
        button.textContent = active ? "★" : "☆";
      });
    }

    const copy = event.target.closest(".copy-address");
    if (copy) {
      const text = copy.dataset.copy;
      navigator.clipboard?.writeText(text).then(() => {
        const feedback = copy.parentElement.querySelector(".copy-feedback");
        if (feedback) feedback.textContent = isPlaceholder(text) ? u("placeholderCopied") : u("addressCopied");
      }).catch(() => {
        const feedback = copy.parentElement.querySelector(".copy-feedback");
        if (feedback) feedback.textContent = u("copyError");
      });
    }
  });

  $(".language-switcher").addEventListener("click", event => {
    const button = event.target.closest("button[data-lang]");
    if (!button || button.dataset.lang === currentLanguage) return;
    currentLanguage = button.dataset.lang;
    localStorage.setItem("vistasMarinasLanguage", currentLanguage);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", currentLanguage);
    history.replaceState(null, "", url);
    applyPageTranslation();
    renderFilterChips();
    renderPlans();
    renderStaticContent();
    renderCards();
    renderApartmentInfo();
    renderDailyRecommendation();
  });

  const navToggle = $(".nav-toggle");
  const navLinks = $("#navLinks");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", event => {
    if (event.target.matches("a")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  const backToTop = $("#backToTop");
  window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 520), {passive:true});
  backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

function renderDailyRecommendation() {
  const today = new Date();
  const recommendation = plans[today.getDate() % plans.length];
  $("#dailyRecommendation").innerHTML = `<h3>${t(recommendation.title)}</h3><p>${t(recommendation.text)}</p><p><strong>${u("why")}:</strong> ${t(recommendation.tip)}</p>`;
}

function init() {
  applyPageTranslation();
  renderStaticContent();
  setupFilters();
  renderPlans();
  renderCards();
  renderApartmentInfo();
  renderDailyRecommendation();
  setupInteractions();
  console.info(`${apartmentInfo.guideName} lista en ${LANGUAGE_LABELS[currentLanguage]}. Nombres alternativos: ${siteNameIdeas.join(" · ")}`);
}

document.addEventListener("DOMContentLoaded", init);
