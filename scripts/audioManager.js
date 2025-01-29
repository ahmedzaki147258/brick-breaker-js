export class AudioManager {
  constructor() {
    this.audio = document.getElementById("backgroundAudio");
    this.volume = localStorage.getItem("gameVolume") || 1;
    this.audio.volume = this.volume;
    this.setupAudioPersistence();
  }

  setupAudioPersistence() {
    // Start playing when user interacts with the page
    const startAudio = () => {
      this.audio.play().catch(() => {});
      document.removeEventListener("click", startAudio);
      document.removeEventListener("keydown", startAudio);
    };

    document.addEventListener("click", startAudio);
    document.addEventListener("keydown", startAudio);

    // Save volume to localStorage when changed
    this.audio.addEventListener("volumechange", () => {
      localStorage.setItem("gameVolume", this.audio.volume);
    });

    // Handle page visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.audio.pause();
      } else {
        this.audio.play().catch(() => {});
      }
    });
  }

  setVolume(value) {
    this.volume = value;
    this.audio.volume = value;
  }

  getVolume() {
    return this.volume;
  }
}
