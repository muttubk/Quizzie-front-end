import React from 'react'
import styles from './CreateQuizPage.module.css'

import CreateQuiz from '../../components/CreateQuiz/CreateQuiz'

function CreateQuizPage(props) {
    return (
        <div className={styles.container}>
            <CreateQuiz showCreateQuizPopup={props.showCreateQuizPopup} />
        </div>
    )
}

export default CreateQuizPage