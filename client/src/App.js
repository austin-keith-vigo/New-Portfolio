import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.buttonPressed}>Make API request</button>
      </div>
    );
  }
}

export default App;
