import React from 'react'

class NumberButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isClicked: false }
  }

  handleClick = () => {
    this.setState({ isClicked: true })
    this.props.onClick(this.props.number)
  };

  render() {
    const style = {
      color: this.props.color,
      borderColor: this.props.color,
      backgroundColor: this.state.isClicked ? 'green' : 'white',
    }
    return (
      <button style={style} onClick={this.handleClick}>
        {this.props.number}
      </button>
    )
  }
}

export default NumberButton