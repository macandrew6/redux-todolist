import React, { Component } from 'react'

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { // for update todo fn
      
    };
  }

  toggleTodo() {
    const { todo, receiveTodo } = this.props;
    let toggledTodo = Object.assign({}, todo, { done: !todo.done });
    receiveTodo(toggledTodo);
  }

  render() {
    const { todo, removeTodo } = this.props;
    console.log(todo);
    return (
      <div>
        <li>{todo.title}</li>
        <button onClick={() => removeTodo(todo)}>
          Delete
        </button>
        <button onClick={() => this.toggleTodo()}>
          { todo.done === true ? "Undo" : "Done"}
        </button>
      </div>
    )
  }
}
