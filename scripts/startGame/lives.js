export function lives(livesCount) {
    // Use local heart image
    let src = "./assets/heart.png";

    let livesContainer = document.querySelector(".lives-container");
    if (!livesContainer) {
        livesContainer = document.createElement("div");
        livesContainer.className = "lives-container";
        document.body.appendChild(livesContainer);
    }

    // Clear existing lives display
    livesContainer.innerHTML = "";
    
    // Display the current number of lives with enhanced styling
    for (let i = 0; i < livesCount; i++) {
        const lifeIcon = document.createElement("img");
        lifeIcon.src = src;
        lifeIcon.alt = "Life";
        lifeIcon.style.width = "40px";
        lifeIcon.style.height = "40px";
        lifeIcon.style.margin = "0";
        lifeIcon.style.display = "block";
        lifeIcon.style.objectFit = "contain";
        livesContainer.appendChild(lifeIcon);
    }
}
