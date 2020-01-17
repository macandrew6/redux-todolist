import React, { Component } from 'react';
import TodoDetailViewContainer from './TodoDetailViewContainer';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      detail: false
    };
  }

  toggleDetails() {
    this.setState({
      detail: !this.state.detail
    });
  }

  toggleTodo() {
    const { todo, receiveTodo } = this.props;
    let toggledTodo = Object.assign({}, todo, { done: !todo.done });
    receiveTodo(toggledTodo);
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <li onClick={() => this.toggleDetails()}>{todo.title}</li>
        {this.state.detail ? <TodoDetailViewContainer todo={todo}/> : null}
        <button onClick={() => this.toggleTodo()}>
          { todo.done === true ? "Undo" : "Done"}
        </button>
      </div>
    )
  }
}
