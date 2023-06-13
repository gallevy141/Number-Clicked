import React from 'react'
import NumberButton from './NumberButton'
import 'bootstrap/dist/css/bootstrap.min.css'

class NumberRow extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <NumberButton 
            number={this.props.number1} 
            color="red" 
            onClick={this.props.onClick} 
            clickedNumber={this.props.clickedNumber}
          />
        </div>
        <div className="col">
          <NumberButton 
            number={this.props.number2} 
            color="green" 
            onClick={this.props.onClick} 
            clickedNumber={this.props.clickedNumber}
          />
        </div>
      </div>
    )
  }
}

export default NumberRow