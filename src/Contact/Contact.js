import React, { useEffect, useState } from 'react'
import styles from "./Contact.module.scss"
import {  FaTelegramPlane, FaLinkedin, FaGithub, } from 'react-icons/fa';
import Title from '../Title/Title';
import Input from '../Input/Input';
import {TiTick} from "react-icons/ti"
import {FiLoader} from "react-icons/fi"
import {AiOutlineWarning, AiOutlineFullscreenExit} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import Button from '../Button/Button';

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [validationErrors, setValidationErrors] = useState(null)
    const [alert, setAlert] = useState({success: false, error: false})
    const [loading, setLoading] = useState(false)

    const valueChange = (value, setValue) => {
        setValue(value)


    }



    useEffect(() => {
        const noErrorsFound = validationErrors && validationErrors.every(a => a === null) ? true : false

        const apiCall = async () => {
            console.log("api called")
            try{

                setLoading(true)

                const response = await fetch(`${process.env.REACT_APP_API}/contact`, {
                    method: "POST",
                    mode: "cors",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({name, email, message})
                })

                console.log(response.status)

                if (response.status === 200){
                    setAlert({success: true, error: false})
                    setValidationErrors(null)
                    setName("")
                    setEmail("")
                    setMessage("")
                    setLoading(false)
                }

                else if (response.status === 403){
                    const errors = await response.json()
                    setValidationErrors(errors)
                    setLoading(false)
                }

                else{
                    throw new Error()
                }

            } catch(error){
                setValidationErrors([...validationErrors, "There has been an unexpected error, please try again or use the contact methods that are stated below."])
                setAlert({success: false, error: true})
                setLoading(false)


            }
        }


        if (noErrorsFound){
            console.log(1)
            apiCall()
        }

    }, [validationErrors, email, message, name])




    const submit = (e) => {
        e.preventDefault()
        console.log(123)

        let errors = [null, null, null]

        const isRequired = (n) => {
            errors = errors.map((a,i) => i === n ? "this field is required" : a)
        }

        const customeError = (n, msg) => {
            errors = errors.map((a,i) => i === n ? msg : a)
        }

        if (name){

            if (!/^[a-zA-Z\s]*$/.test(name)){

                customeError(0, "Name should only contain letters and spaces")
            }
        } else{
            isRequired(0)
        }

        if (email){

            if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
                customeError(1, "Please enter a valid email")
            }

        } else{
            isRequired(1)
        }

        if (!message){
            isRequired(2)
        }


        console.log(errors)

        setValidationErrors(errors)

    }

    const closeModal = () => {
        setAlert({success: false, error: false})
    }

    return (
        <div className={styles.container}>


        <Title title="CONTACT ME" margin="50px 0 0 0" />



        <form onSubmit={submit}>

        {alert.success ? <div className={styles.modal}>
                <div>
                    <AiOutlineFullscreenExit size="20" className={styles.exit} onClick={closeModal}/>
                    <TiTick size="50" style={{backgroundColor: " #2ae039"}} />
                    <h5>The contact form has been sent!</h5>
                    <p>I will get back to you as soon as possible</p>
                </div>
            </div> : alert.error ? <div className={styles.modal}>
            <div>
                <AiOutlineFullscreenExit size="20" className={styles.exit} onClick={closeModal}/>
                <AiOutlineFullscreenExit size="5" />
                <AiOutlineWarning size="50" style={{backgroundColor: "#e0362a"}}/>
                <h5>There has been an unexpected error!</h5>
                <p>Please try again or use the other methods stated below to contact me</p>
            </div>
        </div> : false}

            <Input type="text" active={name ? true : false} for="name" disabled={loading} label="Name" onChange={(e) => valueChange(e.target.value,setName)} /*onClick={activate}*/ value={name} placeholder="Name" error={validationErrors ? validationErrors[0] : false}/>

            <Input type="email" active={email ? true : false} for="email" disabled={loading} label="Email" onChange={(e) => valueChange(e.target.value,setEmail)} /*onClick={activate}*/ value={email} placeholder="Email" error={validationErrors ? validationErrors[1] : false}/>

            <Input textarea={true} type="textarea" active={message ? true : false} for="message" disabled={loading} label="Message" onChange={(e) => valueChange(e.target.value,setMessage)} /*onClick={activate}*/ value={message} placeholder="Message" error={validationErrors ? validationErrors[2] : false}/>

            

{            //<p><span style={state.serverMessage.spanStyle}></span>{state.serverMessage.message}</p>
}


            {loading ? 
                <Button loading={true} icon={<FiLoader size="20"/>} />
            : <Button text="SEND MESSAGE" icon={<FaTelegramPlane size="20"/>}/>
           }


        </form>


        <div className={styles.otherWays}>
            <h2>Other Ways To Contact Me</h2>
            <p>If you'd like to contact me in a different way, please feel free to use the platforms shown below</p>
            <div className={styles.socials}>
                <a href="mailto:adanehenock@gmail.com" target="_blank" rel="noreferrer"><MdEmail size="40"/></a> 
                <a href="https://www.linkedin.com/in/henock-adane-1ab49219b" target="_blank" rel="noreferrer"><FaLinkedin size="40"/></a> 
                <a href="https://github.com/HenockAdane" target="_blank" rel="noreferrer"><FaGithub size="40"/></a>
            </div>
        </div>


            
        </div>
    )
}

export default Contact
