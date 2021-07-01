import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Component } from 'react';

class App extends Component{

  handleClick(){
    console.log("ads");
    fetch('http://localhost:3100/cmd', {
      method: 'POST'
    });
  }

  render(){
    return (
      <div className="App">
        <Button onClick={() => this.handleClick()} variant="primary">blink</Button>
        Hello World
      </div>
    );  
  }
}

export default App;
