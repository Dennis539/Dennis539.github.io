// import { useState } from "react";
import styles from "./app.module.css"
import Projects from "../projects.ts"
import ProjectComponent from "./components/projectComponent/projectComponent.tsx"

function App() {
    const projectStruct = Projects.map((project, index) => (
        <ProjectComponent
            key={index}
            name={project.Name}
            description={project.Description}
            skills={project.Skills}
            link={project.Url}
        />
    ))
    return (
        <>
            <header>
                <h1>Dennis Vriend's Github Pages</h1>
            </header>
            <div className={styles.projectsDescription}>
                <div>
                    <h1>Projects</h1>
                    <p>
                        Some of the personal project where I have been working
                        on for the last few years
                    </p>
                </div>
            </div>
            <div className={styles.projectGridWrapper}>
                <div className={styles.projectsGrid}>{projectStruct}</div>
            </div>
            <footer>
                Created by{" "}
                <a href="https://github.com/Dennis539">Dennis Vriend</a>
            </footer>
        </>
    )
}

export default App
