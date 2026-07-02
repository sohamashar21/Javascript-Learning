
// Variables
const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const restartButton = document.querySelector(".btn-restart");
const highScoreElement = document.querySelector("#high-score")
const scoreElement = document.querySelector("#score")
const timeElement = document.querySelector("#time")


//Calculates total number of rows and columns of the board
const blockHeight = 50;
const blockWidth = 50;

let highScore = localStorage.getItem("highScore") || 0
let score = 0;
let time = `00-00`;

highScoreElement.innerText= highScore

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

//IntervalId for clearing the interval
let intervalId = null;
let timerIntervalId = null;

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

  // Wall collision 
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    modal.style.display = "flex";
    startGameModal.style.display = "none";
    gameOverModal.style.display = "flex";
    return;
  }

  // Food consume logic
   if (head.x == food.x && head.y == food.y) 
    {
     blocks[`${food.x}-${food.y}`].classList.remove("food");
     food = { x: Math.floor(Math.random() * rows),y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    snake.unshift(head);

    score += 10;
    scoreElement.innerText = `${score}`

    if(score>highScore){
      highScore=score;
      localStorage.setItem("highScore",highScore.toString())
    }
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

// Start game button eventListener
startButton.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => { Render();}, 300);
  timerIntervalId = setInterval(()=>{
     let [min,sec] = time.split('-').map(Number)
     
     if(sec==59){
      min+=1
      sec=0
     }else{
      sec+=1
     }
     time = `${min}-${sec}`
     timeElement.innerText=time
  },1000)
});

// Restart game button eventListener
restartButton.addEventListener("click",Restart)
  
// Game restart logic
function Restart() {
  blocks[`${food.x}-${food.y}`].classList.remove("food")
  snake.forEach(segment=>{
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
  })
    score=0
    time=`00-00`

   scoreElement.innerText = score
   timeElement.innerText = time
   highScoreElement.innerText = highScore

    modal.style.display = "none";
    direction="down"
    snake = [{ x: 1, y: 3 }];
    food = { x: Math.floor(Math.random() * rows),y: Math.floor(Math.random() * cols),};
    intervalId = setInterval(() => {
      Render();
    }, 300);
  };



// Key press logic eventListener
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
