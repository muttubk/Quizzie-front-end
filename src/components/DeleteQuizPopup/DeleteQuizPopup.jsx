import React from 'react'
import styles from './DeleteQuizPopup.module.css'

function DeleteQuizPopup(props) {
    const handleDeleteQuiz = () => {
        console.log("delete quiz")
    }
    const handleCancel = () => {
        props.show(false)
    }
    return (
        <div className={styles.container}>
            <div className={styles.popupCard}>
                <p className={styles.text}>Are you confirm you want to delete ?</p>
                <div className={styles.buttonsContainer}>
                    <button className={styles.deleteBtn} onClick={handleDeleteQuiz}>
                        Confirm Delete
                    </button>
                    <button className={styles.cancelBtn} onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteQuizPopup