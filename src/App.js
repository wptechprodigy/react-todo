import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Todos from './components/Todos';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => this.setState({ todos: response.data }));
  }

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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  };

  // Add New Todo
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        isCompleted: false
      })
      .then(response =>
        this.setState({ todos: [...this.state.todos, response.data] })
      );
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <div className="container">
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </div>
              </React.Fragment>
            )}
          />
          <Route
            path="/About"
            render={props => (
              <React.Fragment>
                <div className="container">
                  <About />
                </div>
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
