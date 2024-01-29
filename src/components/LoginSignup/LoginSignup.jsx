import React, { useEffect, useState } from 'react'
import styles from './LoginSignup.module.css'

import { useNavigate } from 'react-router-dom'

function Signup(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        setError({})
    }, [props])

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

    // Object for storing validating functions for each field
    const validate = {
        name: (() => {
            if (formData.name.length === 0) {
                return 'Name is required'
            } else {
                return ''
            }
        })(),
        email: (() => {
            if (formData.email.length === 0) {
                return 'Email is required'
            } else if (!(/\S+@\S+\.\S+/.test(formData.email))) {
                return 'Enter valid email address'
            } else {
                return ''
            }
        })(),
        password: (() => {
            if (formData.password.length === 0) {
                return 'Password is required'
            } else if (formData.password.length < 6 && props.type === 'signup') {
                return 'Minimum password length is 6'
            } else {
                return ''
            }
        })(),
        confirmPassword: (() => {
            if (formData.confirmPassword.length === 0) {
                return 'Re-enter password'
            } else if (formData.password !== formData.confirmPassword) {
                return "Passwords doesn't match"
            } else {
                return ''
            }
        })()
    }

    // To validate given fields
    const validateFields = (fields) => {
        let newErrors = {}
        fields.forEach(field => {
            newErrors[field] = validate[field]
        })
        setError(newErrors)
    }

    // handle signup
    const handleSignup = (e) => {
        e.preventDefault();
        const fields = ["name", "email", "password", "confirmPassword"]
        validateFields(fields);
        let isValid = fields.every(field => error[field] === '')
        if (isValid) {
            console.log(formData)
            navigate('/dashboard')
        } else {
            console.log(error)
        }
    }

    // For real-time validation of corresponding field
    // const handleBlur = (e) => {
    //     const { name } = e.target
    //     setErrors({
    //         ...errors, [name]: validate[name]
    //     })
    // }

    const handleLogin = (e) => {
        e.preventDefault()
        const fields = ["email", "password"]
        validateFields(fields)
        let isValid = fields.every(field => error[field] === '')
        if (isValid) {
            console.log(formData.email, formData.password)
        } else {
            console.log(error)
        }
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
                            // placeholder="Enter name"
                            style={{ border: error?.name && "1.5px solid #D60000" }}
                        />
                        {
                            error.name &&
                            <small className={styles.errorMessage}>{error.name}</small>
                        }
                    </div>
                }
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        // placeholder="Enter email"
                        style={{ border: error?.email && "1.5px solid #D60000" }}
                    />
                    {
                        error.email &&
                        <small className={styles.errorMessage}>{error.email}</small>
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        // placeholder="Enter password"
                        style={{ border: error?.password && "1.5px solid #D60000" }}
                    />
                    {
                        error.password &&
                        <small className={styles.errorMessage}>{error.password}</small>
                    }
                </div>
                {
                    props.type === 'signup' &&
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            // placeholder="Re-enter password"
                            style={{ border: error?.confirmPassword && "1.5px solid #D60000" }}
                        />
                        {
                            error.confirmPassword &&
                            <small className={styles.errorMessage}>{error.confirmPassword}</small>
                        }
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