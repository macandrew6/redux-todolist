import React from 'react';


const TodoDetailView = ({ todo, removeTodo }) => {
  return (
    <div>
      {todo.body}
    </div>
  );
};

export default TodoDetailView;