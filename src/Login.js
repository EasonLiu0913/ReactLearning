import React from 'react'
import { withRouter } from 'react-router-dom'

function Login(props) {
  console.log(props.location)
  return (
    <>
      {props.isAuth ? (
        <button onClick={() => props.doLogout()}>logout</button>
      ) : (
        <button onClick={() => props.doLogin()}>Login</button>
      )}
    </>
  )
}

export default withRouter(Login)
