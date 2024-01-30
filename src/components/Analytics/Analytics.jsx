import React, { useEffect, useState } from 'react'
import styles from './Analytics.module.css'

import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'
import shareIcon from '../../assets/images/share.svg'

import { Link } from 'react-router-dom'
import DeleteQuizPopup from '../DeleteQuizPopup/DeleteQuizPopup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Analytics() {
    const [deletePopup, setDeletePopup] = useState(false)

    const [user] = useState(localStorage.getItem("user"))
    const [quizs, setQuizs] = useState([])
    const [selectedQuiz, setSelectedQuiz] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:5000/quiz", {
                    headers: {
                        'createdby': user
                    }
                })
                setQuizs(response.data.quizs)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [user, deletePopup])

    const handleEditQuiz = () => {
        console.log("edit quiz")
    }
    const handleDeleteQuiz = (e) => {
        setDeletePopup(true)
        setSelectedQuiz(e.target.id)
    }
    const handleShareQuiz = async (e) => {
        const quizLink = `http://localhost:3000/quiz-interface/${e.target.id}`
        try {
            await navigator.clipboard.writeText(quizLink)
            toast.success("Link copied to Clipboard");
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
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
                        {
                            quizs.map((quiz, idx) => (
                                <tr className={styles.dataRow} key={quiz._id} id={quiz._id}>
                                    <td>{idx + 1}</td>
                                    <td>{quiz.quizName}</td>
                                    <td>
                                        {
                                            new Date(quiz.createdAt).getDate()
                                            + " "
                                            + new Date(quiz.createdAt).toLocaleString('en-US', { month: "short" })
                                            + ", "
                                            + new Date(quiz.createdAt).getFullYear()
                                        }
                                    </td>
                                    <td>{quiz.impressions}</td>
                                    <td>
                                        <img id={quiz._id} className={styles.editQuiz} src={editIcon} alt="edit quiz"
                                            onClick={handleEditQuiz} />
                                        <img id={quiz._id} className={styles.deleteQuiz} src={deleteIcon} alt="delete quiz"
                                            onClick={handleDeleteQuiz} />
                                        <img id={quiz._id} className={styles.shareQuiz} src={shareIcon} alt="share quiz"
                                            onClick={handleShareQuiz} />
                                    </td>
                                    <td>
                                        <Link to={`/analytics/${quiz._id}`}
                                            className={styles.questionAnalysisLink}>
                                            Question Wise Analysis
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
            {
                deletePopup &&
                <DeleteQuizPopup quizId={selectedQuiz} setDeletePopup={setDeletePopup} />
            }
            <ToastContainer />
        </>
    )
}

export default Analytics