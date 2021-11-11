import React from 'react'
import styles from "./Title.module.scss"

function Title(props) {

    const title = props.title
    return (
        <div className={styles.titleContainer} style={{borderTopLeftRadius: props.borderTopLeftRadius, borderTopRightRadius: props.borderTopRightRadius, margin: props.margin, backgroundColor: props.backgroundColor, color: props.color, border: props.border,
            boxShadow: props.boxShadow}}>
        
            {title.split("").map((letter,i) => letter === " " ? <h1 style={{fontSize: props.fontSize}} key={i}>&nbsp;</h1> : <h1 className={styles.seperateH1} style={{fontSize: props.fontSize}} key={i}>{letter}</h1>)}
            
            <h1 className={styles.togetherH1} style={{fontSize: props.fontSize}}>{title}</h1>
        </div>
    )
}

export default Title
