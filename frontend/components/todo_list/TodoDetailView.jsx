import React from 'react';
import StepListContainer from './step_list/StepListContainer';

const TodoDetailView = ({ todo, removeTodo }) => {
  console.log(todo.id);
  return (
    <div>
      {todo.body}
      <StepListContainer todoId={todo.id}/>
    </div>
  );
};

export default TodoDetailView;