import React from 'react';
import StepListContainer from './step_list/StepListContainer';

const TodoDetailView = ({ todo, removeTodo }) => {
  return (
    <div>
      {todo.body}
      <StepListContainer />
    </div>
  );
};

export default TodoDetailView;