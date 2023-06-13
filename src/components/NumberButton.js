import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class NumberButton extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.number)
  }

  render() {
    const isClicked = this.props.clickedNumber === this.props.number
    const btnColor = isClicked ? (this.props.color === "red" ? "btn-danger" : "btn-success") : "btn-outline-light"
    const textColor = isClicked ? "text-white" : (this.props.color === "red" ? "text-danger" : "text-success")

    return (
      <button 
        className={`btn m-2 ${btnColor} ${textColor}`} 
        onClick={this.handleClick}
      >
        {this.props.number}
      </button>
    )
  }
}

export default NumberButton