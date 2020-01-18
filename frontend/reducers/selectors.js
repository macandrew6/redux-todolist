export const allTodos = (state) => {
  return Object.values(state.todos);
};

export const stepsByTodoId = (state, todoId) => {
  return Object.values(state.steps).filter(todo => todo.id === todoId);
};