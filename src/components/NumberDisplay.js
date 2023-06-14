import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'

class NumberDisplay extends React.Component {
  
  render() {
    
    // Defining the style object for the component.
    // The style sets the background color, text color... for text
    const style = {
      backgroundColor: "#ADD8E6", 
      color: "#00008B", 
      height: "60px",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      textAlign: "center",
    }

    // The content of the div will be the displayText prop passed to this component.
    return (
      <div className="m-2" style={style}>
        {this.props.displayText}  // Inserting the display text passed as prop
      </div>
    )
  }
}

export default NumberDisplay