const synth = window.speechSynthesis;
const $selectLetter = document.querySelector("#select-letter");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const $minuscula = document.querySelector(".minuscula");
const $mayuscula = document.querySelector(".mayuscula");
const $containerMinuscula = document.querySelector(".container-minuscula");
const $containerMayuscula = document.querySelector(".container-mayuscula");
const $letterP = document.querySelectorAll(".letter");
const $wordsSection = document.querySelector(".section-words");
const words = {
    "A": ["ACEITE", "ABRIL", "ADIVINAR"],
    "B": ["BEBÉ", "BUSCAR", "BRILLANTE"],
    "C": ["CIELO", "CORRER", "COMER"],
    "D": ["DÍA", "DIBUJAR", "DULCE"],
    "E": ["ELEFANTE", "ESCUCHAR", "ESCRIBIR"],
    "F": ["FELIZ", "FUEGO", "FRUTA"],
    "G": ["GATO", "GRANDE", "GUITARRA"],
    "H": ["HOLA", " HACER", "HOGAR"],
    "I": ["ISLA", "IR", "INFINITO"],
    "J": ["JARDÍN", "JUGAR", "JOVEN"],
    "K": ["KILO", "KARMA", "KIOSCO"],
    "L": ["LUZ", "LEER", "LARGO"],
    "M": ["MAR", "MESA", "MÚSICA"],
    "N": ["NUBE", "NACER", "NOCHE"],
    "Ñ": ["ÑANDÚ", "ÑOQUI"],
    "O": ["OJO", "OÍR", "OSO"],
    "P": ["PERRO", "PINTAR", "PLAYA"],
    "Q": ["QUESO", "QUÍMICA", "QUIERO"],
    "R": ["RÍO", "RÁPIDO", "REÍR"],
    "S": ["SOL", "SALTAR", "SOMBRA"],
    "T": ["TIERRA", "TOCAR", "TIEMPO"],
    "U": ["UNIVERSO", "USAR", "UNO"],
    "V": ["VIENTO", "VIAJAR", "VERDE"],
    "W": ["WAFLE", "WHISKY", "WEB"],
    "X": ["XILÓFONO", "XENÓN", "XEROGRAFÍA"],
    "Y": ["YATE", "YOGUR", "YO"],
    "Z": ["ZAPATO", "ZEBRA", "ZUMO"],
};
let i = 0;

function textWVoice(text) {
    if ('speechSynthesis' in window) {
        var text = new SpeechSynthesisUtterance(text);
        text.rate = 0.5;
        window.speechSynthesis.speak(text);
      }
}

function speakLetter(text) {
    textWVoice(text)
  }

const $options = document.querySelector(".abc");
let $actualLetter;

document.addEventListener("DOMContentLoaded", (e) => {
    letters.forEach(letter => {
        const spanLetter = document.createElement('span');
        spanLetter.textContent = letter;
        spanLetter.className = 'option-letter';
        if (letter === "A") {
            spanLetter.style.backgroundColor = 'lightgreen';
            $actualLetter = spanLetter;
        }
        $options.appendChild(spanLetter);
    })
    renderWords("A")
})

document.addEventListener("click", (e) => {
    if (e.target.matches('.option-letter')) {
        let letter = e.target.textContent;
        $actualLetter.style.backgroundColor = 'aliceblue';
        $actualLetter = e.target;
        $actualLetter.style.backgroundColor = 'lightgreen';
        $mayuscula.textContent = letter;
        $minuscula.textContent = letter.toLowerCase();
        $letterP.forEach(el => {
            el.dataset.letter = letter;
        });
        $containerMayuscula.dataset.letter = letter;
        $containerMinuscula.dataset.letter = letter.toLowerCase();
        renderWords(letter);
        i++;
        (i == 1) ? speakLetter('Esta es la letra ' + letter) : speakLetter(letter);
    }

    if (e.target.matches('.container-letter') || e.target.matches('.letter')) {
        speakLetter(e.target.dataset.letter);
    }

    if (e.target.matches(".word")) {
        speakLetter(e.target.textContent);
    }
})


function renderWords(letter) {
    $wordsSection.innerHTML = "";
    words[letter].forEach(word => {
    let $wordP = document.createElement("p");
    $wordP.textContent = word;
    $wordP.className = "word";
    $wordsSection.appendChild($wordP);
   })
}