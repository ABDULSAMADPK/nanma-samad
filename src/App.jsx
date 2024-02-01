import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogInPage from './pages/Login_Page'
import routes from './constants/routes'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={routes.logIn()} element={<LogInPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
