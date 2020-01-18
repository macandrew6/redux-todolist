import React from 'react';
import StepList from './StepList';


const TodoDetailView = ({ todo, removeTodo }) => {
  return (
    <div>
      {todo.body}
      <StepList />
    </div>
  );
};

export default TodoDetailView;