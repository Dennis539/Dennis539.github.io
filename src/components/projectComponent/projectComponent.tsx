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

    const [showPreview, setShowPreview] = React.useState(false)
    const [showCardContent, setShowCardContent] = React.useState(true)

    const videoPreviewOn = () => {
        setShowPreview(true)
        setShowCardContent(false)
    }

    const videoPreviewOff = () => {
        setShowPreview(false)
        setShowCardContent(true)
    }

    return (
        <div key={key} className={styles.projectCard}>
            <a
                href={link}
                className={styles.gameLink}
                onMouseEnter={() => videoPreviewOn()}
                onMouseLeave={() => videoPreviewOff()}
            >
                {" "}
                <h1>{name}</h1>
                <div></div>
                {showPreview ? (
                    <iframe
                        src={link}
                        loading="lazy"
                        className={styles.iFrameDisplay}
                    ></iframe>
                ) : null}
            </a>

            <p>{description}</p>
            <div className={styles.skillCardsContainer}>
                {showCardContent ? skillCards : null}
            </div>
        </div>
    )
}

export default ProjectComponent
