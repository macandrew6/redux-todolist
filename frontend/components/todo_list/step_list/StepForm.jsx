import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { // place where step text must got and changed

    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="step-input">Step</label>
          <input type="text" placeholder="Type Step Here" />
          <button type="submit">Add Step</button>
        </form>
      </div>
    );
  }
}

export default StepForm;