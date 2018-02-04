var wordDisplay = document.getElementById("wordDisplay");
var keyboardDisplay = document.getElementById("keyboardDisplay");
var guessWord = document.getElementById("guessWord");
var guessButton = document.getElementById("guessButton");

var numGuesses = 0;

var wordBank = ["mouse", "software", "computer", "python", "keyboard", "code", "client", "desktop", "display", "program"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blanks = [];

var currentWord = wordBank[Math.floor(Math.random() * 10)];
console.log(currentWord);

// Loops through the selected word
for (var i = 0; i < currentWord.length; i++) {

  blanks.push("_");
  wordDisplay.innerHTML = blanks.join(" ");

}

// Creates an array of buttons for the alphabet
function loadAlphabet() {
  for (var z = 0; z < alphabet.length; z++) {
    var letterButtons = document.createElement("button");
    letterButtons.innerHTML = alphabet[z];
    keyboardDisplay.appendChild(letterButtons);


    letterButtons.addEventListener("click", function() {

      if (currentWord.indexOf(this.innerHTML) > -1) {

        var letterPosition = currentWord.indexOf(this.innerHTML);
        console.log(letterPosition);

        // Replaces the blank with the letter you clicked
        blanks[letterPosition] = this.innerHTML;
        wordDisplay.innerHTML = blanks.join(" ");

        // If all blanks are uncovered, you win
        

      } else {
        numGuesses++;
        console.log("Total guesses: " + numGuesses);
        if (numGuesses > 7) {
          alert("Game over");
          // Restarts the game if you lose
          location.reload();
        }
      }

      console.log(this.innerHTML);

    });
  }
}

function guessLetter() {
  numGuesses++;
  console.log("Total guesses: "+numGuesses);
  if (numGuesses > 7) {
    alert("Game over");
    location.reload();
  }

  if (guessWord.value === currentWord)
    alert("You win!");

}

guessButton.addEventListener("click", guessLetter);
guessWord.addEventListener("keyup", function(ev){
  if(ev.keyCode === 13){
    guessLetter();
  }
});
