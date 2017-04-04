import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <div>
            <ul>
              <li><input type="checkbox" /> Learn React</li>
              <li><input type="checkbox" /> Learn Redux</li>
              <li><input type="checkbox" /> Learn React Native</li>
              <li><input type="checkbox" /> Learn Node JS</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
