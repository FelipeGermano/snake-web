const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let box = 20;
let snake = [{ x: 160, y: 160 }];
let direction = "right";
let food = { x: 0, y: 0 };
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let speed = 150;

document.getElementById("high-score").innerText = highScore;

function setDifficulty(level) {
    if (level === "easy") speed = 150;
    if (level === "medium") speed = 100;
    if (level === "hard") speed = 70;
    resetGame();
}

function resetGame() {
    snake = [{ x: 160, y: 160 }];
    direction = "right";
    score = 0;
    document.getElementById("score").innerText = score;
    placeFood();
    clearInterval(game);
    game = setInterval(update, speed);
}

function placeFood() {
    food.x = Math.floor(Math.random() * (canvas.width / box)) * box;
    food.y = Math.floor(Math.random() * (canvas.height / box)) * box;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    if (event.key === "ArrowDown" && direction !== "up") direction = "down";
    if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (event.key === "ArrowRight" && direction !== "left") direction = "right";
});

function update() {
    let head = { ...snake[0] };

    if (direction === "up") head.y -= box;
    if (direction === "down") head.y += box;
    if (direction === "left") head.x -= box;
    if (direction === "right") head.x += box;

    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        alert("Game Over! Pontuação: " + score);
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            document.getElementById("high-score").innerText = highScore;
        }
        resetGame();
        return;
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        document.getElementById("score").innerText = score;
        placeFood();
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(food.x + 5, food.y + 5, box - 10, box - 10);

    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? "#ffcc00" : "#ff6600";
        ctx.beginPath();
        ctx.arc(segment.x + box / 2, segment.y + box / 2, box / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#ff3300";
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

placeFood();
let game = setInterval(update, speed);