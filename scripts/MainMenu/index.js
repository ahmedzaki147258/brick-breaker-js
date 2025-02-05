import { menuStyles } from './styles.js';
import { TeamDialog } from './components/TeamDialog.js';
import { SettingsDialog } from './components/SettingsDialog.js';
import { MenuButtons } from './components/MenuButtons.js';

export class MainMenu {
    constructor(containerId, audioManager) {
        this.container = document.getElementById(containerId);
        this.audioManager = audioManager;
        this.init();
    }

    init() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'menu-container';
        
        
        this.teamDialog = new TeamDialog(() => {});
        this.settingsDialog = new SettingsDialog(this.audioManager, () => {});
        new MenuButtons(menuContainer, (action) => this.navigate(action));
        
        this.container.appendChild(menuContainer);
        this.addStyles();
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