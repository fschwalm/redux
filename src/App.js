import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Redux</h1>
      </div>
    );
  }
}

export default App;
