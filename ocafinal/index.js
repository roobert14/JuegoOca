const tablero = [
  { casilla: 0, fichas: { J1: { x: 36, y: 650 }, J2: { x: 80, y: 650 } } },
  { casilla: 1, fichas: { J1: { x: 40, y: 570 }, J2: { x: 40, y: 570 } } },
  { casilla: 2, fichas: { J1: { x: 61, y: 496 }, J2: { x: 61, y: 496 } } },
  { casilla: 3, fichas: { J1: { x: 75, y: 392 }, J2: { x: 75, y: 392 } } },
  { casilla: 4, fichas: { J1: { x: 88, y: 306 }, J2: { x: 88, y: 306 } } },
  { casilla: 5, fichas: { J1: { x: 103, y: 207 }, J2: { x: 103, y: 207 } } },
  { casilla: 6, fichas: { J1: { x: 112, y: 117 }, J2: { x: 112, y: 117 } } },
  { casilla: 7, fichas: { J1: { x: 267, y: 98 }, J2: { x: 267, y: 98 } } },
  { casilla: 8, fichas: { J1: { x: 366, y: 107 }, J2: { x: 366, y: 107 } } },
  { casilla: 9, fichas: { J1: { x: 475, y: 109 }, J2: { x: 475, y: 109 } } },
  { casilla: 10, fichas: { J1: { x: 598, y: 114 }, J2: { x: 598, y: 114 } } },
  { casilla: 11, fichas: { J1: { x: 686, y: 105 }, J2: { x: 686, y: 105 } } },
  { casilla: 12, fichas: { J1: { x: 839, y: 114 }, J2: { x: 839, y: 114 } } },
  { casilla: 13, fichas: { J1: { x: 822, y: 215 }, J2: { x: 822, y: 215 } } },
  { casilla: 14, fichas: { J1: { x: 823, y: 316 }, J2: { x: 823, y: 316 } } },
  { casilla: 15, fichas: { J1: { x: 842, y: 446 }, J2: { x: 842, y: 446 } } },
  { casilla: 16, fichas: { J1: { x: 852, y: 592 }, J2: { x: 852, y: 592 } } },
  { casilla: 17, fichas: { J1: { x: 720, y: 593 }, J2: { x: 720, y: 593 } } },
  { casilla: 18, fichas: { J1: { x: 720, y: 593 }, J2: { x: 720, y: 593 } } },
  { casilla: 19, fichas: { J1: { x: 396, y: 587 }, J2: { x: 396, y: 587 } } },
  { casilla: 20, fichas: { J1: { x: 248, y: 577 }, J2: { x: 248, y: 577 } } },
  { casilla: 21, fichas: { J1: { x: 207, y: 486 }, J2: { x: 207, y: 486 } } },
  { casilla: 22, fichas: { J1: { x: 228, y: 361 }, J2: { x: 228, y: 361 } } },
  { casilla: 23, fichas: { J1: { x: 232, y: 238 }, J2: { x: 232, y: 238 } } },
  { casilla: 24, fichas: { J1: { x: 349, y: 217 }, J2: { x: 349, y: 217 } } },
  { casilla: 25, fichas: { J1: { x: 471, y: 216 }, J2: { x: 471, y: 216 } } },
  { casilla: 26, fichas: { J1: { x: 569, y: 217 }, J2: { x: 569, y: 217 } } },
  { casilla: 27, fichas: { J1: { x: 699, y: 210 }, J2: { x: 699, y: 210 } } },
  { casilla: 28, fichas: { J1: { x: 696, y: 285 }, J2: { x: 696, y: 285 } } },
  { casilla: 29, fichas: { J1: { x: 692, y: 347 }, J2: { x: 692, y: 347 } } },
  { casilla: 30, fichas: { J1: { x: 709, y: 463 }, J2: { x: 709, y: 463 } } },
  { casilla: 31, fichas: { J1: { x: 563, y: 442 }, J2: { x: 563, y: 442 } } },
  { casilla: 32, fichas: { J1: { x: 457, y: 448 }, J2: { x: 457, y: 448 } } },
  { casilla: 33, fichas: { J1: { x: 354, y: 441 }, J2: { x: 354, y: 441 } } },
  { casilla: 34, fichas: { J1: { x: 353, y: 332 }, J2: { x: 353, y: 332 } } },
  { casilla: 35, fichas: { J1: { x: 462, y: 329 }, J2: { x: 462, y: 329 } } },
  { casilla: 36, fichas: { J1: { x: 561, y: 330 }, J2: { x: 561, y: 330 } } }
];

