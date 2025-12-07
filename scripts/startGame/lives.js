export function lives(livesCount) {
    // Use local heart image - path relative to HTML file location
    // Get the base path from the current page URL
    const currentPath = window.location.pathname;
    const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    
    // Construct the path - assets folder is at the same level as the HTML file
    let src = basePath + 'assets/heart.png';
    
    // Ensure proper formatting
    src = src.replace(/\/\//g, '/'); // Remove double slashes
    
    // For GitHub Pages with repo subdirectory, ensure absolute path
    if (window.location.hostname.includes('github.io')) {
        const pathParts = currentPath.split('/').filter(p => p);
        if (pathParts.length > 0) {
            src = '/' + pathParts[0] + '/assets/heart.png';
        }
    }

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
