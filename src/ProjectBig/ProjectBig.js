import React from 'react'
import styles from "./ProjectBig.module.scss"
import Title from '../Title/Title'
import Skill from '../Skill/Skill'
import Button from '../Button/Button'


function ProjectBig(props) {


    return (
        <div className={styles.container}>

        <Title title={props.title} borderTopLeftRadius="20px" borderTopRightRadius="20px" color="rgb(42,42,42)"
    backgroundColor="white" margin="25px 0 0 0" boxShadow="10px 10px 1px rgba(0,0,0,.25)"/>

        <img src={props.img} alt="Project Website" />


            <div className={styles.links}>
                <Button link={props.liveLink} text="VISIT THE WEBSITE" />
                <Button link={props.githubLink} text="VISIT THE GITHUB" />
            </div>

                <h2>ABOUT THIS PROJECT</h2>
                


            <p className={styles.description}>{props.description}</p>

            <div className={styles.techStackContainer}>

                <h2>TECH STACK USED</h2>

                <ul>
                    {props.techUsed.map((a,i) => <Skill skill={a} key={i} />)}
                </ul>
            </div> 

            
        </div>
    )
}

export default ProjectBig
