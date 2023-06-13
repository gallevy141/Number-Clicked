import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class NumberButton extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.number)
  };

  render() {
    let buttonStyle = "btn m-1 "
    if (this.props.clickedNumber === this.props.number) {
      buttonStyle += this.props.color === "red" ? "btn-danger" : "btn-success";
    } else {
      buttonStyle += this.props.color === "red" ? "btn-outline-danger" : "btn-outline-success";
    }

    return (
      <button 
        className={buttonStyle} 
        onClick={this.handleClick}
      >
        {this.props.number}
      </button>
    )
  }
}

export default NumberButton