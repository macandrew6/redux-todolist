import React, { Component } from 'react';

class StepListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { step, removeStep } = this.props;
    return (
      <div className="step-list-item">
        <div>{step.title}</div>
        <div>{step.description}</div>
        <button onClick={(e) => removeStep(step, e)}>Delete Step</button>
      </div>
    );
  }
}

export default StepListItem;