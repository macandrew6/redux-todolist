import React, { Component } from 'react'

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { // for update todo fn

    };
  }

  render() {
    const { todo, removeTodo, receiveTodo } = this.props;
    console.log(todo);
    return (
      <div>
        <li>{todo.title}</li>
        <button onClick={() => removeTodo(todo)}>Delete</button>
        <button onClick={() => receiveTodo(Object.assign({}, todo, { done: !todo.done }))}>{ todo.done === true ? "Undo" : "Done"}</button>
      </div>
    )
  }
}
