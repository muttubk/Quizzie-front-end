import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginSignupPage from './pages/LoginSigup/LoginSignupPage'
import DashboardPage from './pages/Dashboard/DashboardPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignupPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
