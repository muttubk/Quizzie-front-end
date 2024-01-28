import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginSignupPage from './pages/LoginSigup/LoginSignupPage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import AnalyticsPage from './pages/Analytics/AnalyticsPage';
import QuizInterfacePage from './pages/QuizInterface/QuizInterfacePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignupPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/quiz-interface' element={<QuizInterfacePage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
