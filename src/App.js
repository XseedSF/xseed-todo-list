import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {id: 1, name: 'Learn React', isComplete: false},
        {id: 2, name: 'Learn Redux', isComplete: true},
        {id: 3, name: 'Learn ReactNative ', isComplete: false},
        {id: 4, name: 'Learn NodeJS', isComplete: false}
      ]
    }
  }
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
              {this.state.todos.map(todo => 
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name }
                </li>)}
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
