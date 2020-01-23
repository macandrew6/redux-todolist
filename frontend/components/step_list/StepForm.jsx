import React from 'react';
import { uniqueId } from '../../util/idGenerator';

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      done: false,
      todoId: this.props.todoId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let step = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveStep(step);
    this.setState({
      title: '',
      description: ''
    });
  }

  render() {
    return (
      <form 
        className="step-form"
        onSubmit={this.handleSubmit}>
        <label htmlFor="step-title">Title:</label>
        <input 
          type="text" 
          placeholder="Type Step Title Here..." 
          value={this.state.title}
          onChange={this.update('title')}
        />
        <br/>
        <label htmlFor="step-description">Description:</label>
        <input 
          type="text" 
          placeholder="Type Step Description Here..." 
          value={this.state.description}
          onChange={this.update('description')}
        />
        <br/>
        <button type="submit">Add Step</button>
      </form>
    );
  }
}

export default StepForm;