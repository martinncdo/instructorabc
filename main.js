const synth = window.speechSynthesis;
let voices;
const $selectLetter = document.querySelector("#select-letter");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const $minuscula = document.querySelector(".minuscula");
const $mayuscula = document.querySelector(".mayuscula");
const $containerMinuscula = document.querySelector(".container-minuscula");
const $containerMayuscula = document.querySelector(".container-mayuscula");
const $letterP = document.querySelectorAll(".letter");
let i = 0;

function textWVoice(text) {
    if ('speechSynthesis' in window) {
        var text = new SpeechSynthesisUtterance(text);
        text.rate = 0.5;
        window.speechSynthesis.speak(text);
      }
}

function speakLetter(letter) {
    i++;
    if (i === 1) {
        textWVoice('Esta es la letra ' + letter)
    } else {
        textWVoice(letter)
    }
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
        speakLetter(letter);
    }

    if (e.target.matches('.container-letter') || e.target.matches('.letter')) {
        speakLetter(e.target.dataset.letter);
    }
})