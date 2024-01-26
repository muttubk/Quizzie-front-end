import React, { useState } from 'react'
import styles from './LoginSignup.module.css'

function Signup(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        setError({
            ...error,
            [name]: ''
        })
    }

    // const validateName = () => {
    //     if (!formData.name) {
    //         setError((prev) => ({ ...prev, name: "Name is required" }))
    //     }
    //     else {
    //         setError((prev) => ({ ...prev, name: '' }))
    //     }
    // }
    // const validateEmail = () => {
    //     if (!formData.email) {
    //         setError((prev) => ({ ...prev, email: "Email is required" }))
    //     }
    //     else if (!(/\S+@\S+\.\S+/.test(formData.email))) {
    //         setError((prev) => ({ ...prev, email: 'Invalid email' }))
    //     }
    //     else {
    //         setError((prev) => ({ ...prev, email: '' }))
    //     }
    // }
    // const validatePassword = () => {
    //     if (!formData.password) {
    //         setError((prev) => ({ ...prev, password: "Password is required" }))
    //     }
    //     else {
    //         setError((prev) => ({ ...prev, password: '' }))
    //     }
    // }
    // const validateConfirmPassword = () => {
    //     if (!formData.confirmPassword) {
    //         setError((prev) => ({ ...prev, confirmPassword: "Re-enter password" }))
    //     }
    //     else if (formData.confirmPassword !== formData.password) {
    //         setFormData({
    //             ...formData,
    //             confirmPassword: ''
    //         })
    //         setError((prev) => ({ ...prev, confirmPassword: "Password doesn't match" }))
    //     }
    //     else {
    //         setError((prev) => ({ ...prev, confirmPassword: '' }))
    //     }
    // }

    const handleSignup = (e) => {
        e.preventDefault()
        // validateName()
        // validateEmail()
        // validatePassword()
        // validateConfirmPassword()

        // if (Object.keys(error).every(item => !error[item])) {
        //     console.log(formData)
        // }
        // else {
        //     console.log("Invalid form data")
        // }
        console.log("handle sign up")
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log("handle login")
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                {
                    props.type === 'signup' &&
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={error.name}
                            style={{ border: error?.name && "1.5px solid #D60000" }}
                        />
                    </div>
                }
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={error.email}
                        style={{ border: error?.email && "1.5px solid #D60000" }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder={error.password}
                        style={{ border: error?.password && "1.5px solid #D60000" }}
                    />
                </div>
                {
                    props.type === 'signup' &&
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder={error.confirmPassword}
                            style={{ border: error?.confirmPassword && "1.5px solid #D60000" }}
                        />
                    </div>
                }
                {
                    props.type === 'signup' &&
                    <button className={styles.signupBtn} onClick={handleSignup}>Sign-Up</button>
                }
                {
                    props.type === 'login' &&
                    <button className={styles.loginBtn} onClick={handleLogin}>Log In</button>
                }
            </form>
        </div>
    )
}

export default Signup