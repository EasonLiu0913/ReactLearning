import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -
        </button>
      </>
    )
  }
}

export default App
