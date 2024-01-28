import React, { useState } from 'react'
import styles from './CreateQuestion.module.css'
import { v4 as uuidv4 } from 'uuid'
import cx from 'classnames'

import deleteIcon from '../../assets/images/delete.svg'
import Timer from '../../components/Timer/Timer'

const correctOptionStyle = {
    backgroundColor: "#60B84B",
    color: "#fff"
}
const selectedQuestionStyle = {
    border: "2px solid #60B84B"
}

function CreateQuestion(props) {

    // individual question schema
    const questionSchema = {
        id: 'first-question',
        question: '',
        optionsType: 'text',
        options: {
            option1: {
                text: '',
                imageURL: ''
            },
            option2: {
                text: '',
                imageURL: ''
            },
        },
        correctAnswer: ''
    }

    // for storing all questions
    const [questions, setQuestions] = useState([questionSchema])
    // storing timer data
    const [timer, setTimer] = useState('OFF')
    // for selected question id
    const [selectedQuestion, setSelectedQuestion] = useState("first-question")


    // add qestion
    const handleAddQuestion = () => {
        const id = uuidv4()
        const newQuestions = [
            ...questions,
            { ...questionSchema, id: id }
        ]
        setQuestions(newQuestions)
        setSelectedQuestion(id)
    }

    // delete question
    const handleDeleteQuestion = (e) => {
        const newQuestions = questions.filter(q => q.id !== e.target.id)
        setQuestions(() => {
            setSelectedQuestion(newQuestions[newQuestions.length - 1].id)
            return newQuestions
        })
    }

    // select question
    const handleSelectQuestion = (e) => {
        // setSelectedQuestion(questions.find(q => q.id === e.target.id))
        setSelectedQuestion(e.target.id)
    }

    // get question input
    const handleQuestionInput = (e) => {
        const newQuestions = questions.map((question) => (
            question.id === selectedQuestion ?
                {
                    ...question,
                    question: e.target.value
                }
                : question
        ))
        setQuestions(newQuestions)
    }

    // options type
    const handleOptionsType = (e) => {
        const newQuestions = questions.map((question) => (
            question.id === selectedQuestion ?
                {
                    ...question,
                    optionsType: e.target.value
                }
                : question
        ))
        setQuestions(newQuestions)
    }

    // add option
    const handleAddOption = (e) => {
        const prevOptions = questions.find((q) => q.id === selectedQuestion).options
        const newOption = `option${Object.keys(prevOptions).length + 1}`
        const newQuestions = questions.map((question) => (
            question.id === selectedQuestion ?
                {
                    ...question,
                    options: {
                        ...prevOptions,
                        [newOption]: {
                            text: '',
                            imageURL: ''
                        }
                    }
                }
                : question
        ))
        setQuestions(newQuestions)
    }

    // handle delete option
    const handleDeleteOption = (e) => {
        const options = questions.find((q) => q.id === selectedQuestion).options
        if (e.target.id === 'option3' && Object.keys(options).length === 4) {
            const option4Value = { ...options.option4 }
            options.option3 = option4Value
            delete options.option4
        } else {
            delete options[e.target.id]
        }
        const newQuestions = questions.map((question) => (
            question.id === selectedQuestion ?
                {
                    ...question,
                    options: options
                }
                : question
        ))
        setQuestions(newQuestions)
    }

    // options input
    const handleOptionsInput = (e) => {
        const { id, name, value } = e.target
        const prevOptions = questions.find((q) => q.id === selectedQuestion).options
        const newQuestions = questions.map((question) => (
            question.id === selectedQuestion ?
                {
                    ...question,
                    options: {
                        ...prevOptions,
                        [name]: {
                            ...prevOptions[name],
                            [id]: value
                        }
                    }
                }
                : question
        ))
        setQuestions(newQuestions)
    }

    // get correct answer
    const handleCorrectAnswer = (e) => {
        const newQuestions = questions.map((question) => (
            question.id === selectedQuestion ?
                {
                    ...question,
                    correctAnswer: e.target.value
                }
                : question
        ))
        setQuestions(newQuestions)
    }

    // handle cancel button
    const handleCancel = () => {
        props.setQuestionsPopup(false)
    }

    const [error, setError] = useState({
        'first-question': false
    })
    const validateOptions = (type, options) => {
        let validTextOptions = true
        let validImageOptions = true
        if (type === 'text' || type === 'textAndImage') {
            validTextOptions = Object.keys(options).every(option => options[option].text.length !== 0)
        }
        if (type === 'image' || type === 'textAndImage') {
            validImageOptions = Object.keys(options).every(option => options[option].imageURL.length !== 0)
        }
        return validTextOptions && validImageOptions
    }
    const validateQuestion = (question) => {
        if (!question.question
            || (!question.correctAnswer && props.quizType === "QnA")
            || !validateOptions(question.optionsType, question.options)
        ) {
            setError((prev) => ({
                ...prev,
                [question.id]: true
            }))
            return false
        } else {
            setError((prev) => ({
                ...prev,
                [question.id]: false
            }))
            return true
        }
    }
    const handleCreateQuiz = () => {
        // const valid = questions.every(question => validateQuestion(question))
        let valid = true
        questions.forEach(question => { valid = validateQuestion(question) })
        const formData = {
            quizName: props.quizName,
            quizType: props.quizType,
            questions,
            timer
        }
        if (valid) {
            console.log(formData)
            props.setQuestionsPopup(false)
            props.setQuizPublishedPopup(true)
            props.setQuizLink("quiz link")
        } else {
            console.log('error')
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.questionNumbersContainer}>
                <div className={styles.questionNumbers}>
                    {
                        questions.map((question, idx) => (
                            <button key={idx} id={question.id} className={styles.questionNumber}
                                onClick={handleSelectQuestion}
                                style={selectedQuestion === question.id ? selectedQuestionStyle : error[question.id] ? { border: "2px solid red" } : {}}
                            >
                                {idx + 1}
                                {
                                    idx !== 0 &&
                                    <span className={styles.deleteQuestion} id={question.id}
                                        onClick={handleDeleteQuestion}
                                    >
                                        X
                                    </span>
                                }
                            </button>
                        ))
                    }
                    {
                        questions.length < 5 &&
                        <button className={styles.addQuestionBtn} onClick={handleAddQuestion}>
                            +
                        </button>
                    }
                </div>
                <p className={styles.instructionText}>Max 5 questions</p>
            </div>
            <label htmlFor="" style={{ position: "relative" }}>
                <input type="text"
                    className={cx(
                        styles.question,
                        error[selectedQuestion] && !questions.find(q => q.id === selectedQuestion).question && styles.errorBorder
                    )}
                    placeholder='Poll Question'
                    value={questions.find(q => q.id === selectedQuestion).question}
                    onChange={handleQuestionInput}
                />
                {
                    error[selectedQuestion] && !questions.find(q => q.id === selectedQuestion).question &&
                    <small className={styles.errorMessage} style={{ position: "absolute", bottom: "-1.5rem", left: "0" }}>Question required</small>
                }
            </label>
            <div className={styles.optionTypesContainer}>
                Option Type
                <label htmlFor="text">
                    <input type="radio" value="text"
                        onChange={handleOptionsType}
                        checked={questions.find(q => q.id === selectedQuestion).optionsType === "text"}
                        name="questionType" id="text" /> Text
                </label>
                <label htmlFor="image">
                    <input type="radio" value="image"
                        onChange={handleOptionsType}
                        checked={questions.find(q => q.id === selectedQuestion).optionsType === "image"}
                        name="questionType" id="image" /> Image URL
                </label>
                <label htmlFor="textAndImage">
                    <input type="radio" value="textAndImage"
                        onChange={handleOptionsType}
                        checked={questions.find(q => q.id === selectedQuestion).optionsType === "textAndImage"}
                        name="questionType" id="textAndImage" /> Text & Image URL
                </label>
            </div>
            <div className={styles.optionAndTimerContainer}>
                <div className={styles.optionsContainer}>
                    {
                        error[selectedQuestion] &&
                        !questions.find(q => q.id === selectedQuestion).correctAnswer &&
                        props.quizType === "QnA" &&
                        <small className={styles.errorMessage} style={{ position: "absolute", top: "-1.3rem", left: "0" }}>
                            Select correct answer
                        </small>
                    }
                    {
                        Object.keys(questions.find(q => q.id === selectedQuestion).options).map((option, idx) => (
                            <div key={option} className={styles.option}>
                                {
                                    props.quizType === "QnA" &&
                                    <input type="radio" name="option"
                                        className={styles.optionRadioBtn}
                                        value={option}
                                        onChange={handleCorrectAnswer}
                                        checked={questions.find(q => q.id === selectedQuestion).correctAnswer === option}
                                    />
                                }
                                {
                                    (questions.find(q => q.id === selectedQuestion).optionsType === "text" ||
                                        questions.find(q => q.id === selectedQuestion).optionsType === "textAndImage") &&
                                    <input type="text"
                                        className={cx(
                                            styles.optionInput,
                                            error[selectedQuestion] && !questions.find(q => q.id === selectedQuestion).options[option].text && styles.errorBorder
                                        )}
                                        id="text"
                                        value={questions.find(q => q.id === selectedQuestion).options[option].text}
                                        onChange={handleOptionsInput}
                                        placeholder='Text' name={option}
                                        style={questions.find(q => q.id === selectedQuestion).correctAnswer === option ?
                                            correctOptionStyle
                                            : {}
                                        }
                                    />
                                }
                                {
                                    (questions.find(q => q.id === selectedQuestion).optionsType === "image" ||
                                        questions.find(q => q.id === selectedQuestion).optionsType === "textAndImage") &&
                                    <input type="text"
                                        className={cx(
                                            styles.optionInput,
                                            error[selectedQuestion] && !questions.find(q => q.id === selectedQuestion).options[option].imageURL && styles.errorBorder
                                        )}
                                        id="imageURL"
                                        value={questions.find(q => q.id === selectedQuestion).options[option].imageURL}
                                        onChange={handleOptionsInput}
                                        placeholder='Image URL' name={option}
                                        style={questions.find(q => q.id === selectedQuestion).correctAnswer === option ?
                                            correctOptionStyle
                                            : {}
                                        }
                                    />
                                }
                                {
                                    idx >= 2 &&
                                    <img className={styles.deleteOptionIcon}
                                        id={option}
                                        src={deleteIcon} alt="delete quiz"
                                        onClick={handleDeleteOption}
                                    />
                                }
                            </div>
                        ))
                    }
                    {
                        Object.keys(questions.find(q => q.id === selectedQuestion).options).length < 4 &&
                        <button className={styles.addOptionBtn} onClick={handleAddOption}>Add option</button>
                    }
                </div>
                <div className={styles.timerContainer}>
                    {
                        props.quizType === "QnA" &&
                        <Timer setTimer={setTimer} />
                    }
                </div>
            </div>
            <div className={styles.cancelCreateBtns}>
                <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
                <button className={styles.createBtn} onClick={handleCreateQuiz}>Create Quiz</button>
            </div>
        </div >
    )
}

export default CreateQuestion