import { animate } from "./animate.js";
import { lives } from "./lives.js";
import { live } from "./dead.js";

export function start(bricks) {
  lives(live);
  animate(bricks);
}