const preguntas = [
  // Cultura general
  { id: 1, categoria: "Cultura general", pregunta: "¿Cuál es la capital de Australia?", respuesta: "Canberra" },
  { id: 2, categoria: "Cultura general", pregunta: "¿Cuántos lados tiene un hexágono?", respuesta: "6" },
  { id: 3, categoria: "Cultura general", pregunta: "¿Cuál es el océano más grande del mundo?", respuesta: "Océano Pacifico" },
  { id: 4, categoria: "Cultura general", pregunta: "¿Cuántos días tiene un año bisiesto?", respuesta: "366" },
  { id: 5, categoria: "Cultura general", pregunta: "¿Cuál es el idioma con más hablantes nativos?", respuesta: "Chino mandarin" },
  // Ciencia
  { id: 6, categoria: "Ciencia", pregunta: "¿Cuál es el símbolo químico del oro?", respuesta: "Au" },
  { id: 7, categoria: "Ciencia", pregunta: "¿Qué planeta es conocido como el planeta rojo?", respuesta: "Marte" },
  { id: 8, categoria: "Ciencia", pregunta: "¿Cuál es la velocidad aproximada de la luz en el vacío?", respuesta: "300.000 km/s" },
  { id: 9, categoria: "Ciencia", pregunta: "¿Qué gas absorben las plantas durante la fotosíntesis?", respuesta: "Dioxido de carbono" },
  { id: 10, categoria: "Ciencia", pregunta: "¿Cuál es el hueso más largo del cuerpo humano?", respuesta: "Femur" },
  // Historia
  { id: 11, categoria: "Historia", pregunta: "¿En qué año llegó Cristóbal Colón a América?", respuesta: "1492" },
  { id: 12, categoria: "Historia", pregunta: "¿Quién fue el primer emperador romano?", respuesta: "Augusto" },
  { id: 13, categoria: "Historia", pregunta: "¿En qué año cayó el Muro de Berlín?", respuesta: "1989" },
  // Geografía
  { id: 16, categoria: "Geografía", pregunta: "¿Cuál es el país más grande del mundo por superficie?", respuesta: "Rusia" },
  { id: 17, categoria: "Geografía", pregunta: "¿En qué continente se encuentra Egipto?", respuesta: "Africa" },
  { id: 18, categoria: "Geografía", pregunta: "¿Cuál es la montaña más alta del mundo sobre el nivel del mar?", respuesta: "Monte Everest" },
  { id: 19, categoria: "Geografía", pregunta: "¿Qué río atraviesa París?", respuesta: "El Sena" },
  { id: 20, categoria: "Geografía", pregunta: "¿Cuál es la capital de Japón?", respuesta: "Tokio" },
  // Tecnología
  { id: 21, categoria: "Tecnología", pregunta: "¿Qué significan las siglas CPU?", respuesta: "Unidad Central de Procesamiento" },
  { id: 22, categoria: "Tecnología", pregunta: "¿Quién fundó Microsoft junto con Paul Allen?", respuesta: "Bill Gates" },
  { id: 23, categoria: "Tecnología", pregunta: "¿Qué lenguaje se utiliza para estructurar páginas web?", respuesta: "HTML" },
  { id: 25, categoria: "Tecnología", pregunta: "¿Qué significa la sigla IA?", respuesta: "Inteligencia artificial" },
  // Deportes
  { id: 26, categoria: "Deportes", pregunta: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?", respuesta: "11" },
  { id: 27, categoria: "Deportes", pregunta: "¿Cada cuántos años se celebran los Juegos Olímpicos de verano?", respuesta: "Cada 4 años" },
  { id: 28, categoria: "Deportes", pregunta: "¿En qué deporte se utiliza una raqueta y un volante?", respuesta: "Badminton" },
  { id: 29, categoria: "Deportes", pregunta: "¿Cuántos puntos vale un triple en baloncesto?", respuesta: "3 puntos" },
  { id: 30, categoria: "Deportes", pregunta: "¿En qué país se originó el judo?", respuesta: "Japon" },
  // Cine y televisión
  { id: 31, categoria: "Cine", pregunta: "¿Quién dirigió la película Titanic de 1997?", respuesta: "James Cameron" },
  { id: 32, categoria: "Cine", pregunta: "¿Cómo se llama la escuela de magia de Harry Potter?", respuesta: "Hogwarts" },
  { id: 33, categoria: "Cine", pregunta: "¿Qué película tiene como protagonista a un robot llamado WALL-E?", respuesta: "WALL-E" },
  { id: 34, categoria: "Cine", pregunta: "¿Cómo se llama el reino ficticio de Black Panther?", respuesta: "Wakanda" },
  { id: 35, categoria: "Televisión", pregunta: "¿Qué serie está ambientada en el mundo ficticio de Poniente?", respuesta: "Juego de tronos" },
  // Música
  { id: 36, categoria: "Música", pregunta: "¿Cuántas notas tiene la escala diatónica?", respuesta: "7" },
  { id: 37, categoria: "Música", pregunta: "¿Qué instrumento musical tiene normalmente 88 teclas?", respuesta: "El piano" },
  { id: 38, categoria: "Música", pregunta: "¿Quién compuso la Novena Sinfonía?", respuesta: "Ludwig van Beethoven" },
  { id: 39, categoria: "Música", pregunta: "¿Qué género musical se asocia con Bob Marley?", respuesta: "Reggae" },
  { id: 40, categoria: "Música", pregunta: "¿Cuántas cuerdas tiene normalmente un violín?", respuesta: "4" },
  // Literatura
  { id: 41, categoria: "Literatura", pregunta: "¿Quién escribió Don Quijote de la Mancha?", respuesta: "Miguel de Cervantes" },
  { id: 42, categoria: "Literatura", pregunta: "¿Quién es el autor de Cien años de soledad?", respuesta: "Gabriel Garcia Márquez" },
  { id: 43, categoria: "Literatura", pregunta: "¿Cómo se llama el detective creado por Arthur Conan Doyle?", respuesta: "Sherlock Holmes" },
  { id: 44, categoria: "Literatura", pregunta: "¿Quién escribió Romeo y Julieta?", respuesta: "William Shakespeare" },
  // Matemáticas
  { id: 46, categoria: "Matemáticas", pregunta: "¿Cuánto es 12 multiplicado por 12?", respuesta: "144" },
  { id: 47, categoria: "Matemáticas", pregunta: "¿Cuál es la raíz cuadrada de 144?", respuesta: "12" },
  { id: 48, categoria: "Matemáticas", pregunta: "¿Cuántos grados tiene un ángulo recto?", respuesta: "90 grados" },
  { id: 49, categoria: "Matemáticas", pregunta: "¿Qué número primo viene después del 7?", respuesta: "11" },
  { id: 50, categoria: "Matemáticas", pregunta: "¿Cuál es el resultado de elevar 2 al cubo?", respuesta: "8" },
  // Naturaleza y animales
  { id: 51, categoria: "Naturaleza", pregunta: "¿Cuál es el animal terrestre más rápido?", respuesta: "El guepardo" },
  { id: 52, categoria: "Naturaleza", pregunta: "¿Qué mamífero pone huevos y tiene un pico parecido al de un pato?", respuesta: "El ornitorrinco" },
  { id: 53, categoria: "Naturaleza", pregunta: "¿Cuántas patas tiene una araña?", respuesta: "8" },
  { id: 54, categoria: "Naturaleza", pregunta: "¿Cuál es el animal más grande del planeta?", respuesta: "La ballena azul" },
  { id: 55, categoria: "Naturaleza", pregunta: "¿Cómo se llama el proceso por el que una oruga se transforma en mariposa?", respuesta: "Metamorfosis" },
  // Astronomía
  { id: 56, categoria: "Astronomía", pregunta: "¿Cuál es el planeta más cercano al Sol?", respuesta: "Mercurio" },
  { id: 57, categoria: "Astronomía", pregunta: "¿Qué estrella está en el centro del sistema solar?", respuesta: "El Sol" },
  { id: 58, categoria: "Astronomía", pregunta: "¿Cómo se llama la galaxia en la que se encuentra la Tierra?", respuesta: "La Vía Láctea" },
  { id: 59, categoria: "Astronomía", pregunta: "¿Qué planeta es famoso por sus grandes anillos?", respuesta: "Saturno" },
  { id: 60, categoria: "Astronomía", pregunta: "¿Cómo se llama el satélite natural de la Tierra?", respuesta: "La Luna" },
  // Gastronomía
  { id: 61, categoria: "Gastronomía", pregunta: "¿Cuál es el ingrediente principal del guacamole tradicional?", respuesta: "Aguacate" },
  { id: 62, categoria: "Gastronomía", pregunta: "¿De qué país es originaria la pizza moderna?", respuesta: "Italia" },
  { id: 63, categoria: "Gastronomía", pregunta: "¿Qué ingrediente se utiliza para elaborar el tofu?", respuesta: "Soja" },
  { id: 64, categoria: "Gastronomía", pregunta: "¿Cuál es el ingrediente principal del hummus tradicional?", respuesta: "Garbanzos" },
  { id: 65, categoria: "Gastronomía", pregunta: "¿Qué tipo de pasta italiana tiene forma de pequeños tubos?", respuesta: "Macarrones" },
  // Arte
  { id: 66, categoria: "Arte", pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "Leonardo da Vinci" },
  { id: 67, categoria: "Arte", pregunta: "¿Qué pintor español creó el Guernica?", respuesta: "Pablo Picasso" },
  { id: 68, categoria: "Arte", pregunta: "¿Qué artista es conocido por sus pinturas de relojes derretidos?", respuesta: "Salvador Dalí" },
  { id: 69, categoria: "Arte", pregunta: "¿Cómo se llama la técnica artística que crea imágenes con pequeñas piezas de colores?", respuesta: "Mosaico" },
  { id: 70, categoria: "Arte", pregunta: "¿En qué ciudad se encuentra el Museo del Louvre?", respuesta: "París" },
  { id: 72, categoria: "Psicología", pregunta: "¿Cómo se llama la capacidad de comprender las emociones de otras personas?", respuesta: "Empatia" },
  { id: 73, categoria: "Psicología", pregunta: "¿Qué emoción se suele asociar con una amenaza percibida?", respuesta: "Miedo" },
  // Medio ambiente
  { id: 86, categoria: "Medio ambiente", pregunta: "¿Qué es el cambio climático?", respuesta: "Una alteración duradera de los patrones climaticos" },
  { id: 87, categoria: "Medio ambiente", pregunta: "¿Qué gas emitido por actividades humanas contribuye significativamente al calentamiento global?", respuesta: "Dioxido de carbono" },
  { id: 88, categoria: "Medio ambiente", pregunta: "¿Qué significa reciclar?", respuesta: "Transformar residuos en materiales o productos que puedan volver a utilizarse" },
  { id: 89, categoria: "Medio ambiente", pregunta: "¿Qué tipo de energía se obtiene del viento?", respuesta: "Energía eolica" },
  { id: 90, categoria: "Medio ambiente", pregunta: "¿Qué es la biodiversidad?", respuesta: "La variedad de seres vivos, sus genes y los ecosistemas" },
  // Salud y cuerpo humano
  { id: 91, categoria: "Salud", pregunta: "¿Cuál es el órgano encargado de bombear la sangre?", respuesta: "El corazón" },
  { id: 92, categoria: "Salud", pregunta: "¿Cuántos pulmones tiene normalmente una persona?", respuesta: "2" },
  { id: 93, categoria: "Salud", pregunta: "¿Qué vitamina puede producir la piel con ayuda de la luz solar?", respuesta: "Vitamina D" },
  { id: 94, categoria: "Salud", pregunta: "¿Qué órganos filtran la sangre y producen orina?", respuesta: "Los riñones" },
  { id: 95, categoria: "Salud", pregunta: "¿Cuál es la función principal de los glóbulos rojos?", respuesta: "Transportar oxígeno por el cuerpo mediante la hemoglobina" },
  // Videojuegos
  { id: 96, categoria: "Videojuegos", pregunta: "¿Cómo se llama el fontanero protagonista de Super Mario?", respuesta: "Mario" },
  { id: 97, categoria: "Videojuegos", pregunta: "¿Qué empresa creó originalmente Minecraft?", respuesta: "Mojang" },
  { id: 98, categoria: "Videojuegos", pregunta: "¿En qué saga aparece el personaje Master Chief?", respuesta: "Halo" },
  { id: 99, categoria: "Videojuegos", pregunta: "¿Cómo se llama la moneda habitual de la saga Pokémon?", respuesta: "Pokedólares" },
  { id: 100, categoria: "Videojuegos", pregunta: "¿Qué género de videojuego es Fortnite?", respuesta: "Battle royale" }
];

const ficha1 = document.querySelector("#ficha1");
const ficha2 = document.querySelector("#ficha2");
const btnDado = document.querySelector("#btn-dado");
const resultadoDado = document.querySelector("#resultado-dado");
const indicadorTurno = document.querySelector("#indicador-turno");

const estadoJuego = { J1: { casilla: 0 }, J2: { casilla: 0 } };
let turnoActual = "J1";
let enMovimiento = false;


function normalizarTexto(texto) {
  return texto.trim().toLowerCase().normalize("NFD");
}


function moverFicha(jugador, numCasilla) {
  const datosCasilla = tablero.find((c) => c.casilla === numCasilla);
  if (!datosCasilla) return;
  const elementoFicha = jugador === "J1" ? ficha1 : ficha2;
  const coords = datosCasilla.fichas[jugador];
  elementoFicha.style.left = `${coords.x}px`;
  elementoFicha.style.top = `${coords.y}px`;
}


function moverPasoAPaso(jugador, pasos) {
  enMovimiento = true;
  let pasosRestantes = pasos;

  const intervalo = setInterval(() => {
    if (pasosRestantes > 0 && estadoJuego[jugador].casilla < 36) {
      estadoJuego[jugador].casilla++;
      moverFicha(jugador, estadoJuego[jugador].casilla);
      pasosRestantes--;
    } else {
      clearInterval(intervalo);
      const casillaActual = estadoJuego[jugador].casilla;

      // Casillas especiales
      if (casillaActual === 2) {
        alert("¡Casilla especial! Avanzas a la casilla 21.");
        estadoJuego[jugador].casilla = 21;
        moverFicha(jugador, 21);
      } else if (casillaActual === 7) {
        alert("¡Casilla especial! Avanzas a la casilla 11.");
        estadoJuego[jugador].casilla = 11;
        moverFicha(jugador, 11);
      } else if (casillaActual === 12) {
        alert("¡Casilla especial! Vuelves al inicio.");
        estadoJuego[jugador].casilla = 0;
        moverFicha(jugador, 0);
      } else if (casillaActual === 14) {
        alert("¡Casilla especial! Avanzas a la casilla 29.");
        estadoJuego[jugador].casilla = 29;
        moverFicha(jugador, 29);
      } else if (casillaActual === 22) {
        alert("¡Casilla especial! Avanzas 2 casillas extra.");
        enMovimiento = false;
        moverPasoAPaso(jugador, 2);
        return;
      } else if (casillaActual === 25) {
        alert("¡Casilla especial! Retrocedes a la casilla 9.");
        estadoJuego[jugador].casilla = 9;
        moverFicha(jugador, 9);
      } else if (casillaActual === 30) {
        alert("¡Casilla especial! Retrocedes a la casilla 27.");
        estadoJuego[jugador].casilla = 27;
        moverFicha(jugador, 27);
      } else if (casillaActual === 33) {
        alert("¡Casilla especial! Retrocedes a la casilla 20.");
        estadoJuego[jugador].casilla = 20;
        moverFicha(jugador, 20);
      }


      if (estadoJuego[jugador].casilla === 36) {
        alert(`¡Ganó el ${jugador}! 🎉`);
        enMovimiento = false;
        return;
      }


      hacerPreguntaPorAlert();

      turnoActual = turnoActual === "J1" ? "J2" : "J1";
      indicadorTurno.textContent = turnoActual;
      enMovimiento = false;
    }
  }, 300);
}


function hacerPreguntaPorAlert() {
  const indiceAzar = Math.floor(Math.random() * preguntas.length);
  const preguntaActual = preguntas[indiceAzar];

  const respuestaUsuario = prompt(
    `[Turno ${turnoActual}]\n\nCategoría: ${preguntaActual.categoria}\nPregunta: ${preguntaActual.pregunta}`
  );

  if (respuestaUsuario === null || respuestaUsuario.trim() === "") {
    alert(`❌ No respondiste a la pregunta. La Ficha ${turnoActual} retrocede 1 casilla.\n\nRespuesta esperada: ${preguntaActual.respuesta}`);
    if (estadoJuego[turnoActual].casilla > 0) {
      estadoJuego[turnoActual].casilla--;
      moverFicha(turnoActual, estadoJuego[turnoActual].casilla);
    }
    return;
  }

  const respUserNorm = normalizarTexto(respuestaUsuario);
  const respCorrectaNorm = normalizarTexto(preguntaActual.respuesta);

  if (respUserNorm !== "" && respCorrectaNorm.includes(respUserNorm)) {
    alert("¡Correcto! Te mantienes en tu casilla.");
  } else {
    alert(`❌ Respuesta incorrecta. La Ficha ${turnoActual} retrocede 1 casilla.\n\nRespuesta esperada: ${preguntaActual.respuesta}`);
    if (estadoJuego[turnoActual].casilla > 0) {
      estadoJuego[turnoActual].casilla--;
      moverFicha(turnoActual, estadoJuego[turnoActual].casilla);
    }
  }
}


function tirarDado() {
  if (enMovimiento) return;
  const valor = Math.floor(Math.random() * 6) + 1;
  resultadoDado.textContent = valor;
  moverPasoAPaso(turnoActual, valor);
}


btnDado.addEventListener("click", tirarDado);
moverFicha("J1", 0);
moverFicha("J2", 0);