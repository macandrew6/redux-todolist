import React, { Component } from 'react';
import TodoDetailViewContainer from './TodoDetailViewContainer';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      detail: false
    };

    this.toggleDetails = this.toggleDetails.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
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
    let detail;
    let showDetails = "todo-list-item";
    if (this.state.detail) {
      showDetails += " todo-list-item-active";
      detail = <TodoDetailViewContainer todo={todo} />;
    }

    return (
      <li className="todo-list-item">
        <div className="todo-list-item-title">
          <h3><a onClick={this.toggleDetails}>{todo.title}</a></h3>
          <button 
            className={todo.done ? "undone": "done"}
            onClick={this.toggleTodo}>
            { todo.done ? "Undo" : "Done"}
          </button>
        </div>
        { detail }
      </li>
    );
  }
}
