import React from 'react';
import StepListContainer from './step_list/StepListContainer';
import StepListItemContainer from './step_list/StepListItemContainer';

const TodoDetailView = ({ todo, removeTodo }) => {
  return (
    <div>
      {todo.body}
      <StepListItemContainer />
    </div>
  );
};

export default TodoDetailView;