let nomJugador = 'Robert';
const MAX_TIRADES = 10;
document.querySelector('#nombre').innerHTML = "Jugador: " + nomJugador;

function sumar(a, b) {
    return a + b;
}

const multiplicar = (a, b) => a * b;

document.querySelector("#sumar").addEventListener("click", function() {
    document.querySelector('#resultado').innerHTML = sumar(1, 2);
});

document.querySelector("#multi").addEventListener("click", function() {
    document.querySelector('#resultado2').innerHTML = multiplicar(1, 2);
});


document.querySelector("#conf").addEventListener("click", function() {
    let num = document.querySelector("#numeroo").value;
    let divError = document.querySelector("#numeroo2");
    let divTabla = document.querySelector("#tabla");

    if (num < 0) {
        divError.innerHTML = "El número ha de ser més gran que 0";
        divTabla.innerHTML = "";
    } else if (num <= 10) {
        divError.innerHTML = "";
        divTabla.innerHTML = "";
        for (let i = 0; i <= 10; i++) {
            divTabla.innerHTML += num + " x " + i + " = " + (num * i) + "<br>";
        }
    } else {
        divError.innerHTML = "El número ha de ser més petit que 11";
        divTabla.innerHTML = "";
    }
});


document.querySelector("#nom_send").addEventListener("click", function(e) {
    e.preventDefault();
    let nomInput = document.querySelector("#nom").value;
    if (nomInput !== "") {
        nomJugador = nomInput.toUpperCase();
        document.querySelector("#nombre").textContent = "Jugador 1: " + nomJugador;
        partida.jugadors[0].nom = nomJugador;
        mostrarJSON();
    }
});


let avui = new Date();
let dia = avui.getDate();
let mes = avui.getMonth() + 1;
let any = avui.getFullYear();
let dataPartida = dia + "/" + mes + "/" + any;

let elemFecha = document.querySelector("#fecha");
if (elemFecha) {
    elemFecha.textContent = "Partida iniciada: " + dataPartida;
}

let partida = {
    torn: "A",
    jugadors: [
        { nom: nomJugador, posicio: 0 },
        { nom: "Jugador B", posicio: 0 }
    ],
    guanyador: null,
    ultimaTirada: null
};

function mostrarJSON() {
    let panel = document.getElementById("panel-json");
    if (panel) {
        panel.textContent = JSON.stringify(partida, null, 2);
    }
}
mostrarJSON();


const tableroPosiciones = [
    { casilla: 0, fichas: { A: { x: 0, y: 0 }, B: { x: 20, y: 0 } } },
    { casilla: 1, fichas: { A: { x: 60, y: 0 }, B: { x: 80, y: 0 } } },
    { casilla: 2, fichas: { A: { x: 100, y: 0 }, B: { x: 120, y: 0 } } },
    { casilla: 3, fichas: { A: { x: 140, y: 0 }, B: { x: 160, y: 0 } } }
];


function comprovarCasellaEspecial(pos) {
    if (pos === 4) {
        console.log("Avança a la casella 9!");
        return 9;
    } else if (pos === 11) {
        console.log("Tornes a la sortida!");
        return 0;
    } else if (pos === 16) {
        console.log("Perds el torn!");
        return 16;
    }
    return pos;
}


const casellesNoms = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];
const tirarDau = () => Math.floor(Math.random() * 6) + 1;

document.querySelector("#dau").addEventListener("click", function() {
    if (partida.guanyador !== null) return;

    let dau = tirarDau();
    partida.ultimaTirada = dau;

    
    let nomCasella = casellesNoms[dau] || "Camí";
    document.querySelector('#lugar').innerHTML = "Has caigut a: " + nomCasella;

    
    let jugadorActual = (partida.torn === "A") ? partida.jugadors[0] : partida.jugadors[1];
    jugadorActual.posicio += dau;

    
    jugadorActual.posicio = comprovarCasellaEspecial(jugadorActual.posicio);

    
    document.querySelector('#dau_text').innerHTML = `Jugador ${jugadorActual.nom} ha tret ${dau}`;

    
    partida.torn = (partida.torn === "A") ? "B" : "A";
    document.querySelector('#turnA').innerHTML = "Torn del jugador " + partida.torn;

    
    posicion = partida.jugadors[0].posicio;
    dibujarTablero();
    mostrarJSON();
});


let preguntas = [
    { preguntas: "¿Cuál es el río más largo del mundo?", respuestas: ["Nilo", "Amazonas", "Misisipi"], correcta: "Amazonas" },
    { preguntas: "¿En qué año llegó el ser humano a la Luna?", respuestas: ["1969", "1975", "1961"], correcta: "1969" },
    { preguntas: "¿Quién pintó La noche estrellada?", respuestas: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet"], correcta: "Vincent van Gogh" }
];

let indicePregunta = 0;
let mostrar = document.querySelector("#preguntass");
let resultat = document.querySelector(".resultado");

function cargarPregunta() {
    resultat.innerHTML = "";
    if (indicePregunta < preguntas.length) {
        mostrar.innerHTML = "<h3>" + preguntas[indicePregunta].preguntas + "</h3>";
        for (let i = 0; i < preguntas[indicePregunta].respuestas.length; i++) {
            let resp = preguntas[indicePregunta].respuestas[i];
            mostrar.innerHTML += `<button onclick="comprovar('${resp}')">${resp}</button>`;
        }
    } else {
        mostrar.innerHTML = "<h3>¡Has completat totes les preguntes!</h3>";
    }
}

document.querySelector("#mostrar_pregunta").addEventListener("click", function(e) {
    e.preventDefault();
    cargarPregunta();
});

document.querySelector("#siguiente_pregunta").addEventListener("click", function(e) {
    e.preventDefault();
    indicePregunta++;
    cargarPregunta();
});

function comprovar(resposta) {
    if (resposta === preguntas[indicePregunta].correcta) {
        resultat.innerHTML = "Correcte!";
    } else {
        resultat.innerHTML = "Incorrecte";
    }
}


let posicion = 0;

function dibujarTablero() {
    let html = "";
    for (let i = 0; i <= 36; i++) {
        if (i === posicion) {
            html += "<button style='background:lightgreen; width:50px; height:50px;'>🎲</button>";
        } else {
            html += "<button style='width:50px; height:50px;'>" + i + "</button>";
        }
        if ((i + 1) % 7 === 0) html += "<br>";
    }
    document.querySelector("#tablero").innerHTML = html;
    document.querySelector("#posicion").textContent = posicion;
}

document.querySelector("#adelante").addEventListener("click", function() {
    if (posicion < 20) {
        posicion++;
        posicion = comprovarCasellaEspecial(posicion);
        partida.jugadors[0].posicio = posicion;
    }
    dibujarTablero();
    mostrarJSON();
});

document.querySelector("#atras").addEventListener("click", function() {
    if (posicion > 0) {
        posicion--;
        partida.jugadors[0].posicio = posicion;
    }
    dibujarTablero();
    mostrarJSON();
});


dibujarTablero();