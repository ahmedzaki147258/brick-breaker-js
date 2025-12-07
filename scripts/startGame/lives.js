export function lives(lives) {
    let src = "https://www.shutterstock.com/image-vector/pixel-heart-icon-8-bit-260nw-2145047623.jpg";

    let livesContainer = document.querySelector(".lives-container");
    if (!livesContainer) {
        livesContainer = document.createElement("div");
        livesContainer.className = "lives-container";
        document.body.appendChild(livesContainer);
    }

    // drop lifeicon 
function dropLifeIcon(x, y) {
    let lifeIcon = new LifeIcon(x, y);
    lifeIcons.push(lifeIcon);
  }
  
  class LifeIcon {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speedY = 2;
    }
    
    update() {
      this.y += this.speedY; // moveing icon to bootom
    }
  
    // sure the icon crush with paddle 
    checkCollision() {
      if (
        paddle.x < this.x + 20 && paddle.x + paddle.width > this.x &&
        paddle.y < this.y + 20 && paddle.y + paddle.height > this.y
      ) {
        
        lives++;
        lifeIcons = lifeIcons.filter(icon => icon !== this);  
      }
    }
  
    draw() {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x, this.y, 20, 20);
    }
  }
}
