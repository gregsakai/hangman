var wordDisplay = document.getElementById("wordDisplay");
var guessWord = document.getElementById("guessWord");
var submitLetter = document.getElementById("submitLetter");

var numGuesses = 0;

var wordBank = ["mouse", "software", "computer", "hardware", "keyboard", "battery", "screen", "desktop", "display", "program"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blanks = [];

var currentWord = wordBank[Math.floor(Math.random() * 10)];
console.log(currentWord);

for (var i = 0; i < currentWord.length; i++) {

  blanks.push("_ ");
  blanks.join(" ");
  wordDisplay.innerHTML = blanks.join(" ");
  // var blanks = currentWord.replace(currentWord[i], "_ ");
  //
  // wordDisplay.innerHTML = blanks;

}


function loadAlphabet() {
  for (var z = 0; z < alphabet.length; z++) {
    var letterButtons = document.createElement("button");
    letterButtons.innerHTML = alphabet[z];
    document.body.appendChild(letterButtons);

    // console.log(alphabet[z]);
    letterButtons.addEventListener("click", function() {


      console.log(this.innerHTML);

    });
  }
}

function guessLetter() {
  numGuesses++;
  console.log(numGuesses);
  if (numGuesses > 7) {
    console.log("Game over");
  }

  if (guessWord.value === currentWord)
    console.log("winner");

}

submitLetter.addEventListener("click", guessLetter);
