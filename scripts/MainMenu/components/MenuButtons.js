export class MenuButtons {
  constructor(container, navigationCallback) {
    this.container = container;
    this.navigationCallback = navigationCallback;
    this.createButtons();
  }

  createButtons() {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";

    const buttons = [
      { text: "Play", action: "play" },
      { text: "Settings", action: "settings" },
      { text: "Members", action: "teammembers" },
    ];

    buttons.forEach((btn) => {
      const button = document.createElement("button");
      button.className = "menu-button";
      button.textContent = btn.text;
      button.addEventListener("click", () =>
        this.navigationCallback(btn.action)
      );
      button.addEventListener("mouseenter", () =>
        this.handleHover(button, true)
      );
      button.addEventListener("mouseleave", () =>
        this.handleHover(button, false)
      );
      buttonsContainer.appendChild(button);
    });

    this.container.appendChild(buttonsContainer);
  }

  //   handleHover(button, isHovered) {
  //     if (isHovered) {
  //       button.style.transform = "scale(1.1)";
  //       button.style.backgroundColor = "#8a7b9c";
  //     } else {
  //       button.style.transform = "scale(1)";
  //       button.style.backgroundColor = "#6b5b7b";
  //     }
  //   }
}
