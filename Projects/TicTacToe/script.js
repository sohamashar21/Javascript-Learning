const music = new Audio("bgmusic.mp3");
const audioTurn = new Audio("click.mp3");
const gameover = new Audio("gameover.mp3");
const victory = new Audio("winner.mp3");
console.log("Tic tac toe");
let turn = "X";
let isGameover = false;
let reset = document.querySelector(".reset");

// Changes Turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Checks if someome won
const checkWiner = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    //Horizontal
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],

    // Vertical
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],

    //Diagonal
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText == boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerHTML =
        boxtext[e[0]].innerText + " Won";
      isGameover = true;
      document
        .querySelector(".gif")
        .getElementsByTagName("img")[0].style.width = "150px";
      let line = document.querySelector(".line");

      line.style.width = "20vw";
      line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;  
      music.pause();
      victory.play();
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      music.play();
      turn = changeTurn();
      audioTurn.play();
      checkWiner();
      if (!isGameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for:" + turn;
      }
    }
  });
});

//Reset
reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxtext");
  boxText.forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameover = false;
  if (!isGameover) {
    document.getElementsByClassName("info")[0].innerText = "Turn for:" + turn;
    document.querySelector(".gif").getElementsByTagName("img")[0].style.width =
      "0px";
  }
});
