import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginSignupPage from './pages/LoginSigup/LoginSignupPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignupPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
