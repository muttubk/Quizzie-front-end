import axios from 'axios'
import apiConfig from '../config/apiConfig'

const quizApi = {
    getQuizs: (headers) => axios.get(`${apiConfig.baseUrl}/quiz`, headers),
    getQuizData: (quizId, headers) => axios.get(`${apiConfig.baseUrl}/quiz/analysis/${quizId}`, headers),
    updateQuiz: (quizId, quizData, headers) => axios.patch(`${apiConfig.baseUrl}/quiz/${quizId}`, quizData, headers),
    createQuiz: (quizData) => axios.post(`${apiConfig.baseUrl}/quiz/create`, quizData),
    deleteQuiz: (quizId) => axios.delete(`${apiConfig.baseUrl}/quiz/${quizId}`),
    getQuiz: (quizId) => axios.get(`${apiConfig.baseUrl}/quiz/${quizId}`),
    submitQuiz: (id, answers) => axios.patch(`${apiConfig.baseUrl}/quiz/submit/${id}`, answers)
}

export default quizApi;