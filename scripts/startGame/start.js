import { animate } from "./animate.js";
import { lives } from "./lives.js";
import { live } from "./dead.js";

*class Brick {
    constructor(x, y, isUnbreakable) {
      this.x = x;
      this.y = y;
      this.isUnbreakable = isUnbreakable;
      this.hitCount = 0;
    }