var enterLetter = document.getElementById("enterLetter");
var submitLetter = document.getElementById("submitLetter");

var numGuesses = 0;

var wordBank = ["AQUARIUM", "CONVERTIBLE", "COMPUTER", "DYNAMITE", "KEYBOARD", "MAGAZINE", "SHELL", "VEHICLE", "HIGHWAY", "PROGRAM"];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function loadAlphabet() {
  for (var i = 0; i < alphabet.length; i++) {
    var letterButtons = document.createElement("button");
    letterButtons.innerHTML = alphabet[i];
    document.body.appendChild(letterButtons);
    console.log("created buttons");
  }
}

function guessLetter() {
  numGuesses++;
  console.log(numGuesses);
  if (numGuesses > 7) {
    console.log("Game over");
    numGuesses = 0;
  }

}

submitLetter.addEventListener("click", guessLetter);
