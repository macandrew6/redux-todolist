import React from 'react';
import StepListContainer from './step_list/StepListContainer';

const TodoDetailView = ({ todo, removeTodo }) => {
  return (
    <div>
      {todo.body}
      <StepListContainer todoId={todo.id}/>
      <button onClick={() => removeTodo(todo)}></button>
    </div>
  );
};

export default TodoDetailView;