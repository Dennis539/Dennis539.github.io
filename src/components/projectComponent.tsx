import styles from "./projectcomponent.module.css";
import React from "react";

interface projectComponent {
    key: number;
    name: string;
}

const ProjectComponent: React.FC<projectComponent> = ({ key, name }) => {
    return (
        <div key={key} className={styles.projectCard}>
            <h1>{name}</h1>
        </div>
    );
};

export default ProjectComponent;
