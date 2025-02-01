export class Brick {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.health = 2;
    this.broken = false;
  }

  draw(ctx) {
    if (this.broken) return;

    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.health === 2 ? "#FF0000" : "#FF8080";
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.closePath();
  }

  hit() {
    this.health--;
    if (this.health <= 0) {
      this.broken = true;
    }
  }
}

export function createBricks() {
  const bricks = [];
  const rows = 5;
  const cols = 8;
  const brickWidth = 80;
  const brickHeight = 20;
  const padding = 10;
  const offsetTop = 30;
  const offsetLeft = 35;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * (brickWidth + padding) + offsetLeft;
      const y = i * (brickHeight + padding) + offsetTop;
      bricks.push(new Brick(x, y, brickWidth, brickHeight));
    }
  }
  return bricks;
}
