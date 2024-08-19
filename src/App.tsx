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
            <div>
                <h1>Hello world</h1>
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
