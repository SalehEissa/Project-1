// Get the game elements
var guessInput = document.getElementById("guess");
var output = document.getElementById("output");
var numGuessesText = document.getElementById("numGuesses");
var checkButton = document.getElementById("check-button");
var newGameButton = document.getElementById("new-game-button");

// Add event listeners to the buttons
checkButton.addEventListener("click", checkGuess);
newGameButton.addEventListener("click", newGame);

// Other game variables
var secretNumber;
var numGuesses = 0;

// Initialize the game
newGame();

// Function to start a new game
function newGame() {
  // Generate a new secret number
  secretNumber = Math.floor(Math.random() * 100) + 1;

  // Reset the number of guesses
  numGuesses = 0;
  numGuessesText.textContent = "";

  // Reset the feedback text
  output.textContent = "";

  // Reset the input field
  guessInput.value = "";
}

// Function to check a guess
function checkGuess() {
  // Get the player's guess
  var guess = Number(guessInput.value);

  // Check if the guess is a valid number
  if (isNaN(guess)) {
    output.textContent = "Please enter a valid number";
  } else if (guess < 1 || guess > 100) {
    output.textContent = "Please enter a number between 1 and 100";
  } else {
    numGuesses++;
    numGuessesText.textContent = "Number of guesses: " + numGuesses;

    // Compare the guess to the secret number
    if (guess === secretNumber) {
      output.textContent =
        "Correct! You guessed the number in " + numGuesses + " guesses.";
    } else if (guess < secretNumber) {
      output.textContent = "Too low, try again";
    } else {
      output.textContent = "Too high, try again";
    }
    // Reset the input field
    guessInput.value = "";
  }
}

