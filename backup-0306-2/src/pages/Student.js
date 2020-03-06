import React from 'react'
import { data } from '../data/index'
import { withRouter } from 'react-router-dom'

function Student({ location, history }) {
  //console.log('props.location.search', props.location.search)
  // 利用內建的API來得到URLSearchParams物件 (注意IE完全不相容，要改用query-string模組)
  const searchParams = new URLSearchParams(location.search)
  // 尋找資料，沒找時會是null
  const id = searchParams.get('id')
  let student = null

  for (let i = 0; i < data.length; i++) {
    if (data[i].id === +id) {
      student = data[i]
    }
  }

  if (student === null) {
    return (
      <>
        <h1>沒找到資料</h1>
        <button onClick={() => history.push('/')}>回首頁</button>
      </>
    )
  }

  return (
    <>
      <h1>學生詳細資料</h1>
      <ul className="list-group">
        <li className="list-group-item active">{student.name}</li>
        <li className="list-group-item">{student.id}</li>
        <li className="list-group-item">{student.birth}</li>
      </ul>
      <button onClick={() => history.push('/')}>回首頁</button>
    </>
  )
}

export default withRouter(Student)
