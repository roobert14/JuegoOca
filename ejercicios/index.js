console.log("Hola Mundo");

let nomJugador = 'Robert';
const MAX_TIRADES = 0;

document.querySelector('#nombre').innerHTML = nomJugador;

function sumar(a, b) {
    return a + b;
}

document.querySelector("#sumar").addEventListener("click", function(e) {
    e.preventDefault();
    let resultado = sumar(1, 2);
    document.querySelector('#resultado').innerHTML = resultado;
});

function multi(a, b) {
    return a * b;
}

document.querySelector("#multi").addEventListener("click", function(e) {
    e.preventDefault();
    let resultado2 = multi(1, 2);
    document.querySelector('#resultado2').innerHTML = resultado2;
});

document.querySelector("#conf").addEventListener("click", function() {
    let numeroo = document.querySelector("#numeroo").value;
    console.log(numeroo);
    if(numeroo<0){
         document.querySelector("#numeroo2").innerHTML = "El numero ha de ser mes gran que 0";
    }else if(numeroo<11){
            document.querySelector("#numeroo2").innerHTML = "";
            for(let b = 0; b<=10; b++){
                let res = numeroo * b;
                document.querySelector("#tabla").innerHTML += numeroo +  "x" + b  + "=" + res + "<br>";
            }         
    }else{
        document.querySelector("#numeroo2").innerHTML = "El número ha de ser més petit que 11";
    }
    
});

let estat = "inici";

document.querySelector("#inici").addEventListener("click", function() {
    estat = "inici";

    switch (estat) {
        case "inici":
            console.log("El joc està començant");
            break;
        case "turnoA":
            console.log("És el torn del jugador A");
            break;
        case "turnoB":
            console.log("És el torn del jugador B");
            break;
        case "final":
            console.log("El joc ha finalitzat");
            break;
    }
});

document.querySelector("#turnoA").addEventListener("click", function() {
    estat = "turnoA";

    switch (estat) {
        case "inici":
            console.log("El joc està començant");
            break;
        case "turnoA":
            console.log("És el torn del jugador A");
            break;
        case "turnoB":
            console.log("És el torn del jugador B");
            break;
        case "final":
            console.log("El joc ha finalitzat");
            break;
    }
});

document.querySelector("#turnoB").addEventListener("click", function() {
    estat = "turnoB";

    switch (estat) {
        case "inici":
            console.log("El joc està començant");
            break;
        case "turnoA":
            console.log("És el torn del jugador A");
            break;
        case "turnoB":
            console.log("És el torn del jugador B");
            break;
        case "final":
            console.log("El joc ha finalitzat");
            break;
    }
});

document.querySelector("#final").addEventListener("click", function() {
    estat = "final";

    switch (estat) {
        case "inici":
            console.log("El joc està començant");
            break;
        case "turnoA":
            console.log("És el torn del jugador A");
            break;
        case "turnoB":
            console.log("És el torn del jugador B");
            break;
        case "final":
            console.log("El joc ha finalitzat");
            break;
    }
});

document.querySelector("#nombre").textContent = "Pepe"
document.querySelector("#nombre").classList.add("tabla");

document.querySelector("#dau").addEventListener("click", function() {
    let dau = Math.floor(Math.random() * 6) + 1;
        switch(estat){
            case "turnoA":
                document.querySelector('#dau_text').innerHTML = "Jugador A ha tret" + " " +  dau;
                 document.querySelector('#turnA').innerHTML = "Torn del jugador B";
                break;
            case "turnoB":
                document.querySelector('#dau_text').innerHTML = "Jugador B ha tret" + " " +  dau;
                document.querySelector('#turnA').innerHTML = "Torn del jugador A";
                break;
        }
        const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];
        const tirada = dau;
        const nomCasella = caselles[tirada];
        console.log(nomCasella);
        document.querySelector('#lugar').innerHTML =  "Has caigut a:" + " " + nomCasella;

});

document.querySelector("#nom_send").addEventListener("click", function(e) {
    e.preventDefault();
    let nom = document.querySelector("#nom").value;
    document.querySelector("#nombre").textContent = "Jugador 1:" + nom;
});

let preguntas = [
    {
        preguntas: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Nilo", "Amazonas", "Misisipi"],
        correcta: "Amazonas"
    },
    {
        preguntas: "¿En qué año llegó el ser humano a la Luna?",
        respuestas: ["1969", "1975", "1961"],
        correcta: "1969"
    },
    {
        preguntas: "¿Quién pintó La noche estrellada?",
        respuestas: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correcta: "Vincent van Gogh"
    },
    {
        preguntas: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Saturno", "Júpiter", "Neptuno"],
        correcta: "Júpiter"
    },
    {
        preguntas: "¿Cuál es el océano más grande de la Tierra?",
        respuestas: ["Atlántico", "Índico", "Pacífico"],
        correcta: "Pacífico"
    },
    {
        preguntas: "¿A qué país pertenece la isla de Groenlandia?",
        respuestas: ["Dinamarca", "Canadá", "Noruega"],
        correcta: "Dinamarca"
    },
    {
        preguntas: "¿Cuál es el hueso más largo del cuerpo humano?",
        respuestas: ["Fémur", "Tibia", "Húmero"],
        correcta: "Fémur"
    }
];


let mostrar = document.querySelector("#preguntass");
let resultat = document.querySelector(".resultado"); 


let indicePregunta = 0;


function cargarPregunta() {
    resultat.innerHTML = ""; 

    if (indicePregunta < preguntas.length) {
        mostrar.innerHTML = `<h3>${preguntas[indicePregunta].preguntas}</h3>`;

        for (let i = 0; i < preguntas[indicePregunta].respuestas.length; i++) {
            mostrar.innerHTML += `
                <button onclick="comprovar('${preguntas[indicePregunta].respuestas[i]}')">
                    ${preguntas[indicePregunta].respuestas[i]}
                </button>
            `;
        }
    } else {
        mostrar.innerHTML = "<h3>¡Has completado todas las preguntas!</h3>";
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

// Función para comprobar la respuesta
function comprovar(respostaSeleccionada) {
    if (respostaSeleccionada === preguntas[indicePregunta].correcta) {
        resultat.innerHTML = "Correcte!";
    } else {
        resultat.innerHTML = "Incorrecte";
    }
}

let tablero = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36
];

let posicion = 0;

function dibujarTablero() {
    let html = "";

    for (let i = 0; i < tablero.length; i++) {
        let fila = Math.floor(i / 7);

        if (i == posicion) {
            html += "<button style='background:lightgreen; width:50px;height:50px'>🎲</button>";
        } else {
            html += "<button style='width:50px;height:50px'>" + tablero[i] + "</button>";
        }

        if ((i + 1) % 7 == 0) {
            html += "<br>";
        }
    }

    document.querySelector("#tablero").innerHTML = html;
    document.querySelector("#posicion").textContent = posicion;
}

document.querySelector("#adelante").addEventListener("click", function() {
    if (posicion < tablero.length - 1) {
        posicion++;
    }

    dibujarTablero();
});

document.querySelector("#atras").addEventListener("click", function() {
    if (posicion > 0) {
        posicion--;
    }

    dibujarTablero();
});

dibujarTablero();
