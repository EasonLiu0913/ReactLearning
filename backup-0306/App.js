import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Student from './pages/Student'
import Login from './pages/Login'

import ProtectedRoute from './utils/ProtectedRoute'

import { data } from './data/index'

function App() {
  const [auth, setAuth] = useState(false)

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
          <li>
            <Link to="/login">登入/登出</Link>
          </li>
        </ul>
        <div className="container">
          <Switch>
            <Route path="/login">
              <Login
                isAuth={auth}
                login={() => setAuth(true)}
                logout={() => setAuth(false)}
              />
            </Route>
            <ProtectedRoute path="/student/:id?">
              <Student isAuth={auth} />
            </ProtectedRoute>
            <ProtectedRoute exact path="/">
              <Home isAuth={auth} />
            </ProtectedRoute>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
