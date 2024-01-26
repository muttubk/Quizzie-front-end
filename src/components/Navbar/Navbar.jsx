import React from 'react'
import styles from './Navbar.module.css'

import Logo from '../Logo/Logo'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
    const navigate = useNavigate()

    const gotoDashboard = () => {
        navigate('/dashboard')
    }
    const gotoAnalytics = () => {
        navigate('/analytics')
    }
    const gotoCreateQuiz = () => {
        console.log("go to create quiz")
    }
    const handleLogout = () => {
        console.log("handle logout")
    }
    return (
        <div className={styles.container}>
            <Logo size='3.5rem' />
            <div className={styles.menuOptions}>
                <button className={styles.dashboardBtn}
                    style={{ boxShadow: props.page === 'dashboard' && "0px 0px 14px 0px rgba(0, 0, 0, 0.12)" }}
                    onClick={gotoDashboard}>
                    Dashboard
                </button>
                <button className={styles.analyticsBtn}
                    style={{ boxShadow: props.page === 'analytics' && "0px 0px 14px 0px rgba(0, 0, 0, 0.12)" }}
                    onClick={gotoAnalytics}>
                    Analytics
                </button>
                <button className={styles.createQuizBtn}
                    style={{ boxShadow: props.page === 'createQuiz' && "0px 0px 14px 0px rgba(0, 0, 0, 0.12)" }}
                    onClick={gotoCreateQuiz}>
                    Create Quiz
                </button>
            </div>
            <div className={styles.logoutBtnContainer}>
                <button className={styles.logoutBtn}
                    onClick={handleLogout}>
                    LOGOUT
                </button>
            </div>
        </div>
    )
}

export default Navbar