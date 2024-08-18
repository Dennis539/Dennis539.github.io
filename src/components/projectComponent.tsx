import styles from "./projectcomponent.module.css";
import React from "react";

interface projectComponent {
    key: number;
    name: string;
    description: string;
}

const ProjectComponent: React.FC<projectComponent> = ({
    key,
    name,
    description,
}) => {
    return (
        <div key={key} className={styles.projectCard}>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default ProjectComponent;
