export const paddle = {
    width: 100,
    height: 10,
    x: 350,
    y: 550,
    color: "blue",
    speed: 8
};

export function initPaddle(canvas) {
    paddle.x = (canvas.width - paddle.width) / 2;
    paddle.y = canvas.height - 50;
}

let lives = 3;  
let score = 0;  
let paddle; 
let ball;  
//let bricks = []; 
let lifeIcons = [];  
//let unbreakableBricks = [];  

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

