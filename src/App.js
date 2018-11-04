import React, { Component } from 'react';
import SingleTodo from './SingleTodo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputChange = e => {
    this.setState({currentTodo: e.target.value});
  };
  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({todos: todosCopy, currentTodo: ""});
  }
  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i,1);
    this.setState({todos: todosCopy, currentTodo: ""});
  };
  render() {
    let bulletTodos = this.state.todos.map((e,i) => {
      return(
        <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
      )
    });
    return (
      <div>
        <input placeholder="Enter your to do list" value={this.state.currentTodo} onChange={this.onInputChange}></input>
        <button onClick={this.onClick}>Add!</button><br/>
        {this.state.todos.length === 0 ? "No Todo Yet" : <ul>{bulletTodos}</ul> }
      </div>
    );

  };
}

export default App;
