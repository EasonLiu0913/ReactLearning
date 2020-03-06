import React, { useState, useEffect } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)

  async function getTotalFromLocalStorage() {
    // 開啟載入指示
    setDataLoading(true)

    let newTotal = 0
    if (localStorage.getItem('total')) {
      newTotal = localStorage.getItem('total')
    }

    localStorage.setItem('total', newTotal)

    // 設定資料
    setTotal(newTotal)
  }

  async function updateTotalToLocalStorage(value) {
    // 開啟載入指示
    setDataLoading(true)

    const newTotal = +total + value
    localStorage.setItem('total', newTotal)

    // 設定資料
    setTotal(newTotal)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getTotalFromLocalStorage()
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
      <button onClick={() => updateTotalToLocalStorage(1)}>+1</button>
    </>
  )

  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default App
