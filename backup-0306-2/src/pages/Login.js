import React from 'react'
import { withRouter } from 'react-router-dom'

function Login(props) {
  console.log(props)

  return (
    <>
      <h1>目前登入狀態：{props.isAuth ? '登入中登入中' : '沒登入'}</h1>
      {props.isAuth ? (
        <button onClick={props.logout}>登出</button>
      ) : (
        <button onClick={props.login}>讓我我登入</button>
      )}
    </>
  )
}

export default withRouter(Login)
