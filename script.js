// Guía Vistas Marinas Barbate. Edita las estructuras de datos de esta zona para personalizar la guía.
const PLACEHOLDER_MAPS = "PEGAR_AQUI_ENLACE_GOOGLE_MAPS";

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
  whatsappUrl: "PENDIENTE_DE_COMPLETAR",
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
  {title:"Tengo un día completo", tags:["escapada","gastronomía"], text:"Vejer por la mañana, comida con calma y tarde en Zahara de los Atunes.", tip:"Un día redondo de pueblo blanco, playa y buena mesa."},
  {title:"Vengo con niños", tags:["familia","sin coche","playa"], text:"Playa cómoda, paseo marítimo, helado, descanso y cena temprana cerca del alojamiento.", tip:"La cercanía al piso facilita si hay que volver a por algo."},
  {title:"Quiero comer bien", tags:["gastronomía"], text:"Reserva un restaurante de atún rojo, pide platos para compartir y termina con paseo junto al mar.", tip:"En verano, puentes y fines de semana conviene reservar."},
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
  {name:"Zahara de los Atunes", type:"Playa larga y ambiente de verano", tags:["playa","gastronomía","escapada"], distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Comida, paseo y tarde de playa", bestTime:"Mañana o tarde", hostTip:"Funciona muy bien combinada con una reserva para comer.", occupancy:"Alta en verano", kids:"Sí", wind:"Consultar previsión", mapsUrl:PLACEHOLDER_MAPS},
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

const foodCategories = ["Atún rojo de almadraba", "Tapas y comida informal", "Chiringuitos", "Desayunos y meriendas", "Pescado y marisco", "Cena especial", "Compra de producto local", "Para llevar al piso"];
const dishes = ["Atún encebollado", "Tataki de atún", "Tarantelo", "Morrillo", "Ventresca", "Mojama", "Ortiguillas", "Tortillitas de camarones", "Pescado frito", "Conservas de almadraba"];
const restaurants = [
  {name:"Restaurante recomendado 1", category:"Atún rojo", price:"€€€", distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Cena especial", whatToOrder:"Atún rojo de almadraba", bookingUrl:"PEGAR_AQUI_ENLACE_RESERVA_O_TELEFONO", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Restaurante recomendado 2", category:"Tapas cerca del piso", price:"€€", distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Cena sin coche", whatToOrder:"Tapas, pescado frito o producto local", bookingUrl:"PEGAR_AQUI_ENLACE_RESERVA_O_TELEFONO", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Restaurante recomendado 3", category:"Chiringuito", price:"€€", distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Comida informal junto al mar", whatToOrder:"Pescado, ensaladas y platos para compartir", bookingUrl:"PEGAR_AQUI_ENLACE_RESERVA_O_TELEFONO", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Restaurante recomendado 4", category:"Cena especial", price:"€€€", distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Una noche con reserva", whatToOrder:"Producto de temporada", bookingUrl:"PEGAR_AQUI_ENLACE_RESERVA_O_TELEFONO", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Restaurante recomendado 5", category:"Desayuno o merienda", price:"€", distance:"PENDIENTE_DE_COMPLETAR", idealFor:"Café, tostada o dulce antes del paseo", whatToOrder:"Desayuno local o helado", bookingUrl:"PEGAR_AQUI_ENLACE_RESERVA_O_TELEFONO", mapsUrl:PLACEHOLDER_MAPS}
];

const barbateTimeline = [
  {time:"Mañana", steps:["Playa o paseo marítimo", "Café/desayuno", "Mercado o compra local"]},
  {time:"Mediodía", steps:["Comida de atún o pescado", "Reserva si es temporada alta"]},
  {time:"Tarde", steps:["Playa de la Hierbabuena o paseo", "Descanso en la terraza"]},
  {time:"Noche", steps:["Cena cerca", "Vuelta caminando al piso"]}
];

const routes = [
  {name:"Parque Natural de La Breña", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Media según tramo", bestTime:"Mañana o tarde", idealFor:"Pinar, acantilados y vistas", recommendation:"Lleva agua y evita calor fuerte.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Sendero de los Acantilados", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Media", bestTime:"Mañana", idealFor:"Paisaje atlántico y fotos", recommendation:"Respeta señalización y distancia a bordes.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Torre del Tajo", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Media", bestTime:"Atardecer con margen", idealFor:"Mirador natural", recommendation:"Consulta estado del sendero y viento.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Marismas del Barbate", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Baja", bestTime:"Mañana", idealFor:"Paseo tranquilo y observación", recommendation:"Buen plan suave si no quieres playa.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Ruta hacia Caños de Meca", duration:"PENDIENTE_DE_COMPLETAR", difficulty:"Media", bestTime:"Mañana", idealFor:"Naturaleza y final con ambiente", recommendation:"Planifica regreso y agua suficiente.", mapsUrl:PLACEHOLDER_MAPS}
];

const escapes = [
  {name:"Vejer de la Frontera", see:"Calles blancas, miradores, patios, tiendas bonitas y buen ambiente gastronómico.", ideal:"Tarde sin playa o día con viento", time:"Medio día", best:"Tarde", plan:"Paseo por casco histórico, mirador y cena.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Zahara de los Atunes", see:"Playa amplia, restaurantes y ambiente de verano.", ideal:"Combinar comida y tarde junto al mar", time:"Medio día", best:"Comida + tarde", plan:"Reserva para comer y paseo por la playa.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Caños de Meca", see:"Ambiente bohemio, calas y Faro de Trafalgar.", ideal:"Atardecer especial", time:"Tarde", best:"Últimas horas de luz", plan:"Calas, faro y puesta de sol.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Conil", see:"Pueblo marinero, playa y ambiente", ideal:"Paseo y comida informal", time:"Medio día", best:"Mañana o tarde", plan:"Casco urbano, playa y tapas.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Tarifa", see:"Casco histórico, ambiente viajero y playas abiertas", ideal:"Día diferente", time:"Día completo", best:"Día con ganas de moverse", plan:"Paseo, comida y playa si el viento acompaña.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Bolonia", see:"Playa salvaje, duna, paisaje atlántico y ruinas romanas de Baelo Claudia.", ideal:"Excursión memorable", time:"Mañana larga o día", best:"Mañana", plan:"Ruinas, duna, playa y comida sencilla.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Cádiz", see:"Centro histórico, mar, cultura y tapas", ideal:"Plan urbano con historia", time:"Día completo", best:"Día con viento", plan:"Paseo por centro, mercado y atardecer urbano.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Medina Sidonia", see:"Historia, vistas y dulces", ideal:"Ruta interior tranquila", time:"Medio día", best:"Mañana", plan:"Casco histórico, miradores y merienda.", mapsUrl:PLACEHOLDER_MAPS},
  {name:"El Palmar", see:"Playa abierta, surf y ambiente relajado", ideal:"Puesta de sol y paseo", time:"Tarde", best:"Atardecer", plan:"Paseo largo y cena informal.", mapsUrl:PLACEHOLDER_MAPS}
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
  {name:"Puntos de interés", category:"Puntos de interés", address:"PENDIENTE_DE_COMPLETAR", phone:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS}
];

const emergencyServices = [
  {name:"Emergencias", detail:"112", address:"Llamada directa ante urgencia médica o emergencia", mapsUrl:"tel:112"},
  {name:"Centro de salud", detail:"PENDIENTE_DE_COMPLETAR", address:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Farmacias cercanas", detail:"PENDIENTE_DE_COMPLETAR", address:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Policía local", detail:"PENDIENTE_DE_COMPLETAR", address:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Guardia Civil", detail:"PENDIENTE_DE_COMPLETAR", address:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Taxi", detail:"PENDIENTE_DE_COMPLETAR", address:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
  {name:"Hospital de referencia", detail:"PENDIENTE_DE_COMPLETAR", address:"PENDIENTE_DE_COMPLETAR", mapsUrl:PLACEHOLDER_MAPS},
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

function htmlList(items) { return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`; }
function tagsHtml(tags = []) { return `<div class="card-meta">${tags.map(tag => `<span class="pill">${tag}</span>`).join("")}</div>`; }
function favoriteButton(type, name) {
  const id = cardId(type, name);
  const active = getFavorites().includes(id);
  return `<button class="icon-btn favorite ${active ? "active" : ""}" type="button" data-fav-id="${id}" aria-pressed="${active}" aria-label="Guardar ${name} en favoritos">${active ? "★" : "☆"}</button>`;
}
function mapButton(url, label = "Abrir en Google Maps") {
  const href = placeholderHref(url);
  const klass = href === "#" ? "btn placeholder-link" : "btn";
  return `<a class="${klass}" href="${href}" target="_blank" rel="noopener">${label}</a>`;
}
function copyButton(address) {
  if (!address) return "";
  return `<button class="btn copy-address" type="button" data-copy="${address}">Copiar dirección</button><span class="copy-feedback" aria-live="polite"></span>`;
}

function renderStaticContent() {
  $("#apartmentMoments").innerHTML = apartmentMoments.map((text, index) => `<article class="mini-card"><span>${["☕","🌊","🐟","🚶","🧺","🍽️","🚗"][index]}</span><strong>${text}</strong></article>`).join("");
  $("#quickLinks").innerHTML = quickLinks.map(([title, href, text]) => `<a class="quick-card" href="${href}"><strong>${title}</strong><small>${text}</small></a>`).join("");
  $("#noCarItineraries").innerHTML = noCarItineraries.map((item, i) => `<article class="timeline-item"><span>${i + 1}</span><h3>${item.time}</h3>${htmlList(item.steps)}</article>`).join("");
  $("#windGrid").innerHTML = windPlans.map(item => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");
  $("#foodCategories").innerHTML = foodCategories.map(item => `<span>${item}</span>`).join("");
  $("#dishList").innerHTML = dishes.map(item => `<span>${item}</span>`).join("");
  $("#barbateTimeline").innerHTML = barbateTimeline.map((item, i) => `<article class="timeline-item"><span>${i + 1}</span><h3>${item.time}</h3>${htmlList(item.steps)}</article>`).join("");
  $("#specialPlans").innerHTML = specialPlans.map((item, i) => `<article class="card"><h3>${item}</h3><p>${i === 6 || i === 7 ? "Un plan muy conectado con la terraza y el ritmo del alojamiento." : "Completa horarios, reservas o enlaces si quieres convertirlo en una recomendación cerrada."}</p>${favoriteButton("especial", item)}</article>`).join("");
  $("#seasonGrid").innerHTML = seasons.map(item => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");
  $("#hostTips").innerHTML = hostTips.map(tip => `<div class="tip">${tip}</div>`).join("");
  $("#windLink").href = placeholderHref(apartmentInfo.windUrl);
  $("#footerContact").textContent = `Contacto editable: ${apartmentInfo.hostContact}`;
  $("#whatsappButton").href = placeholderHref(apartmentInfo.whatsappUrl);
}

function renderPlans(filter = "todos", query = "") {
  const q = normalize(query);
  const filtered = plans.filter(plan => (filter === "todos" || plan.tags.includes(filter)) && normalize(`${plan.title} ${plan.text} ${plan.tip} ${plan.tags.join(" ")}`).includes(q));
  $("#plansGrid").innerHTML = filtered.map(plan => `<article class="card" data-search="${plan.tags.join(" ")}"><h3>${plan.title}</h3>${tagsHtml(plan.tags)}<p>${plan.text}</p><p><strong>Tip local:</strong> ${plan.tip}</p><div class="card-actions">${favoriteButton("plan", plan.title)}</div></article>`).join("");
  $("#emptyState").hidden = filtered.length > 0;
}

function renderCards() {
  $("#beachesGrid").innerHTML = beaches.map(beach => `<article class="card"><h3>${beach.name}</h3>${tagsHtml(beach.tags)}<p><strong>Tipo:</strong> ${beach.type}</p><p><strong>Distancia:</strong> ${beach.distance}</p><p><strong>Ideal para:</strong> ${beach.idealFor}</p><p><strong>Mejor momento:</strong> ${beach.bestTime}</p><p><strong>Recomendación:</strong> ${beach.hostTip}</p><p><strong>Ocupación:</strong> ${beach.occupancy} · <strong>Niños:</strong> ${beach.kids} · <strong>Viento:</strong> ${beach.wind}</p><div class="card-actions">${mapButton(beach.mapsUrl)}${favoriteButton("playa", beach.name)}</div></article>`).join("");
  $("#restaurantsGrid").innerHTML = restaurants.map(rest => `<article class="card"><h3>${rest.name}</h3>${tagsHtml([rest.category, rest.price])}<p><strong>Ideal para:</strong> ${rest.idealFor}</p><p><strong>Qué pedir:</strong> ${rest.whatToOrder}</p><p><strong>Distancia:</strong> ${rest.distance}</p><div class="card-actions"><a class="btn ${isPlaceholder(rest.bookingUrl) ? "placeholder-link" : ""}" href="${placeholderHref(rest.bookingUrl)}" target="_blank" rel="noopener">Llamar/reservar</a>${mapButton(rest.mapsUrl)}${favoriteButton("restaurante", rest.name)}</div></article>`).join("");
  $("#routesGrid").innerHTML = routes.map(route => `<article class="card"><h3>${route.name}</h3><p><strong>Duración:</strong> ${route.duration}</p><p><strong>Dificultad:</strong> ${route.difficulty}</p><p><strong>Mejor hora:</strong> ${route.bestTime}</p><p><strong>Ideal para:</strong> ${route.idealFor}</p><p><strong>Recomendación:</strong> ${route.recommendation}</p><div class="card-actions">${mapButton(route.mapsUrl, "Maps/Wikiloc")}${favoriteButton("ruta", route.name)}</div></article>`).join("");
  $("#escapesGrid").innerHTML = escapes.map(escape => `<article class="card"><h3>${escape.name}</h3><p><strong>Qué ver:</strong> ${escape.see}</p><p><strong>Ideal para:</strong> ${escape.ideal}</p><p><strong>Tiempo recomendado:</strong> ${escape.time}</p><p><strong>Mejor momento:</strong> ${escape.best}</p><p><strong>Plan sugerido:</strong> ${escape.plan}</p><div class="card-actions">${mapButton(escape.mapsUrl)}${favoriteButton("escapada", escape.name)}</div></article>`).join("");
  $("#servicesGrid").innerHTML = services.map(service => `<a class="map-button ${isPlaceholder(service.mapsUrl) ? "placeholder-link" : ""}" href="${placeholderHref(service.mapsUrl)}" target="_blank" rel="noopener"><span>${service.name}</span><span>↗</span></a>`).join("");
  $("#emergencyGrid").innerHTML = emergencyServices.map(service => `<article class="card"><h3>${service.name}</h3><p><strong>Contacto:</strong> ${service.detail}</p><p><strong>Dirección:</strong> ${service.address}</p><div class="card-actions">${mapButton(service.mapsUrl, service.mapsUrl.startsWith("tel:") ? "Llamar" : "Abrir mapa")}${copyButton(service.address)}</div></article>`).join("");
}

function renderApartmentInfo() {
  const info = [
    ["Dirección exacta", apartmentInfo.address], ["Cómo llegar", apartmentInfo.howToArrive], ["WiFi", apartmentInfo.wifi], ["Check-in", apartmentInfo.checkIn], ["Check-out reserva directa", apartmentInfo.checkOutDirect], ["Check-out plataforma externa", apartmentInfo.checkOutPlatform], ["Llegada autónoma", "Instrucciones a través del portal del huésped"], ["Capacidad", apartmentInfo.capacity], ["Habitaciones", apartmentInfo.bedrooms], ["Baño", apartmentInfo.bathrooms], ["Cocina", "Cocina equipada"], ["Climatización", "Aire acondicionado y calefacción"], ["Lavadora", "Incluida"], ["Exterior", "Terraza/patio privados y balcón con vistas laterales a la playa"], ["Ropa de cama y toallas", "Incluidas"], ["Normas básicas", "PENDIENTE_DE_COMPLETAR"], ["Basura y reciclaje", "PENDIENTE_DE_COMPLETAR"], ["Aparcamiento", apartmentInfo.parking], ["Contacto Sereno/anfitrión", apartmentInfo.hostContact], ["Gestión", apartmentInfo.managedBy]
  ];
  $("#apartmentInfoGrid").innerHTML = info.map(([label, value]) => `<div class="info-item"><strong>${label}</strong><span>${value}</span>${label.includes("Dirección") ? `<div class="card-actions">${copyButton(value)}</div>` : ""}</div>`).join("");
}

function setupFilters() {
  const filters = ["todos", ...new Set(plans.flatMap(plan => plan.tags))];
  $("#filterChips").innerHTML = filters.map((filter, index) => `<button class="chip ${index === 0 ? "active" : ""}" type="button" data-filter="${filter}">${filter}</button>`).join("");
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
        if (feedback) feedback.textContent = isPlaceholder(text) ? "Placeholder copiado para editar" : "Dirección copiada";
      }).catch(() => {
        const feedback = copy.parentElement.querySelector(".copy-feedback");
        if (feedback) feedback.textContent = "No se pudo copiar automáticamente";
      });
    }
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
  $("#dailyRecommendation").innerHTML = `<h3>${recommendation.title}</h3><p>${recommendation.text}</p><p><strong>Por qué funciona:</strong> ${recommendation.tip}</p>`;
}

function init() {
  renderStaticContent();
  setupFilters();
  renderPlans();
  renderCards();
  renderApartmentInfo();
  renderDailyRecommendation();
  setupInteractions();
  console.info(`${apartmentInfo.guideName} lista. Nombres alternativos: ${siteNameIdeas.join(" · ")}`);
}

document.addEventListener("DOMContentLoaded", init);
