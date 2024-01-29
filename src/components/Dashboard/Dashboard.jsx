import React from 'react'
import styles from './Dashboard.module.css'
import TrendingQuizCard from '../TrendingQuizCard/TrendingQuizCard'

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
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                    <TrendingQuizCard quizName="Quiz 1" impressions="667" createdDate="23 Sep, 2023" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard