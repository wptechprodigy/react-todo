import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add New Todo..."
          value={this.state.title}
          onChange={this.onChange}
          style={{
            flex: '10',
            borderRadius: '0 0 0 5px',
            padding: '5px 8px',
            lineHeight: '1rem',
            fontSize: '1.1rem'
          }}
        />

        <input
          type="submit"
          name="Add Todo"
          className="btn"
          style={{ flex: '2', borderRadius: '0 0 5px 0' }}
        />
      </form>
    );
  }
}

export default AddTodo;
