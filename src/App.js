import React from 'react' 
import NumberGrid from './components/NumberGrid'  

class App extends React.Component {

  // The constructor method that initializes the component's state.
  // props is passed to both constructor and super to give access to this.props in the constructor.
  constructor(props) {
    super(props)  
    this.state = { clickedNumber: null }  
  }

  handleClick = (number) => {
    this.setState({ clickedNumber: number })  
  }

  render() {
    //style object for the display message
    const style = {
      backgroundColor: 'lightblue',
      color: 'darkblue',
      padding: '10px',
      margin: '10px'
    }
    
    //Returns a div containing the NumberGrid component and a message.
    //The NumberGrid has an onClick event handler which gets the clicked number.
    //The message displays the last clicked number.
    return (
      <div>
        <NumberGrid onClick={this.handleClick} /> 
        <div style={{ display: 'flex', justifyContent: 'center' }}> 
          <div style={style}>
            {this.state.clickedNumber ? `You've clicked ${this.state.clickedNumber}` : ""}
          </div>
        </div>
      </div>
    )
  }
}

export default App