import React from 'react';
import StepListItemContainer from './StepListItemContainer';

const StepList = ({ steps }) => {
  console.log(steps);
  return (
    <ul> 
      {steps.map(step => (
        <StepListItemContainer step={step}/>
      ))}
    </ul>
  );
};

export default StepList;