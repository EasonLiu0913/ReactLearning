import React from 'react'
import { data } from '../data/index'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>學生列表頁</h1>
      <ul className="list-group">
        {data.map((value, index) => {
          return (
            <li className="list-group-item" key={value.id}>
              <Link to={'/student/?id=' + value.id}>{value.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home
