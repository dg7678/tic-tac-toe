import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from "./components/game.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Game />
    </StrictMode>
);