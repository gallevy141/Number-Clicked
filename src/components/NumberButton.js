import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


class NumberButton extends React.Component {
  
  // When clicked, it will call the onClick function from its props and passes the number of the button.
  handleClick = () => {
    this.props.onClick(this.props.number)
  }

  render() {
    // Check whether the clickedNumber from props is the same as the number of this button.
    const isClicked = this.props.clickedNumber === this.props.number

    // If clicked, the color will be white and the background color will be the color from props.
    // If not clicked, the color will be the color from props and the background color will be white.
    const style = {
        color: isClicked ? "white" : this.props.color,
        borderColor: this.props.color,
        backgroundColor: isClicked ? this.props.color : "white",
        borderRadius: "15px",
        width: "150px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    // Render a div with a Bootstrap button class.
    // Assign the click handler function to the onClick property of the div.
    // Pass the number of this button as the child of the div, so it will be displayed as the text of the button.
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