import React from 'react'
import styles from './Dashboard.module.css'

function Dashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.quiz}>
                    <span className={styles.numberSpan}>12</span> Quiz <br />Created
                </div>
                <div className={styles.questions}>
                    <span className={styles.numberSpan}>110</span> questions <br />Created
                </div>
                <div className={styles.impressions}>
                    <span className={styles.numberSpan}>1.4K</span> Total <br />Impressions
                </div>
            </div>
            <div className={styles.trendingQuizsContainer}>
                <p className={styles.trendingQuizsTitle}>Trending Quizs</p>
                <div className={styles.trendingQuizs}>
                    <div className={styles.quizCard}>Quiz 1</div>
                    <div className={styles.quizCard}>Quiz 2</div>
                    <div className={styles.quizCard}>Quiz 3</div>
                    <div className={styles.quizCard}>Quiz 4</div>
                    <div className={styles.quizCard}>Quiz 5</div>
                    <div className={styles.quizCard}>Quiz 6</div>
                    <div className={styles.quizCard}>Quiz 7</div>
                    <div className={styles.quizCard}>Quiz 1</div>
                    <div className={styles.quizCard}>Quiz 2</div>
                    <div className={styles.quizCard}>Quiz 3</div>
                    <div className={styles.quizCard}>Quiz 4</div>
                    <div className={styles.quizCard}>Quiz 5</div>
                    <div className={styles.quizCard}>Quiz 6</div>
                    <div className={styles.quizCard}>Quiz 7</div>
                    <div className={styles.quizCard}>Quiz 1</div>
                    <div className={styles.quizCard}>Quiz 2</div>
                    <div className={styles.quizCard}>Quiz 3</div>
                    <div className={styles.quizCard}>Quiz 4</div>
                    <div className={styles.quizCard}>Quiz 5</div>
                    <div className={styles.quizCard}>Quiz 6</div>
                    <div className={styles.quizCard}>Quiz 7</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard