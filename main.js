var enterLetter = document.getElementById("enterLetter");
var submitLetter = document.getElementById("submitLetter");

var numGuesses = 0;

var wordBank = ["AQUARIUM", "CONVERTIBLE", "COMPUTER", "DYNAMITE", "KEYBOARD", "MAGAZINE", "SHELL", "VEHICLE", "HIGHWAY", "PROGRAM"];

function guessLetter(){
  numGuesses++;
  console.log(numGuesses);
  if(numGuesses > 7){
    console.log("Game over");
    numGuesses = 0;
  }

}

submitLetter.addEventListener("click", guessLetter);
