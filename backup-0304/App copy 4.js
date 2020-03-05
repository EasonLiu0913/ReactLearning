import React from 'react'

function getDataFromServer() {
  return [
    { name: 'iphone x', price: 15000 },
    { name: 'book', price: 200 },
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    // product = { name: string, price: numbers }
    this.state = {
      products: [],
      dataHasLoaded: false,
    }
    console.log('constructor')
  }

  componentDidMount() {
    const data = getDataFromServer()
    setTimeout(
      () => this.setState({ products: [...data], dataHasLoaded: true }),
      3000
    )
    console.log('componentDidMount')
  }

  render() {
    const loading = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )

    const dataList = (
      <ul>
        {this.state.products.map((value, index) => {
          return (
            <li key={index}>
              名稱:{value.name} / 價格{value.price}
            </li>
          )
        })}
      </ul>
    )

    return (
      <>
        <div className="container">
          {!this.state.dataHasLoaded ? loading : dataList}
        </div>
      </>
    )
  }
}

export default App
