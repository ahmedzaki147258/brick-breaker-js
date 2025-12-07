import { revive } from "./dead.js";
export let score = 0;
export let lifeIcons = [];


export function dropLifeIcon(x, y) {
  let lifeIcon = new LifeIcon(x, y);
  lifeIcons.push(lifeIcon);
}

export class LifeIcon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 2;
    this.size = 24; 
    this.glowIntensity = 0;
    this.glowIncreasing = true;
  }

  update() {
    this.y += this.speedY;

    if (this.glowIncreasing) {
      this.glowIntensity += 0.1;
      if (this.glowIntensity >= 1) this.glowIncreasing = false;
    } else {
      this.glowIntensity -= 0.1;
      if (this.glowIntensity <= 0) this.glowIncreasing = true;
    }
  }

  checkCollision(paddle) {
    if (
      paddle.x < this.x + this.size &&
      paddle.x + paddle.width > this.x &&
      paddle.y < this.y + this.size &&
      paddle.y + paddle.height > this.y
    ) {
      revive();
      return true; // Return true to indicate collision
    }
    return false;
  }

  draw(ctx) {
    ctx.save();


    ctx.shadowColor = "rgba(255, 0, 0, " + this.glowIntensity + ")";
    ctx.shadowBlur = 15;

 
    const heartPath = new Path2D();
    const x = this.x;
    const y = this.y;
    const size = this.size;

   
    heartPath.moveTo(x + size / 2, y + size / 3);

   
    heartPath.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 3);

  
    heartPath.bezierCurveTo(
      x,
      y + size / 2,
      x + size / 2,
      y + size,
      x + size / 2,
      y + size
    );

   
    heartPath.bezierCurveTo(
      x + size / 2,
      y + size,
      x + size,
      y + size / 2,
      x + size,
      y + size / 3
    );

  
    heartPath.bezierCurveTo(
      x + size,
      y,
      x + size / 2,
      y,
      x + size / 2,
      y + size / 3
    );

   
    const gradient = ctx.createRadialGradient(
      x + size / 2,
      y + size / 2,
      size / 8,
      x + size / 2,
      y + size / 2,
      size
    );
    gradient.addColorStop(0, "#ff6b6b");
    gradient.addColorStop(0.5, "#ff4757");
    gradient.addColorStop(1, "#ff0000");

   
    ctx.fillStyle = gradient;
    ctx.fill(heartPath);

   
    ctx.beginPath();
    ctx.ellipse(
      x + size / 4,
      y + size / 4,
      size / 6,
      size / 8,
      -Math.PI / 4,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.fill();

    ctx.restore();
  }
}
