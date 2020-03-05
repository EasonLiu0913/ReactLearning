import React from 'react'
// 要先安裝jquery 模組
// yarn add jquery或npm instal jquery
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)
    // product = { name: string, price: numbers }
    this.state = {
      data: 0,
    }

    // 先宣告ref
    this.buttonOneRef = React.createRef()
  }

  componentDidMount() {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    //jquery使用ref的current值來獲取dom元素
    $(this.buttonOneRef.current).click(() =>
      alert('data is ' + this.state.data)
    )
  }

  render() {
    return (
      <>
        {/* 套用ref值 */}
        <button ref={this.buttonOneRef}>click me</button>
        <button onClick={() => this.setState({ data: 111 })}>
          change to 111
        </button>
      </>
    )
  }
}

export default App
