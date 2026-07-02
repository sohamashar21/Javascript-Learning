
// Variables
const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const restartButton = document.querySelector(".btn-restart");

//Calculates total number of rows and columns of the board
const blockHeight = 50;
const blockWidth = 50;
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

//IntervalId for clearing the interval
let intervalId = null;

//To generate food at random blocks
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

// Blocks that stores the total number of blocks that exist on the screen
const blocks = [];

//Snake spawn location
let snake = [
  {
    x: 1,
    y: 3,
  },
];

// Which direction the snake will go in the start of the game
let direction = "down";

// Loop for creating rows and columns
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

//Function to render the game
function Render() 
{
  let head = null;
  // This adds food in random blocks 
  blocks[`${food.x}-${food.y}`].classList.add("food");
  
  // Moves the snake based on the key pressed
  if (direction == "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction == "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction == "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction == "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  // Checks if the snake hits any of the four walls of board
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    modal.style.display = "flex";
    startGameModal.style.display = "none";
    gameOverModal.style.display = "flex";
    return;
  }

  // This makes the snake eat the food and removes the food from that block
   if (head.x == food.x && head.y == food.y) 
    {
     blocks[`${food.x}-${food.y}`].classList.remove("food");
     food = { x: Math.floor(Math.random() * rows),y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    snake.unshift(head);
  }

  // To move the snake from one block to next , with this the last element will be removed and one new will be added to head
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  // Adds one block to head
  snake.unshift(head);
  //Removes one block from tail
  snake.pop();

  //Clear board
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

// intervalId = setInterval(() => {
//   Render();
// }, 300);

startButton.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    Render();
  }, 300);
});

restartButton.addEventListener("click",Restart)
  
function Restart() {
  blocks[`${food.x}-${food.y}`].classList.remove("food")
  snake.forEach(segment=>{
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
  })

    modal.style.display = "none";
    snake = [{ x: 1, y: 3 }];
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    intervalId = setInterval(() => {
      Render();
    }, 300);
  };

addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp") {
    direction = "up";
  } else if (event.key == "ArrowRight") {
    direction = "right";
  } else if (event.key == "ArrowLeft") {
    direction = "left";
  } else if (event.key == "ArrowDown") {
    direction = "down";
  }
});
