import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Code for 30mins first thing in the morning.",
        isCompleted: false
      },
      {
        id: 2,
        title: "Work on a personal project after the first 30mins.",
        isCompleted: false
      },
      {
        id: 3,
        title: "Time to pray.So...pray!",
        isCompleted: false
      },
      {
        id: 4,
        title: "Surf the net for work.",
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

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
