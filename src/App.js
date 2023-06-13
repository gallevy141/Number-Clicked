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
    return (
      <div className="container text-center">
        <NumberGrid onClick={this.handleClick} />
        <div className="bg-light text-dark m-2 p-2">
          {this.state.clickedNumber ? `You've clicked ${this.state.clickedNumber}` : ""}
        </div>
      </div>
    )
  }
}

export default App