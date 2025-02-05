export const paddle = {
  width: 130,
  height: 12,
  x: 350,
  y: 550,
  color: "transparent",
  speed: 8,
  glowIntensity: 0,
  glowIncreasing: true,
};

export function initPaddle(canvas) {
  paddle.x = (canvas.width - paddle.width) / 2;
  paddle.y = canvas.height - 50;
}

/*function hitBricks() {
  for (let i = 0; i < bricks.length; i++) {
    if (ball.collidesWith(bricks[i])) {
      bricks[i].hit();
    }
  }
}*/

function gameLoop() {

  ball.move();
  paddle.move();

  //call to Ceack from crush ball with bricks 
  hitBricks();

  // cheack from crush icon with paddle 
  for (let icon of lifeIcons) {
    icon.checkCollision();
  }

  // update screen
  draw();
  requestAnimationFrame(gameLoop);
}

// start game
setup();
gameLoop();


export function drawPaddle(ctx) {
  ctx.save();

 
  const gradient = ctx.createLinearGradient(
    paddle.x,
    paddle.y,
    paddle.x + paddle.width,
    paddle.y + paddle.height
  );

  
  gradient.addColorStop(0, "rgba(81, 45, 168, 0.9)");
  gradient.addColorStop(0.5, "rgba(103, 58, 183, 0.9)");
  gradient.addColorStop(1, "rgba(123, 31, 162, 0.9)");

 
  ctx.shadowColor = "rgba(123, 31, 162, 0.6)";
  ctx.shadowBlur = 15;

 
  ctx.beginPath();
  ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 6);
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.restore();
}
