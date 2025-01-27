export class SettingsDialog {
    constructor(audioManager, closeCallback) {
        this.audioManager = audioManager;
        this.closeCallback = closeCallback;
        this.dialog = null;
        this.createDialog();
    }

    createDialog() {
        this.dialog = document.createElement('div');
        this.dialog.className = 'settings-dialog';
        this.dialog.id = 'settingsDialog';
        
        const dialogContent = this.createDialogContent();
        this.dialog.appendChild(dialogContent);
        
        document.body.appendChild(this.dialog);
    }

    createDialogContent() {
        const content = document.createElement('div');
        content.className = 'settings-dialog-content';
        
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = 'x';
        closeButton.onclick = () => this.close();
        
        const title = document.createElement('h2');
        title.textContent = 'SETTING';
        title.className = 'settings-title';
        
        const volumeControl = this.createVolumeControl();
        
        content.appendChild(closeButton);
        content.appendChild(title);
        content.appendChild(volumeControl);
        
        return content;
    }

    createVolumeControl() {
        const volumeControl = document.createElement('div');
        volumeControl.className = 'volume-control';
        
        const volumeIcon = document.createElement('span');
        volumeIcon.className = 'volume-icon';
        volumeIcon.innerHTML = '🔊';
        
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'slider-container';
        
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '100';
        slider.value = this.audioManager.getVolume() * 100;
        slider.className = 'volume-slider';
        slider.addEventListener('input', (e) => {
            this.audioManager.setVolume(e.target.value / 100);
        });
        
        sliderContainer.appendChild(slider);
        volumeControl.appendChild(volumeIcon);
        volumeControl.appendChild(sliderContainer);
        
        return volumeControl;
    }

    show() {
        this.dialog.style.display = 'flex';
        setTimeout(() => {
            this.dialog.style.opacity = '1';
            this.dialog.querySelector('.settings-dialog-content').style.transform = 'scale(1)';
        }, 10);
    }

    close() {
        this.dialog.style.opacity = '0';
        this.dialog.querySelector('.settings-dialog-content').style.transform = 'scale(0.8)';
        setTimeout(() => {
            this.dialog.style.display = 'none';
        }, 300);
        if (this.closeCallback) this.closeCallback();
    }
}
