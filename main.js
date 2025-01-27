import { MainMenu } from './scripts/MainMenu/index.js';
import { AudioManager } from './scripts/audioManager.js';

document.addEventListener('DOMContentLoaded', () => {
    const audioManager = new AudioManager();
    new MainMenu('game-container', audioManager);
});
