let randomNumber = parseInt((Math.random() * 100 + 1).toFixed(0));

const userInput = document.querySelector("#guessField"); // The user input will come in userInput variable
const submit = document.querySelector("#submit"); // We need submit button because its a form
const guessSlot = document.querySelector(".guesses"); // We will use guess slot to display prev guess
const remaining = document.querySelector(".remaining"); // Remaining will show how many guesses you have left reamain
const lowOrHigh = document.querySelector(".lowOrHigh"); // Low and High (message display) for hint
const reset = document.querySelector(".resultParse"); // Reset to reset the game

const p = document.createElement("p"); // we have taken a paragraph tag to show some text when you win or loose game

let prevGuess = []; // This array will store the prevGuess of yours
let start = 1; // A number from where your guess will start it's count from

let playGame = true; // True means you can play the game

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validate(guess);
  });
}

function validate(guess) {
  // Checking (recived number)

  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 0) {
    alert(`Please enter a number above 0`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(guess);
    if (start === 11) {
      displayGuess(guess);
      displayMessage(
        `Game is over! The random number was: ${randomNumber} Thank you for playing.`,
      );
      gameOver();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Correct ,high, low
  if (guess === randomNumber) {
    displayMessage(`Correct guess you won! The number was: ${randomNumber}`);
  } else if (guess < randomNumber) {
    displayMessage(`Guessed number is too low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Guessed number is too big!`);
  }
}

function displayGuess(guess) {
  // Display and cleanup
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  start++;
  remaining.innerHTML = `${11 - start}`;
}

function displayMessage(message) {
  // display something on page
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function gameOver() {
  // For game over
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  reset.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // For new game
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt((Math.random() * 100 + 1).toFixed(0));
    prevGuess = [];
    start = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - start}`;
    userInput.removeAttribute("disabled");
    reset.removeChild(p);
    playGame = true;
  });
}
