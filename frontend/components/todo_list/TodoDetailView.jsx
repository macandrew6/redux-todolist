import React from 'react';
import StepListContainer from './step_list/StepListContainer';
import StepForm from './step_list/StepForm';

const TodoDetailView = ({ todo, removeTodo }) => {
  return (
    <div>
      {todo.body}
      <StepListContainer todoId={todo.id}/>
      <StepForm />
    </div>
  );
};

export default TodoDetailView;