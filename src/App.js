import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
      </div>
    );
  }
}

export default App;
