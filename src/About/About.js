import React from 'react'
import styles from "./About.module.scss"
import {Link } from "react-router-dom"
import Title from "../Title/Title.js"

function About() {


    return (
        <div className={styles.container}>
            
                {/* <h1>Welcome, my name is Henock Adane.</h1> */}
                <Title title="Welcome, my name is Henock Adane." margin="25px 0" />




                <p className={styles.introMsg}>I am a self taught Full-stack Developer who is proficient with creating single or multi-page websites with interactive UX animations and a UI that will have responsive view for desktops, laptops, tablets and mobiles. I am also able to create and integrate secure services that may be needed, such as contact forms, payments, user authorization and authentication. Check out my projects on the <Link to="/portfolio">Portfolio Page</Link> or contact me on the <Link to="/contact">Contact Page</Link>.</p>


            
        </div>
    )
}

export default About
