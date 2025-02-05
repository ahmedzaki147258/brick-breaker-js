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

export function movePaddle(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;

  paddle.x = mouseX - paddle.width / 2;

  if (paddle.x < 0) {
    paddle.x = 0;
  } else if (paddle.x + paddle.width > canvas.width) {
    paddle.x = canvas.width - paddle.width;
  }
}

export function drawPaddle(ctx) {
  ctx.save();

  // Create gradient
  const gradient = ctx.createLinearGradient(
    paddle.x,
    paddle.y,
    paddle.x + paddle.width,
    paddle.y + paddle.height
  );

  // Add gradient colors
  gradient.addColorStop(0, "rgba(81, 45, 168, 0.9)");
  gradient.addColorStop(0.5, "rgba(103, 58, 183, 0.9)");
  gradient.addColorStop(1, "rgba(123, 31, 162, 0.9)");

  // Add glow effect
  ctx.shadowColor = "rgba(123, 31, 162, 0.6)";
  ctx.shadowBlur = 15;

  // Draw paddle with rounded corners
  ctx.beginPath();
  ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 6);
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.restore();
}
