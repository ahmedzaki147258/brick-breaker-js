import { animate } from "./animate.js";
import { lives } from "./lives.js";
import { live } from "./dead.js";

<<<<<<< HEAD
export function start() {
  lives(live);
  animate();
=======
export function start(bricks) {
  lives(live);
  animate(bricks);
>>>>>>> testing
}
