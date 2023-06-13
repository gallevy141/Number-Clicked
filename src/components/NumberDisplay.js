import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class NumberDisplay extends React.Component {
  render() {
    return (
      <div className="m-2 bg-info text-dark d-flex align-items-center justify-content-center">
        {this.props.displayText}
      </div>
    )
  }
}

export default NumberDisplay