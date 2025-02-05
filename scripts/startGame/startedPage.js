import { startBallMovement } from "./animate.js";
import { initPaddle, movePaddle } from "./paddle.js";

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
