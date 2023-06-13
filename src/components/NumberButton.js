import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class NumberButton extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.number)
  };

  render() {
    const isClicked = this.props.clickedNumber === this.props.number;
    const style = {
      color: isClicked ? "white" : this.props.color,
      borderColor: this.props.color,
      backgroundColor: isClicked ? this.props.color : "white",
      borderRadius: "15px",
      width: "120px",
      height: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <div 
        className="btn m-2" 
        style={style} 
        onClick={this.handleClick}
      >
        {this.props.number}
      </div>
    )
  }
}

export default NumberButton