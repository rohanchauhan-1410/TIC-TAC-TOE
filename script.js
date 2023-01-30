console.log("welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let gameover1 = false;
//func to change the turn
const changeturn = () => {
  turn = turn === "X" ? "0" : "X";
};
//function to check for a win
const checkwin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "Won";
      gameover1 = true;
      //   gameover.play();
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  let boxtext = box.querySelector(".boxtext");
  box.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      changeturn();
      audioturn.play();
      checkwin();
      if (!gameover1) {
        document.querySelector(".info").innerText = "turn for" + turn;
      }
    }
  });
});
// making the reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "x";
  gameover1 = false;
  if (!gameover1) {
    document.querySelector(".info").innerText = "turn for" + turn;
  }
});
