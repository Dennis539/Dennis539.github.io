import styles from "./skillCard.module.css";
import React from "react";

interface skillCard {
    key: number;
    skill: string;
}

const SkillCard: React.FC<skillCard> = ({ key, skill }) => {
    return (
        <div key={key} className={styles.skillCard}>
            <p>{skill}</p>
        </div>
    );
};

export default SkillCard;
