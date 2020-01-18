import { connect } from 'react-redux';
import TodoDetailView from './TodoDetailView';
import { removeTodo } from '../../actions/todo_actions';

let mapDispatchToProps = (dispatch) => ({
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
  null, // todo prop is already passed in
  mapDispatchToProps
)(TodoDetailView);