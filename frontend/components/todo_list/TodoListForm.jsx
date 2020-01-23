import React from 'react';
import { uniqueId } from '../../util/idGenerator';

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => (
      this.setState({
        [property]: e.target.value
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form 
        className="todo-form"
        onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          placeholder="enter todo here"
          value={this.state.title}
          onChange={this.handleChange('title')} 
          required 
        />
        <label htmlFor="body">Body</label>
        <input 
          type="text"
          placeholder="enter todo here"
          value={this.state.body}
          onChange={this.handleChange('body')}  
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoListForm;