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
    console.log(uniqueId());
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          placeholder="enter todo here"
          value={this.state.title}
          onChange={this.handleChange('title')}  
        />
        <label htmlFor="body">Body</label>
        <input 
          type="text"
          placeholder="enter todo here"
          value={this.state.body}
          onChange={this.handleChange('body')}  
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoListForm;