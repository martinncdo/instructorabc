const synth = window.speechSynthesis;
const $selectLetter = document.querySelector("#select-letter");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const $minuscula = document.querySelector(".minuscula");
const $mayuscula = document.querySelector(".mayuscula");
const $containerMinuscula = document.querySelector(".container-minuscula");
const $containerMayuscula = document.querySelector(".container-mayuscula");
const $wordsSection = document.querySelector(".section-words");
const words = {
    "A": ["ABRIR|./img/abrir.png", "ACEITE|./img/aceite.png"],
    "B": ["BANDERA|./img/bandera.png", "BANANA|./img/banana.svg"],
    "C": ["CASA|./img/casa.png", "CORAZON|./img/corazon.png"],
    "D": ["DADO|./img/dado.png", "DENTISTA|./img/dentista.png"],
    "E": ["ELEFANTE|./img/elefante.png", "ESCOBA|./img/escoba.png"],
    "F": ["FLOR|./img/flor.png", "FUEGO|./img/fuego.png"],
    "G": ["GATO|./img/gato.png", "GUITARRA|./img/guitarra.png"],
    "H": ["HUEVO|./img/huevo.jpeg", "HELADO|./img/helado.jpeg"],
    "I": ["IGLESIA|./img/iglesia.png", "IGUANA|./img/iguana.jpg"],
    "J": ["JIRAFA|./img/jirafa.png", "JUGO|./img/jugo.png"],
    "K": ["KIOSCO|./img/kiosco.jpg", "KETCHUP|./img/ketchup.png"],
    "L": ["LÁPIZ|./img/lapiz.png", "LIMÓN|./img/limon.jpeg"],
    "M": ["MESA|./img/mesa.png", "MARTILLO|./img/martillo.png"],
    "N": ["NUBE|./img/nube.jpg", "NIEVE|./img/nieve.png"],
    "Ñ": ["ÑANDÚ|./img/ñandu.png", "ÑOQUI|./img/ñoqui.jpg"],
    "O": ["OJO|./img/ojo.png", "OVEJA|./img/oveja.png"],
    "P": ["PERRO|./img/perro.png", "PANTALÓN|./img/pantalon.png"],
    "Q": ["QUESO|./img/queso.png", "QUEJA|./img/queja.png"],
    "R": ["RATÓN|./img/raton.png", "REGALO|./img/regalo.png"],
    "S": ["SANDÍA|./img/sandia.png", "SUMA|./img/suma.png"],
    "T": ["TIJERA|./img/tijera.png", "TENEDOR|./img/tenedor.png"],
    "U": ["URGENCIA|./img/urgencia.png", "UVA|./img/uva.jpg"],
    "V": ["VASO|./img/vaso.png", "VELA|./img/vela.jpeg"],
    "W": ["WAFLE|./img/wafle.png", "WIFI|./img/wifi.png"],
    "X": ["XILÓFONO|./img/xilofono.png"],
    "Y": ["YO|./img/yo.png", "YOGUR|./img/yogur.png"],
    "Z": ["ZAPATO|./img/zapato.jpeg", "ZEBRA|./img/zebra.png"],
};

const pronunciaciones = {
    'A': 'a',
    'B': 'be',
    'C': 'ce',
    'D': 'de',
    'E': 'e',
    'F': 'efe',
    'G': 'ge',
    'H': 'hache',
    'I': 'i',
    'J': 'jota',
    'K': 'ka',
    'L': 'ele',
    'M': 'eme',
    'N': 'hene',
    'Ñ': 'eñe',
    'O': 'o',
    'P': 'pe',
    'Q': 'cu',
    'R': 'erre',
    'S': 'ese',
    'T': 'te',
    'U': 'u',
    'V': 'vee',  
    'W': 'doble vee',  
    'X': 'equis',
    'Y': 'i griega',  
    'Z': 'zeta'
};
  
let i = 0;

function textWVoice(text) {
    if ('speechSynthesis' in window) {
        var text = new SpeechSynthesisUtterance(text);
        text.rate = 0.9;
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
        $mayuscula.style.backgroundColor = "inherit";
        $minuscula.textContent = letter.toLowerCase();
        $minuscula.style.backgroundColor = "inherit";
        $mayuscula.dataset.letter = letter;
        $minuscula.dataset.letter = letter.toLowerCase();
        $containerMayuscula.dataset.letter = letter;
        $containerMinuscula.dataset.letter = letter.toLowerCase();
        renderWords(letter);
        i++;
        (i == 1) ? speakLetter('Esta es la letra ' + pronunciaciones[letter]) : speakLetter(pronunciaciones[letter]);
    }

    if (e.target.matches('.container-letter') || e.target.matches('.letter')) {
        speakLetter(pronunciaciones[e.target.dataset.letter.toUpperCase()]);
    }

    if (e.target.matches(".word")) {
        speakLetter(e.target.textContent);
    }

    if (e.target.matches(".img-word")) {
        speakLetter(e.target.alt);
    }
})


function renderWords(letter) {
    $wordsSection.innerHTML = "";
    words[letter].forEach(word => {
    const html = `<div style='display:flex; align-items: center; background-color: #fff; padding: .2rem; border-radius: .5rem; margin: .3rem;'>
        <img src="${word.split('|')[1]}" class="img-word" style='height: 120px; width: 110px; display: inline; background-color: white;' alt="${word.split('|')[0]}">
        <p class='word' style='background-color: #fff; padding: .3rem;'>${word.split('|')[0]}</p>
    </div>`;
    $wordsSection.insertAdjacentHTML("beforeend", html);
   })
}