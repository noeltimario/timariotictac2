let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(row, col) {
    let index = row * 3 + col;
    let cell = document.getElementById(`cell-${index}`);

    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;

        if (checkWinner()) {
            document.getElementById("status").innerHTML = `<span style="color: white;">${currentPlayer} Wins!</span>`;



            gameActive = false;
            return;
        }

        if (board.every(cell => cell !== "")) {
            document.getElementById("status").innerText = "It's a Draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    document.getElementById("status").innerText = "";
    document.querySelectorAll(".cell").forEach(cell => (cell.innerText = ""));
}
