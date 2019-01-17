import React, { Component } from 'react';
import uuid from 'uuid';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Code for 30mins first thing in the morning.',
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: 'Work on a personal project after the first 30mins.',
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: 'Time to pray.So...pray!',
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: 'Surf the net for work.',
        isCompleted: false
      }
    ]
  };

  // Toggle Completed Todo
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
    // this.isCompleted = !this.isCompleted
  };

  // Delete Completed Todos
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add New Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      isCompleted: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
