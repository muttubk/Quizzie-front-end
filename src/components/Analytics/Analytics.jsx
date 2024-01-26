import React, { useState } from 'react'
import styles from './Analytics.module.css'

import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'
import shareIcon from '../../assets/images/share.svg'

import { Link } from 'react-router-dom'
import DeleteQuizPopup from '../DeleteQuizPopup/DeleteQuizPopup'

function Analytics() {
    const [deletePopup, setDeletePopup] = useState(false)

    const handleEditQuiz = () => {
        console.log("edit quiz")
    }
    const handleDeleteQuiz = () => {
        setDeletePopup(true)
    }
    const handleShareQuiz = () => {
        console.log("share quiz")
    }
    return (
        <>
            <div className={styles.container}>
                <p className={styles.title}>Quiz Analysis</p>
                <table className={styles.analysisTable}>
                    <thead>
                        <tr className={styles.headingRow}>
                            <th>S.No</th>
                            <th>Quiz Name</th>
                            <th>Created On</th>
                            <th>Impression</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.dataRow}>
                            <td>1</td>
                            <td>Quiz 1</td>
                            <td>01 Sep, 2023</td>
                            <td>345</td>
                            <td>
                                <img className={styles.editQuiz} src={editIcon} alt="edit quiz"
                                    onClick={handleEditQuiz} />
                                <img className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz"
                                    onClick={handleDeleteQuiz} />
                                <img className={styles.shareQuiz} src={shareIcon} alt="share quiz"
                                    onClick={handleShareQuiz} />
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
                                <img className={styles.editQuiz} src={editIcon} alt="edit quiz"
                                    onClick={handleEditQuiz} />
                                <img className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz"
                                    onClick={handleDeleteQuiz} />
                                <img className={styles.shareQuiz} src={shareIcon} alt="share quiz"
                                    onClick={handleShareQuiz} />
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
                                <img className={styles.editQuiz} src={editIcon} alt="edit quiz"
                                    onClick={handleEditQuiz} />
                                <img className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz"
                                    onClick={handleDeleteQuiz} />
                                <img className={styles.shareQuiz} src={shareIcon} alt="share quiz"
                                    onClick={handleShareQuiz} />
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
                                <img className={styles.editQuiz} src={editIcon} alt="edit quiz"
                                    onClick={handleEditQuiz} />
                                <img className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz"
                                    onClick={handleDeleteQuiz} />
                                <img className={styles.shareQuiz} src={shareIcon} alt="share quiz"
                                    onClick={handleShareQuiz} />
                            </td>
                            <td>
                                <Link className={styles.questionAnalysisLink}>Question Wise Analysis</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
            {
                deletePopup &&
                <DeleteQuizPopup show={setDeletePopup} />
            }
        </>
    )
}

export default Analytics