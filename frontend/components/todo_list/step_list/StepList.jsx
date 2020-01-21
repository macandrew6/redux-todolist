import React from 'react';
import StepListItemContainer from './StepListItemContainer';
import StepForm from './StepForm';

const StepList = ({ steps, todoId }) => {
  console.log(steps);
  // look to solution @ stepList container
  return (
    <div>
      <ul> 
        {steps.map(step => (
          <StepListItemContainer key={step.id} step={step} /> // key={step.id}
        ))}
      </ul>
      <StepForm todoId={todoId}/> 
    </div>
  );
};

export default StepList;