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
    let step = Object.assign({}, this.state) // needs current todo's id

    // Pass that object to this.props.receiveStep
    // Clear the form fields.
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    console.log("this is the step title ",this.state.title);
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="step-title">Title:</label>
          <input 
            type="text" 
            placeholder="Type Step Title Here..." 
            value={this.state.title}
            onChange={this.update('title')}
          />
          <br/>
          <label htmlFor="step-body">Body:</label>
          <input 
            type="text" 
            placeholder="Type Step Body Here..." 
            value={this.state.body}
            onChange={this.update('body')}
          />
          <br/>
          <button type="submit">Add Step</button>
        </form>
      </div>
    );
  }
}

export default StepForm;