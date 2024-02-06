import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogInPage from './pages/Login_Page'
import routes from './constants/routes'
import SignUpPage from './pages/SignUp_Page'
import HomePage from './pages/Home__Page'
import ResetPasswordPage from './pages/ResetPassord_page'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={routes.logIn()} element={<LogInPage/>}/>
          <Route path={routes.signUp()} element={<SignUpPage/>}/>
          <Route path={routes.home()} element={<HomePage/>}/>
          <Route path={routes.restPassword()} element={<ResetPasswordPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
