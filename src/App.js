import React from 'react'
import NumberGrid from './components/NumberGrid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clickedNumber: null }
  }

  handleClick = (number) => {
    this.setState({ clickedNumber: number })
  };

  render() {
    const style = {
      backgroundColor: 'lightblue',
      color: 'darkblue',
      padding: '10px',
      margin: '10px'
    }
    return (
      <div>
        <NumberGrid onClick={this.handleClick} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={style}>
            {this.state.clickedNumber ? `You've clicked ${this.state.clickedNumber}` : ""}
          </div>
        </div>
      </div>
    )
  }
}

export default App