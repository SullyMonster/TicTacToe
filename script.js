var board = document.getElementsByTagName("th");
function turn() {
    if (board.innerHTML === "") {
        board[i].innerHTML = "X";
    }
}
function start(board) {
    board.onclick = turn();
}
