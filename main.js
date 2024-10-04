const synth = window.speechSynthesis;
let voices;
const $selectLetter = document.querySelector("#select-letter");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const $minuscula = document.querySelector(".minuscula");
const $mayuscula = document.querySelector(".mayuscula");
const $containerMinuscula = document.querySelector(".container-minuscula");
const $containerMayuscula = document.querySelector(".container-mayuscula");
const $letterP = document.querySelectorAll(".letter");

function speakLetter(letter) {
    if ('speechSynthesis' in window) {
      var text = new SpeechSynthesisUtterance('Esta es la letra ' + letter);
      window.speechSynthesis.speak(text);
    }
  }

document.addEventListener("DOMContentLoaded", (e) => {
    letters.forEach(letter => {
        let $optionElement = document.createElement('option');
        $optionElement.textContent = letter;
        $optionElement.value = letter;
        $optionElement.id = letter;
        $selectLetter.appendChild($optionElement);
    })
})

$selectLetter.addEventListener("change", (e) => {
    let selectedLetter = e.target.value;
    $mayuscula.textContent = selectedLetter;
    $minuscula.textContent = selectedLetter.toLowerCase();
    $letterP.forEach(el => {
        el.dataset.letter = selectedLetter;
    });
    $containerMayuscula.dataset.letter = selectedLetter;
    $containerMinuscula.dataset.letter = selectedLetter.toLowerCase();
    speakLetter(selectedLetter);
})

document.addEventListener("click", (e) => {
    if (e.target.matches('.container-letter') || e.target.matches('.letter')) {
        speakLetter(e.target.dataset.letter);
    }
})