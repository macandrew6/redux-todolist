import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
      // todoId:
    };
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
    // Create a local step object
    let step = Object.assign({}, this.state, ) // needs current todo's id

    // Pass that object to this.props.receiveStep
    // Clear the form fields.
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="step-title">Title</label>
          <input 
            type="text" 
            placeholder="Type Step Here" 
            onChange={() => this.update('title')}
            value={this.state.title}
          />
          <label htmlFor="step-body">Body</label>
          <input 
            type="text" 
            placeholder="Type Step Here" 
            onChange={() => this.update('body')}
            value={this.state.body}
          />
          <button type="submit">Add Step</button>
        </form>
      </div>
    );
  }
}

export default StepForm;