import React from 'react'
import styles from "./Skill.module.scss"
function Skill(props) {
    return (
        <li className={styles.Skill}><span className={styles.techBtn}>{props.skill}</span></li>
    )
}
export default Skill
