let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".remaining");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParse");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //condition check
  if (isNaN(guess)) {
    alert("Please Enter a valid number"); //If it is not a number
  } else if (guess < 1) {
    alert("Please Enter a number greater than 1"); //It should be greater than 1
  } else if (guess > 100) {
    alert("Please Enter a number less than 100"); // It should be less than 100
  } else {
    prevGuess.push(guess); // else add the value of guess to guess
    if (numGuess === 11) {
      //Number of guess are limited to 10
      displayGuess(guess); // Show the guess
      displayMessage(`Game Over,Random number was: ${randomNumber}`); //Show the random number
      endGame(); // End the game
    } else {
      displayGuess(guess); // Passes guess num to display func
      checkGuess(guess); //Passes guess num to checkGuess func
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Correct Guess You Won!`); //Validate number with random(win)
    endGame();
  } else if (guess < randomNumber) {
    //Validate number for lower value than random number
    displayMessage(`Number is too low!`);
  } else if (guess > randomNumber) {
    //Validate number for higher value than random number
    displayMessage(`Number is too high!`);
  }
}

function displayGuess(guess) {
  // Cleanup method
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //DOM manipulation in low high
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">Start new game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
 const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true
 })
}
