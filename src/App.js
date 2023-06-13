import React from 'react'
import NumberRow from './components/NumberRow'
import NumberDisplay from './components/NumberDisplay'
import './App.css'

class App extends React.Component {
  state = {
    clickedNumber: null,
  };

  handleClick = (number) => {
    this.setState({ clickedNumber: number })
  }

  render() {
    const displayText = this.state.clickedNumber 
      ? `You've clicked ${this.state.clickedNumber}` 
      : ""

    return (
      <div className="App">
        <NumberRow number1={1} number2={2} onClick={this.handleClick} clickedNumber={this.state.clickedNumber} />
        <NumberRow number1={2} number2={4} onClick={this.handleClick} clickedNumber={this.state.clickedNumber} />
        <NumberRow number1={3} number2={6} onClick={this.handleClick} clickedNumber={this.state.clickedNumber} />
        <NumberRow number1={4} number2={8} onClick={this.handleClick} clickedNumber={this.state.clickedNumber} />
        <NumberRow number1={5} number2={10} onClick={this.handleClick} clickedNumber={this.state.clickedNumber} />
        <NumberRow number1={6} number2={12} onClick={this.handleClick} clickedNumber={this.state.clickedNumber} />
        <NumberDisplay displayText={displayText} />
      </div>
    )
  }
}

export default App