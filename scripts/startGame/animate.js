import { Dead } from "./dead.js";
import { paddle } from "./paddle.js";

export var ball = {
    x: 600 / 2,
    y: 40,
    color: "red",
    radius: 15,
    speedX: 2,
    speedY: 2,
    moving: false,
};

function placeBallOnPaddle() {
    const canvas = document.getElementById("myCanvas");
    if (canvas && paddle) {
        ball.x = paddle.x + paddle.width / 2;
        ball.y = paddle.y - ball.radius - 5;
    }
}

export function startBallMovement() {
    if (!ball.moving) {
        ball.moving = true;
    }
}

export function animate(bricks) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(bricks);
    bricks.draw(ctx);

    if (!ball.moving) {
        placeBallOnPaddle();
    } else {
        ball.x += ball.speedX;
        ball.y += ball.speedY;

        // collision with wall
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.speedX = -ball.speedX;
        }
        if (ball.y - ball.radius < 0) {
            ball.speedY = -ball.speedY;
        }

        // collision with paddle
        if (
            ball.y + ball.radius > paddle.y &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
        ) {
            ball.speedY = -ball.speedY;
        }

        // if the ball hits the top of the canvas
        if (ball.y + ball.radius > canvas.height) {
            Dead();
            ball.moving = false;
            placeBallOnPaddle();
        }
        if (bricks.checkCollision(ball)) {
            // add reward
        }
    }

    // draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();

    // draw paddle
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = paddle.color;
    ctx.fill();
    ctx.closePath();

    requestAnimationFrame(() => animate(bricks));
}
