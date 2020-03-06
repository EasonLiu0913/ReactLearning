import React, { useState, useEffect } from 'react'

function ProductList() {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function updateCartToLocalStorage(value) {
    // 開啟載入指示
    setDataLoading(true)

    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    console.log('currentCart', currentCart)

    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))

    console.log('newCart', newCart)
    // 設定資料
    setMycart(newCart)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    //getTotalFromLocalStorage()
  }, [])

  // 每次total資料有變動就會3秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [mycart])

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
      <div className="card-deck">
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">iphone XS</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text text-danger">NTD 15000元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 1,
                  name: 'iphone x',
                  amount: 1,
                  price: 15000,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Book</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text text-danger">NTD 200元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 3,
                  name: 'book',
                  amount: 1,
                  price: 200,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">iPad</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text text-danger">NTD 21000元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 2,
                  name: 'ipad',
                  amount: 1,
                  price: 21000,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default ProductList
