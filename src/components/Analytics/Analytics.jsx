import React from 'react'
import styles from './Analytics.module.css'

import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'
import shareIcon from '../../assets/images/share.svg'

import { Link } from 'react-router-dom'

function Analytics() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Quiz Analysis</p>
            <table className={styles.analysisTable}>
                <tr className={styles.headingRow}>
                    <th>S.No</th>
                    <th>Quiz Name</th>
                    <th>Created On</th>
                    <th>Impression</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr className={styles.dataRow}>
                    <td>1</td>
                    <td>Quiz 1</td>
                    <td>01 Sep, 2023</td>
                    <td>345</td>
                    <td>
                        <img className={styles.editQuiz} src={editIcon} alt="edit quiz" />
                        <img className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz" />
                        <img className={styles.shareQuiz} src={shareIcon} alt="share quiz" />
                    </td>
                    <td>
                        <Link className={styles.questionAnalysisLink}>Question Wise Analysis</Link>
                    </td>
                </tr>
                <tr className={styles.dataRow}>
                    <td>2</td>
                    <td>Quiz 2</td>
                    <td>04 Sep, 2023</td>
                    <td>667</td>
                    <td>
                        <img className={styles.editQuiz} src={editIcon} alt="edit quiz" />
                        <img className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz" />
                        <img className={styles.shareQuiz} src={shareIcon} alt="share quiz" />
                    </td>
                    <td>
                        <Link className={styles.questionAnalysisLink}>Question Wise Analysis</Link>
                    </td>
                </tr>
                <tr className={styles.dataRow}>
                    <td>3</td>
                    <td>Quiz 3</td>
                    <td>04 Sep, 2023</td>
                    <td>667</td>
                    <td>
                        <img className={styles.editQuiz} src={editIcon} alt="edit quiz" />
                        <img className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz" />
                        <img className={styles.shareQuiz} src={shareIcon} alt="share quiz" />
                    </td>
                    <td>
                        <Link className={styles.questionAnalysisLink}>Question Wise Analysis</Link>
                    </td>
                </tr>
                <tr className={styles.dataRow}>
                    <td>4</td>
                    <td>Quiz 4</td>
                    <td>04 Sep, 2023</td>
                    <td>667</td>
                    <td>
                        <img className={styles.editQuiz} src={editIcon} alt="edit quiz" />
                        <img className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz" />
                        <img className={styles.shareQuiz} src={shareIcon} alt="share quiz" />
                    </td>
                    <td>
                        <Link className={styles.questionAnalysisLink}>Question Wise Analysis</Link>
                    </td>
                </tr>
            </table>
        </div >
    )
}

export default Analytics