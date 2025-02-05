import { startBallMovement, animate } from "./animate.js";
import { initPaddle, movePaddle } from "./paddle.js";
import { Brick, createBricks } from "./brick.js";

export function startPage() {
  let container = document.getElementById("started");
  container.innerHTML =
<<<<<<< HEAD
    '<canvas id="myCanvas" width="800" height="600"></canvas>';

  const canvas = document.getElementById("myCanvas");
  window.bricks = createBricks();

  initPaddle(canvas);
  canvas.addEventListener("mousedown", startBallMovement);
  document.addEventListener("mousemove", (event) => movePaddle(event, canvas));

  // Start animation loop
  animate();
=======
    '<canvas id="myCanvas" width="816" height="600"></canvas>';

  const canvas = document.getElementById("myCanvas");
  initPaddle(canvas);
  canvas.addEventListener("mousedown", startBallMovement);
  document.addEventListener("mousemove", (event) => movePaddle(event, canvas));
>>>>>>> testing
}
