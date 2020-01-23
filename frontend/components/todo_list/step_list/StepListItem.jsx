import React, { Component } from 'react';

class StepListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { step } = this.props;
    return (
      <div className="step-list-item">
        <div>{step.title}</div>
        <div>{step.description}</div>
      </div>
    );
  }
}

export default StepListItem;