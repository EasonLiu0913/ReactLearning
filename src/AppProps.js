import React from 'react'
import Text from './component/Text'

class AppProps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value })
          }}
        />
        <br />
        <Text name={this.state.name} />
      </>
    )
  }
}

export default AppProps
