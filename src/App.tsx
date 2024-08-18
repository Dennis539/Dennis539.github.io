// import { useState } from 'react'
import styles from "./app.module.css";
import Projects from "../projects.ts";
import ProjectComponent from "./components/projectComponent.tsx";

function App() {
    const projectStruct = Projects.map((project, index) => (
        <ProjectComponent key={index} name={project.Name} />
    ));
    return (
        <>
            <header>
                <h1>Dennis Vriend's Github Pages</h1>
            </header>
            <div className={styles.projectsGrid}>{projectStruct}</div>
        </>
    );
}

export default App;
