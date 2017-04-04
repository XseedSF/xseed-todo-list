import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {id: 1, name: 'Learn React', isComplete: false},
        {id: 2, name: 'Learn Redux', isComplete: true},
        {id: 3, name: 'Learn ReactNative ', isComplete: false},
        {id: 4, name: 'Learn NodeJS', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
  }

  handleToggle(id) {
    const index = this.state.todos.findIndex(item => item.id === id);
    const todo = this.state.todos[index];
    const updatedTodo = {...todo, isComplete: !todo.isComplete};
    const updatedTodos = [
      ...this.state.todos.slice(0, index),
      updatedTodo,
      ...this.state.todos.slice(index + 1)
    ];

    this.setState((previousState, props) => ({
      todos: updatedTodos
    }));
  }

  handleInputChange(event){
    this.setState({
      currentTodo: event.target.value
    });    
  }

  handleSubmit(event) {
    event.preventDefault();
    const newId = generateId();
    const newTodo = { id: newId,  name: this.state.currentTodo, isComplete: false };
    /*//Mutando
    var updatedTodos = this.state.todos;
    updatedTodos.push(newTodo);*/
    const updatedTodos = [...this.state.todos, newTodo];

    this.setState((previousState, props) => ({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    }));
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
          <TodoForm handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo}
                    handleSubmit={submitHandler} />          
          <TodoList todos={this.state.todos} handleToggle={this.handleToggle} />
        </div>
      </div>
    );
  }
}

export default App;

const generateId = () => Math.floor(Math.random()*1000000) 


