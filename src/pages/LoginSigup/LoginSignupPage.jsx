import React, { useState } from 'react'
import styles from './LoginSignupPage.module.css'

import Logo from '../../components/Logo/Logo'
import LoginSignup from '../../components/LoginSignup/LoginSignup'

function LoginSignupPage() {
    const [activeButton, setActiveButton] = useState('signup')
    return (
        <div className={styles.container}>
            <div className={styles.formsContainer}>
                <Logo size={"4rem"} />
                <div className={styles.buttonsContainer}>
                    <button className={styles.signupBtn}
                        onClick={() => setActiveButton('signup')}
                        style={{ boxShadow: activeButton === 'signup' && "0px 0px 40px 2px rgba(0, 25, 255, 0.24)" }}
                    >
                        Sign Up
                    </button>
                    <button className={styles.loginBtn}
                        onClick={() => setActiveButton('login')}
                        style={{ boxShadow: activeButton === 'login' && "0px 0px 40px 2px rgba(0, 25, 255, 0.24)" }}
                    >
                        Log In
                    </button>
                </div>
                {
                    activeButton === 'signup' ?
                        <LoginSignup type="signup" /> : <LoginSignup type="login" />
                }
            </div>
        </div>
    )
}

export default LoginSignupPage