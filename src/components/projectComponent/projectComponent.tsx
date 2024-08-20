import styles from "./projectcomponent.module.css"
import React from "react"
import SkillCard from "../skillCard/skillCard.tsx"
// import { useNavigate } from "react-router-dom"

interface projectComponent {
    key: number
    name: string
    description: string
    skills: Array<string>
    link: string
}

const ProjectComponent: React.FC<projectComponent> = ({
    key,
    name,
    description,
    skills,
    link,
}) => {
    const skillCards = skills.map((skill) => (
        <SkillCard key={key} skill={skill} />
    ))

    // const navigate = useNavigate()

    // const handleClick = () => {
    //     navigate(link)
    // }

    return (
        <div key={key} className={styles.projectCard}>
            <a href={link} className={styles.gameLink}>
                {" "}
                <h1>{name}</h1>
                <iframe src={link} loading="lazy"></iframe>
            </a>

            <p>{description}</p>
            <div className={styles.skillCardsContainer}>{skillCards}</div>
        </div>
    )
}

export default ProjectComponent
