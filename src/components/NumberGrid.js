import React from 'react'
import NumberRow from './NumberRow'

class NumberGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clickedNumber: null }
  }

  handleClick = (number) => {
    this.setState({ clickedNumber: number })
    this.props.onClick(number)
  }

  render() {
    return (
      <div>
        <NumberRow number1={1} number2={2} onClick={this.handleClick} />
        <NumberRow number1={2} number2={4} onClick={this.handleClick} />
        <NumberRow number1={3} number2={6} onClick={this.handleClick} />
        <NumberRow number1={4} number2={8} onClick={this.handleClick} />
        <NumberRow number1={5} number2={10} onClick={this.handleClick} />
        <NumberRow number1={6} number2={12} onClick={this.handleClick} />
      </div>
    )
  }
}

export default NumberGrid