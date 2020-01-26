import { connect } from 'react-redux';
import TodoDetailView from './TodoDetailView';
import { removeTodo } from '../../actions/todo_actions';
// import { receiveSteps } from '../../actions/step_actions';

let mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo, e) => dispatch(removeTodo(todo, e))
});

export default connect(
  null, // todo prop is already passed in
  mapDispatchToProps
)(TodoDetailView);