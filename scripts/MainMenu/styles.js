export const menuStyles = `
    .menu-container {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 97vh;
        padding-bottom: 3vh;
    }
    
    .buttons-container {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 800px;
    }
    
    .menu-button {
        position: relative;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        background-color: #6b5b7b;
        transition: all 0.3s ease;
        width: 240px;

        background-image: linear-gradient(#6b5b7b, #6b5b7b), linear-gradient(90deg,rgb(186, 190, 189),rgb(171, 170, 228));
        background-origin: border-box;
        background-clip: padding-box, border-box;
        border: 4px solid transparent;
    }
    
    .menu-button:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(107, 91, 123, 0.5);
    }

    .team-dialog {
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
    
    .team-dialog-content {
        background-color: white;
        padding: 2rem;
        border-radius: 15px;
        position: relative;
        transform: scale(0.8);
        transition: transform 0.3s ease;
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
    }

    .team-dialog-content::-webkit-scrollbar {
        width: 8px;
    }
    
    .team-dialog-content::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }
    
    .team-dialog-content::-webkit-scrollbar-thumb {
        background: #6b5b7b;
        border-radius: 4px;
    }
    
    .team-dialog-content::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    
    .close-button {
        position: absolute;
        top: 10px;
        right: 15px;
        border: none;
        background: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        padding: 5px;
    }
    
    .team-title {
        text-align: center;
        color: #6b5b7b;
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    
    .team-members {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }
    
    .member-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-radius: 10px;
        background-color: #f8f9fa;
        transition: transform 0.3s ease;
    }
    
    .member-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .member-icon {
        width: 60px;
        height: 60px;
        background-color: #6b5b7b;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .member-name {
        text-align: center;
        font-size: 1.1rem;
        color: #333;
        font-weight: 500;
    }

    .settings-dialog {
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
    
    .settings-dialog-content {
        background-color: white;
        padding: 2rem;
        border-radius: 15px;
        position: relative;
        transform: scale(0.8);
        transition: transform 0.3s ease;
        max-width: 500px;
        width: 90%;
    }
    
    .settings-title {
        text-align: center;
        color: #6b5b7b;
        margin-bottom: 2rem;
        font-size: 2rem;
        font-weight: bold;
    }
    
    .volume-control {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }
    
    .volume-icon {
        color: #6b5b7b;
        font-size: 1.5rem;
    }
    
    .slider-container {
        flex-grow: 1;
        background: #6b5b7b;
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
        appearance: none;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        cursor: pointer;
    }
    
    .volume-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        border: none;
    }

    @media (max-width: 768px) {
        .buttons-container {
            flex-direction: column;
            gap: 1rem;
        }
        
        .menu-button {
            min-width: 200px;
        }
        
        .team-dialog-content {
            max-height: 80vh;
            padding: 1.5rem;
        }
        
        .team-members {
            grid-template-columns: 1fr;
        }
        
        .member-card {
            padding: 0.8rem;
        }
    }
`;