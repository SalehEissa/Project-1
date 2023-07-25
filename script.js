// Global variables
var secretNumber;
var numGuesses;

// Function to start a new game
function newGame() {
  // Generate a new secret number
  secretNumber = Math.floor(Math.random() * 100) + 1;
  // Reset the number of guesses
  numGuesses = 0;
  // Reset the feedback text
  document.getElementById("feedback").textContent = "";
  // Reset the number of guesses text
  document.getElementById("numGuesses").textContent = "";
}
