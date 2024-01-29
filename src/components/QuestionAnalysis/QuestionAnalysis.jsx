import React from 'react'
import styles from './QuestionAnalysis.module.css'

function QuestionAnalysis() {
    return (
        <div className={styles.container}>
            <div className={styles.quizDetails} >
                <p className={styles.quizName}>
                    Quiz 2 Question Analysis
                </p>
                <div>
                    <p className={styles.quizCreatedDate}>
                        Created on : 04 Sep, 2023
                    </p>
                    <p className={styles.quizImpressions}>
                        Impressions : 667
                    </p>
                </div>
            </div>
            <div className={styles.questionContainer}>
                <p className={styles.question}>Q.1 Question place holder for analysis ? </p>
                <div className={styles.questionDetails}>
                    <p className={styles.info}>
                        <span className={styles.value}>60</span><br />
                        people Attempted the question
                    </p>
                    <p className={styles.info}>
                        <span className={styles.value}>38</span><br />
                        people Answered correctly
                    </p>
                    <p className={styles.info}>
                        <span className={styles.value}>22</span><br />
                        people Answered incorrectly
                    </p>
                </div>
            </div>
            <div className={styles.questionContainer}>
                <p className={styles.question}>Q.1 Question place holder for analysis ? </p>
                <div className={styles.questionDetails}>
                    <p className={styles.info}>
                        <span className={styles.value}>60</span><br />
                        people Attempted the question
                    </p>
                    <p className={styles.info}>
                        <span className={styles.value}>38</span><br />
                        people Answered correctly
                    </p>
                    <p className={styles.info}>
                        <span className={styles.value}>22</span><br />
                        people Answered incorrectly
                    </p>
                </div>
            </div>
            <div className={styles.questionContainer}>
                <p className={styles.question}>Q.1 Question place holder for analysis ? </p>
                <div className={styles.questionDetails}>
                    <p className={styles.info}>
                        <span className={styles.value}>60</span><br />
                        people Attempted the question
                    </p>
                    <p className={styles.info}>
                        <span className={styles.value}>38</span><br />
                        people Answered correctly
                    </p>
                    <p className={styles.info}>
                        <span className={styles.value}>22</span><br />
                        people Answered incorrectly
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuestionAnalysis