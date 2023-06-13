import React from 'react'
import NumberButton from './NumberButton'

class NumberRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clickedNumber: null }
  }

  handleClick = (number) => {
    this.setState({ clickedNumber: number })
    this.props.onClick(number)
  };

  render() {
    return (
      <div>
        <NumberButton 
          number={this.props.number1} 
          color="red" 
          onClick={this.handleClick}
        />
        <NumberButton 
          number={this.props.number2} 
          color="green" 
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default NumberRow