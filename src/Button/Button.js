import React from 'react'
import styles from "./Button.module.scss"
function Button(props) {
    return (
        props.link ? <a className={styles.Btn} href={props.link} target="_blank" rel="noreferrer"><span>{props.text}</span></a> : <button type={props.loading ? "button" : "submit"} className={props.loading ? `${styles.Btn} ${styles.rotate}` : styles.Btn} disabled={props.loading}><span>{props.text}</span>{props.icon}</button>

    )
}

export default Button
