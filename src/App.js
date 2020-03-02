import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  // 利用物件計算得來的屬性名稱，讓所有的輸入框用共一個方法
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <>
        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">帳號</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="請輸入帳號"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">密碼</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="請輸入密碼"
                onChange={this.handleInput}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              送出
            </button>
            {/* style屬性要注意，值必需是一個物件值*/}
            <span style={{ color: 'red', fontSize: 20 }}>注意事項：xxxx</span>
          </form>
        </div>
      </>
    )
  }
}

export default App
