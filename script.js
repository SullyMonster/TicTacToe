var boxes = document.querySelectorAll("td");
var resetButton = document.querySelector("#resetButton");
var isXTurn = true;
var boxesLeftToClick = 9;
var gameOver = false;

function init() {
  addClickListeners(boxes);
}
function addClickListeners(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].addEventListener("click", function() {
        if (isEmpty(this) && gameOver === false) {
          addObjectToBox(this);
          isXTurn = !(isXTurn);
          boxesLeftToClick--;
          checkWinner(arr);
        }
      });
      resetButton.addEventListener("click", function() {
        reset();
      })
    }
  }
function x(box) {
    box.classList.add("cross");
    box.textContent = "X";
}
function o(box) {
    box.classList.add("circle");
    box.textContent = "O";
  }
function isEmpty(box) {
   return box.textContent !== "X" && box.textContent !== "O";
  }
function reset() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
        isXTurn = true;
        boxes[i].classList.remove("cross");
        boxes[i].classList.remove("crossOut");
        boxes[i].classList.remove("circle");
    }
    gameOver = false;
    boxesLeftToClick = 9;
  }
function crossOut(box1, box2, box3) {
    box1.classList.add("crossOut");
    box2.classList.add("crossOut");
    box3.classList.add("crossOut");
  }
function isTheSame(box1, box2, box3) {
  return box1.textContent === box2.textContent && box1.textContent === box3.textContent && isEmpty(box1) === false;
}
function win(box1, box2, box3, orientation) {
    crossOut(box1, box2, box3);
    gameOver = true;
  }
function checkWinner(arr) {
  if (isTheSame(arr[0], arr[1], arr[2]))
    win(arr[0], arr[1], arr[2], "horizontally");
  else if (isTheSame(arr[3], arr[4], arr[5]))
    win(arr[3], arr[4], arr[5], "horizontally");
  else if (isTheSame(arr[6], arr[7], arr[8]))
    win(arr[6], arr[7], arr[8], "horizontally");
  else if (isTheSame(arr[0], arr[3], arr[6]))
    win(arr[0], arr[3], arr[6], "vertically");
  else if (isTheSame(arr[1], arr[4], arr[7]))
    win(arr[1], arr[4], arr[7], "vertically");
  else if (isTheSame(arr[2], arr[5], arr[8]))
    win(arr[2], arr[5], arr[8], "vertically");
  else if (isTheSame(arr[0], arr[4], arr[8]))
    win(arr[0], arr[4], arr[8], "diagonally");
  else if (isTheSame(arr[2], arr[4], arr[6]))
    win(arr[2], arr[4], arr[6], "diagonally");
}
function addObjectToBox(box) {
  if (isXTurn)
    x(box);
  else
    o(box);
}

init();