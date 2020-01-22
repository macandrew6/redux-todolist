import React from 'react';
import StepListItemContainer from './StepListItemContainer';
import StepForm from './StepForm';

const StepList = ({ steps, todoId, receiveStep }) => {
  console.log(steps);
  return (
    <div>
      <ul> 
        {steps.map(step => (
          <StepListItemContainer key={step.id} step={step} /> // key={step.id}
        ))}
      </ul>
      <StepForm todoId={todoId} receiveStep={receiveStep}/> 
    </div>
  );
};

export default StepList;