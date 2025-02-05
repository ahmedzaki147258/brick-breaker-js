export const menuStyles = `

body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    #root {
        min-height: 100vh;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
                    url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2070') center/cover no-repeat;
        position: relative;
        overflow: hidden;
    }

    #root::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(95, 158, 160, 0.2);
        pointer-events: none;
    }
    .menu-container {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
                    url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2070') center/cover no-repeat;
        padding: 20px;
        position: relative;
    }

    .menu-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(95, 158, 160, 0.2);
        pointer-events: none;
    }

    .buttons-container {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 900px;
        margin-bottom: 5vh;
        position: relative;
        z-index: 1;
    }

    .menu-button {
        padding: 18px 45px;
        font-size: 1.4rem;
        font-weight: 600;
        border: none;
        border-radius: 15px;
        background: linear-gradient(145deg, rgba(33, 150, 243, 0.9), rgba(25, 118, 210, 0.9));
        color: white;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        width: 260px;
        backdrop-filter: blur(5px);
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        overflow: hidden;
    }

    .menu-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
        );
        transition: 0.5s;
    }

    .menu-button:hover::before {
        left: 100%;
    }

    .menu-button:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        background: linear-gradient(145deg, rgba(25, 118, 210, 0.95), rgba(21, 101, 192, 0.95));
    }

    .menu-button:active {
        transform: translateY(1px);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    }

    .menu-button:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
    }

    /* Rest of the styles remain the same */
        .team-dialog, .settings-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    }

    .team-dialog-content, .settings-dialog-content {
        background: linear-gradient(145deg, #ffffff, #e6e6e6);
        padding: 2rem;
        border-radius: 15px;
        position: relative;
        transform: scale(0.8);
        transition: transform 0.3s ease;
        max-width: 80vw;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .team-dialog-content::-webkit-scrollbar {
        width: 8px;
    }

    .team-dialog-content::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }

    .team-dialog-content::-webkit-scrollbar-thumb {
        background: linear-gradient(145deg, #2196f3, #1976d2);
        border-radius: 4px;
    }

    .team-dialog-content::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(145deg, #1976d2, #1565c0);
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 15px;
        border: none;
        background: none;
        font-size: 24px;
        cursor: pointer;
        color: #2c3e50;
        padding: 5px;
        transition: color 0.3s ease;
    }

    .close-button:hover {
        color: #1976d2;
    }

    .team-title, .settings-title {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .team-members {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }

    .member-card {
        background: linear-gradient(145deg, #ffffff, #e6e6e6);
        padding: 1.5rem;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s ease;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }

    .member-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    .member-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(145deg, #2196f3, #1976d2);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .member-name {
        text-align: center;
        font-size: 1rem;
        color: #2c3e50;
        font-weight: 500;
    }

    .volume-control {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: linear-gradient(145deg, #ffffff, #e6e6e6);
        border-radius: 12px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }

    .volume-icon {
        color: #2c3e50;
        font-size: 1.5rem;
    }

    .slider-container {
        flex-grow: 1;
        background: linear-gradient(145deg, #2196f3, #1976d2);
        padding: 10px;
        border-radius: 10px;
    }

    .volume-slider {
        width: 100%;
        height: 5px;
        -webkit-appearance: none;
        background: white;
        border-radius: 5px;
        outline: none;
    }

    .volume-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .volume-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        border: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        .buttons-container {
            flex-direction: column;
            gap: 1rem;
        }

        .menu-button {
            width: 200px;
        }

        .team-dialog-content, .settings-dialog-content {
            max-height: 80vh;
            padding: 1.5rem;
        }

        .team-members {
            grid-template-columns: 1fr;
        }

        .member-card {
            padding: 1rem;
        }

        .team-title, .settings-title {
            font-size: 2rem;
        }
    }
`;
