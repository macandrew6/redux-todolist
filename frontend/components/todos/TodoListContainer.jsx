import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors'
import { receiveTodo } from '../../actions/todo_actions';
import TodoList from './TodoList';

let mapStateToProps = state => ({
  todos: allTodos(state)
});

let mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);