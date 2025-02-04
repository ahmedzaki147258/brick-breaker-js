import { Dead, live } from "./dead.js";
import { paddle } from "./paddle.js";
import { lifeIcons } from "./lifeicon.js";
import { gameResult } from "./Score.js";
import { endGame } from "./end.js";
import { startPage } from "./startedPage.js"

export var ball = {
    x: 600 / 2,
    y: 40,
    color: "red",
    radius: 15,
    speedX: 2,
    speedY: 2,
    moving: false,
};

export function placeBallOnPaddle() {
    ball.x = paddle.x + paddle.width / 2;
    ball.y = paddle.y - ball.radius;
}

export function startBallMovement() {
    if (!ball.moving) {
        ball.moving = true;
        ball.speedY = -Math.abs(ball.speedY); // go ball to up
    }
}

export function animate(bricks) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bricks.draw(ctx);
    lifeIcons.forEach((icon) => {
        icon.draw(ctx);
    });

    if (!ball.moving) {
        placeBallOnPaddle();
    } else {
        bricks.checkCollision(ball);

        if (bricks.areAllBricksBroken()) {
            startPage();
            endGame();
            gameResult(true);
            return;
        }
        lifeIcons.forEach((icon) => icon.checkCollision(paddle));
        lifeIcons.forEach((icon) => icon.update());

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
            // lifeIcons = [];
            if (live == 0) {
                Dead();
                return;
            } else {
                Dead();
                ball.moving = false;
                placeBallOnPaddle();
            }
        }
        ball.x += ball.speedX;
        ball.y += ball.speedY;
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
