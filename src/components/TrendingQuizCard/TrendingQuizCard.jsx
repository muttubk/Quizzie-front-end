import React from 'react'
import styles from './TrendingQuizCard.module.css'

import eyesIcon from '../../assets/images/eyes.svg'

function TrendingQuizCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.nameAndImpressionContainer}>
                <p className={styles.quizName}>
                    {props.quizName}
                </p>
                <div className={styles.impressionsContainer}>
                    <p className={styles.impressions}>
                        {props.impressions}
                    </p>
                    <img src={eyesIcon} alt="" />
                </div>
            </div>
            <p className={styles.createdDate}>
                Created on : {props.createdDate}
            </p>
        </div>
    )
}

export default TrendingQuizCard