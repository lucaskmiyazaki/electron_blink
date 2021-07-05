import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Component } from 'react';

class App extends Component{

  handleClickOn(){
    console.log("ads");
    fetch('http://localhost:3100/on', {
      method: 'POST'
    });
  }

  handleClickOff(){
    console.log("ads");
    fetch('http://localhost:3100/off', {
      method: 'POST'
    });
  }

  render(){
    return (
      <div className="App">
        <Button onClick={() => this.handleClickOn()} variant="primary">On</Button>
        <Button onClick={() => this.handleClickOff()} variant="primary">Off</Button>
        Hello World
      </div>
    );  
  }
}

export default App;
