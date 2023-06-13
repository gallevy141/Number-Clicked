import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NumberDisplay.css'

class NumberDisplay extends React.Component {
  render() {
    const style = {
      backgroundColor: "#ADD8E6",
      color: "#00008B",
      height: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }

    return (
      <div className="m-2" style={style}>
        {this.props.displayText}
      </div>
    )
  }
}

export default NumberDisplay