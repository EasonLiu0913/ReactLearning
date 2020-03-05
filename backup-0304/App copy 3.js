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
    }
    console.log('constructor')
  }

  componentDidMount() {
    const data = getDataFromServer()
    this.setState({ products: [...data] })
    console.log('componentDidMount')
  }

  render() {
    console.log('render')

    return (
      <>
        <ul>
          {this.state.products.map((value, index) => {
            return (
              <li key={index}>
                名稱:{value.name} / 價格{value.price}
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default App
