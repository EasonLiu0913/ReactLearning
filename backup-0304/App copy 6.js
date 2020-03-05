import React, { useState, useEffect } from 'react'

function getDataFromServer() {
  return [
    { name: 'iphone x', price: 15000 },
    { name: 'book', price: 200 },
  ]
}

function App(props) {
  const [products, setProducts] = useState([])
  const [dataHasLoaded, setDataHasLoaded] = useState(false)
  const [reload, setReload] = useState(false)
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  // 與componentDidMount相等的勾子寫法
  useEffect(() => {
    // Your code here
    const data = getDataFromServer()
    setTimeout(() => {
      setProducts(data)
      setDataHasLoaded(true)
    }, 3000)
    console.log('useEffect Run')
  }, [reload])

  useEffect(() => {
    // Your code here
    let total = 0
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price
    }
    setTotalPrice(total)
  }, [cart])

  // 處理重新載入-componentDidUpdate
  const handleReload = () => {
    setDataHasLoaded(false)
    setReload(!reload)
  }

  const addToCart = value => {
    const newCart = [...cart, value]
    setCart(newCart)
  }

  const loading = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  const dataList = (
    <ul>
      {products.map((value, index) => {
        return (
          <li key={index}>
            名稱:{value.name} / 價格{value.price}{' '}
            <button onClick={() => addToCart(value)}>加入購物</button>
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      <div className="container">
        {!dataHasLoaded ? loading : dataList}
        <button onClick={handleReload}>重新載入</button>
        <hr />
        購物車：共有 {cart.length} 樣商品，總價 {totalPrice}
      </div>
    </>
  )
}

export default App
