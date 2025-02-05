
let lives = 3;  
let score = 0;  
let paddle; 
let ball;  
let bricks = []; 
let lifeIcons = [];  
let unbreakableBricks = [];  

// the first game setup    
/*function setup() {
//  Create paddle and ball and bricks
  paddle = new Paddle();
  ball = new Ball();
  bricks = createBricks();
}*/

// createnbricks
/*function createBricks() {
  let brickArray = [];
  // create 5 rows and 10 col 
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
      let isUnbreakable = Math.random() < 0.2;  // 20% from bricks cant break 
      brickArray.push(new Brick(j * 60, i * 20, isUnbreakable));
    }
  }
  return brickArray;
}*/

/*class Brick {
  constructor(x, y, isUnbreakable) {
    this.x = x;
    this.y = y;
    this.isUnbreakable = isUnbreakable;
    this.hitCount = 0;
  }

 
  hit() {
    if (this.isUnbreakable) return;  // dont make anything for bricks if isunbreakable 
    this.hitCount++;
    if (this.hitCount >= 2) {
      // call remove function
      this.remove();
      // after brack 5 bricks droplife icon 
      if ( (score + 10 ) % 50 === 0) {
        dropLifeIcon(this.x, this.y);
      }
    }
  }

  // remove bricks
  remove() {
    // remove bricks from array
    const index = bricks.indexOf(this);
    if (index > -1) {
      bricks.splice(index, 1);
      score += 10;  // after breck one of brick increase score to 10 point 
    }
  }
}*/

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
