// import { useState } from 'react'
import "./App.css";
import Projects from "../projects.ts";

function App() {
    return (
        <>
            <header>
                <h1>Dennis Vriend's Github Pages</h1>
            </header>
            <li>
                <a href="https://Dennis539.github.io/SpaceInvaders">
                    Space invaders
                </a>
                {/* <br>Simple game resembling the original space invaders game build in Typescript</br> */}
            </li>
            <li>
                <a href="https://dennis539.github.io/PacmanAlgo/">
                    Pacman clone
                </a>
            </li>
        </>
    );
}

export default App;
