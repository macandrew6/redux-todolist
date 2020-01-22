import React, { Component } from 'react';

class StepListItem extends Component {
  render() {
    console.log(this.props.step);
    return (
      <div>
        StepList Item Title
        StepList Item Body
      </div>
    );
  }
}

export default StepListItem;