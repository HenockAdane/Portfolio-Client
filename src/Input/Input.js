import React from 'react'
import styles from "./Input.module.scss"

function Input(props) {
    return (
        props.textarea === "textarea" ? <div className={props.active ? `${styles.inputContainer} ${styles.active}`: styles.inputContainer}>
        <div>
            <label  for={props.for} style={props.error ? {color: "red"}: props.disabled ? {color: "gray"} : {}}>{props.label}</label>
            
        </div>
        <textarea name={props.for} placeholder={props.placeholder} onChange={props.onChange} value={props.value} style={props.error ? {border: "1px solid red", boxShadow: "5px 5px 2px rgb(255, 0, 0, 0.9)"}: {}}></textarea>
        <p>{props.error}</p>
        <p className={styles.details}>{props.details}</p>
    </div>:<div className={props.active || props.error ? `${styles.inputContainer} ${styles.active}`: styles.inputContainer}>
            <div>
                <label  for={props.for} style={props.error ? {color: "red"}: props.disabled ? {color: "white"} : {}}>{props.label}</label>
                
            </div>
            <input type={props.type} name={props.for} disabled={props.disabled} onChange={props.onChange} onClick={props.onClick} value={props.value} placeholder={props.placeholder} style={props.error ? {border: "1px solid red", boxShadow: "5px 5px 2px rgb(255, 0, 0, 0.9)"}: props.disabled ? {boxShadow: "none"}: {}}/>
            <p>{props.error}</p>
            <p className={styles.details}>{props.details}</p>
        </div>
    )
}

export default Input
// <div className={validationErrors[2] ? `${styles.inputContainer} ${styles.error}` : styles.inputContainer}>
//                 <BiPencil />
//                 <textarea name="message" placeholder="Your Message" onChange={(e)=> valueChange(e.target.value, setMessage)} value={message} style={{height: state.messageInput.height}}></textarea>
//                 <p>{state.messageInput.value.length}/300</p>
//             </div>