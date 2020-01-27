import React from 'react';
import TodoListContainer from './todo_list/TodoListContainer';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Redux TodoList</h1>
      <TodoListContainer />
    </div>
  );
};

export default App;