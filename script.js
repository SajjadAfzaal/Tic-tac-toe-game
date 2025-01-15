let boxes = document.querySelectorAll(".box");
let boxO = document.querySelector("#o");
let boxX = document.querySelector("#x");
boxO.style.backgroundColor = "#081b31";
boxO.style.color = "#fff";
let turnCount = 1;
let gameOver = false;

const highlightWinner = (winningPattern) => {
    winningPattern.forEach(index => {
        boxes[index].style.backgroundColor = "#FFD700"; // Gold color
    });
};

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    let boxesArray = Array.from(boxes);
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boxesArray[a].innerText && boxesArray[a].innerText === boxesArray[b].innerText && boxesArray[a].innerText === boxesArray[c].innerText) {
            highlightWinner(pattern);
            alert(`${boxesArray[a].innerText} wins!`);
            gameOver = true;
            return;
        }
    }
    if (turnCount > 9) {
        alert("It's a draw!");
        gameOver = true;
    }
};

const show = (box) => {
    if (gameOver) return;
    if (turnCount % 2 === 0) {
        box.innerText = "X";
        boxO.style.backgroundColor = "#081b31";
        boxO.style.color = "#fff";
        boxX.style.backgroundColor = "#fff";
        boxX.style.color = "#081b31";
    } else {
        box.innerText = "O";
        boxO.style.backgroundColor = "#fff";
        boxO.style.color = "#081b31";
        boxX.style.backgroundColor = "#081b31";
        boxX.style.color = "#fff";
    }
    turnCount++;
    checkWinner();
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!box.innerText && !gameOver) {
            show(box);
        }
    });
});
