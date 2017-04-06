import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
  }

  handleEmptySubmit(event) {
    event.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm />          
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;


