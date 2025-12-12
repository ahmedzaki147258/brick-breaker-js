#  Brick Breaker JS

> A modern, feature-rich implementation of the classic arcade game built with vanilla JavaScript and the HTML5 Canvas API.

##  Overview

**Brick Breaker JS** is a high-performance, browser-based arcade game that demonstrates the power of core web technologies without reliance on external game engines. It features a custom physics engine, dynamic difficulty scaling, and a modular architecture designed for maintainability and performance.

##  Key Features

*   **Dynamic Difficulty System**: Three distinct difficulty tiers (Easy, Medium, Hard) that adjust not just speed, but level layout complexity and game rules.
*   **Procedural Level Generation**: Algorithms generate level patterns (Sparse, Vertical, ZigZag) on the fly based on the selected difficulty.
*   **Custom Physics Engine**: Implemented vector-based collision detection (Circle-AABB) for precise ball-brick and ball-paddle interactions.
*   **Smooth Rendering**: Optimized rendering loop running at 60 FPS using `requestAnimationFrame` for fluid gameplay.
*   **Responsive Control Scheme**: Seamlessly supports both mouse and keyboard inputs.

##  Technical Stack

*   **Core**: Vanilla JavaScript (ES6+), HTML5, CSS3
*   **Rendering**: HTML5 Canvas API (2D Context)
*   **Architecture**: Modular OOP (Object-Oriented Programming) with strict state management.

##  Getting Started

### Prerequisites

You need a modern web browser (Chrome, Firefox, Safari, Edge) to run this application. No backend server or complex build tools are required.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/brick-breaker-js.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd brick-breaker-js
    ```
3.  **Launch the Game:**
    *   Simply open `index.html` in your preferred web browser.
    *   *Optional:* For the best experience, run it using a local server (e.g., Live Server in VS Code or `python3 -m http.server`).

##  Controls

| Action | Keyboard | Mouse |
| :--- | :--- | :--- |
| **Move Paddle** | `Arrow Left` / `Arrow Right` <br> `A` / `D` | Move Cursor |
| **Launch Ball** | `Spacebar` | `Left Click` |

##  Project Structure

```text
brick-breaker-js/
├── assets/             # Game assets (images, sounds)
├── scripts/            # Source code
│   ├── bricks/         # Brick generation and management logic
│   ├── startGame/      # Game loop, input handling, and state management
│   ├── game.css        # Interactive UI styling
│   └── main.js         # Entry point
├── index.html          # Main HTML structure
└── README.md           # Project documentation
```

##  Author

Developed with a focus on clean code and performance. Feel free to explore the source code to understand the implementation of the game loop and collision detection systems.
