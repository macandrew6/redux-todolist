import React, { Component } from 'react';

class StepListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { step } = this.props;
    return (
      <div className="step-container">
        <div>{step.title}</div>
        <div>{step.body}</div>
      </div>
    );
  }
}

export default StepListItem;