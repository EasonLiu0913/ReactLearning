import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Student from './pages/Student'
import Login from './Login'

import { data } from './data/index'
import ProtectRoute from './ProtectedRoute'

function App() {
  const [auth, setAuth] = useState(false)

  const doLogin = () => {
    setAuth(true)
  }

  // 進行登出
  const doLogout = () => {
    setAuth(false)
  }
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/student">學生詳細頁</Link>
          </li>
          {auth && (
            <li>
              <Link to="/login">登出入頁</Link>
            </li>
          )}
        </ul>
        <div className="container">
          <Switch>
            <ProtectRoute path="/student">
              <Student isAuth={auth} />
            </ProtectRoute>
            <Route path="/login">
              <Login isAuth={auth} doLogin={doLogin} doLogout={doLogout} />
            </Route>
            <ProtectRoute exact path="/">
              <Home isAuth={auth} />
            </ProtectRoute>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
