import { menuStyles } from './styles.js';
import { TeamDialog } from './components/TeamDialog.js';
import { SettingsDialog } from './components/SettingsDialog.js';
import { MenuButtons } from './components/MenuButtons.js';



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

/*class Brick {
  constructor(x, y, isUnbreakable) {
    this.x = x;
    this.y = y;
    this.isUnbreakable = isUnbreakable;
    this.hitCount = 0;
  }

 
    navigate(page) {
        switch(page) {
            case 'play':
                window.location.href = 'play.html';
                break;
            case 'settings':
                this.settingsDialog.show();
                break;
            case 'teammembers':
                this.teamDialog.show();
                break;
        }
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = menuStyles;
        document.head.appendChild(style);
    }
}