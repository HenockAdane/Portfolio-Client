import React from 'react'
import styles from "./Portfolio.module.scss"
import ProjectSmall from '../ProjectSmall/ProjectSmall';
import Skill from '../Skill/Skill';
import Title from '../Title/Title';


function Portfolio(props) {


    return (
        <div className={styles.container}>

                <section className={styles.techStackIntro}>
                <Title title="TECHSTACK" margin="23px 0" border="1px solid" fontSize="26px" />

                    <div className={styles.techStackContainer}>
                        
                        <Skill skill="HTML"/>
                        <Skill skill="JAVASCRIPT"/>
                        <Skill skill="REACT"/>
                        <Skill skill="SASS"/>
                        <Skill skill="REDUX"/>
                        <Skill skill="NODEJS"/>
                        <Skill skill="MONGODB"/>

                    </div>
                </section>


                <section className={styles.projects}>
                <Title title="PROJECTS" margin="23px 0" border="1px solid" fontSize="26px" />
                    <div className={styles.projectsFlex}>
    
                    {props.projectDetails.map((project, index) => <ProjectSmall
                    key={index}
                    to={`/portfolio/${project.title}`}
                    title={project.title}
                    projectImg={project.img}
                    techUsed={project.techUsed.map(tech => <Skill skill={tech} />)}
                    
                    />)}
                </div>
                </section>
            
        </div>
    )
}

export default Portfolio
