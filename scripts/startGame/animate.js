import { Dead, live } from "./dead.js";
import { drawPaddle, paddle } from "./paddle.js";
import { lifeIcons } from "./lifeicon.js";
import { gameResult } from "./Score.js";
import { endGame } from "./end.js";
import { startPage } from "./startedPage.js";

export var ball = {
  x: 600 / 2,
  y: 40,
<<<<<<< HEAD
  color: "red",
  radius: 15,
  speedX: 2,
  speedY: 2,
  moving: false,
=======
  color: "transparent",
  radius: 12,
  speedX: 2,
  speedY: 2,
  moving: false,
  rotation: 0,
  glowIntensity: 0,
  glowIncreasing: true,
>>>>>>> testing
};

function drawBall(ctx) {
  ctx.save();

  const gradient = ctx.createRadialGradient(
    ball.x,
    ball.y,
    0,
    ball.x,
    ball.y,
    ball.radius
  );

  gradient.addColorStop(0, "rgba(33, 150, 243, 0.95)"); // Light blue
  gradient.addColorStop(0.6, "rgba(25, 118, 210, 0.95)"); // Medium blue
  gradient.addColorStop(1, "rgba(13, 71, 161, 0.95)"); // Dark blue

  ctx.shadowColor = "rgba(33, 150, 243, 0.6)";
  ctx.shadowBlur = 15;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.restore();
}

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

<<<<<<< HEAD
export function animate() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw all bricks and check collisions
  window.bricks.forEach((brick) => {
    if (!brick.broken) {
      // Check collision with brick
      if (
        ball.moving &&
        ball.x > brick.x &&
        ball.x < brick.x + brick.width &&
        ball.y > brick.y &&
        ball.y < brick.y + brick.height
      ) {
        brick.hit(); // Reduce brick health
        ball.speedY = -ball.speedY; // Reverse ball direction
      }
      brick.draw(ctx);
    }
  });

  if (!ball.moving) {
    placeBallOnPaddle();
  } else {
    ball.x += ball.speedX;
    ball.y += ball.speedY;
=======
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
>>>>>>> testing

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
<<<<<<< HEAD
      Dead();
      ball.moving = false;
      placeBallOnPaddle();
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

  requestAnimationFrame(animate);
=======
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
  drawBall(ctx);

  // draw paddle
  //   ctx.beginPath();
  //   ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  //   ctx.fillStyle = paddle.color;
  //   ctx.fill();
  //   ctx.closePath();

  drawPaddle(ctx);

  requestAnimationFrame(() => animate(bricks));
>>>>>>> testing
}
