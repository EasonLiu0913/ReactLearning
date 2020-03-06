import React, { useState, useEffect } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)

  async function getTotalFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setTotal(data.total)
  }

  async function updateTotalToSever(value) {
    // 開啟載入指示
    setDataLoading(true)

    const newTotal = { total: total + value }

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'PUT',
      body: JSON.stringify(newTotal),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newTotal))

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setTotal(total + value)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getTotalFromServer()
  }, [])

  // 每次total資料有變動就會3秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [total])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <h1>{total}</h1>
      <button onClick={() => updateTotalToSever(1)}>+1</button>
    </>
  )

  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default App
