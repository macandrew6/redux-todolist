import { connect } from 'react-redux';
import StepList from './StepList';
import { receiveSteps } from '../../../actions/step_actions';
import { stepsByTodoId } from '../../../reducers/selectors';

const mapStateToProps = (state, { todoId }) => ({
  steps: stepsByTodoId(state, todoId),
  todoId
});

const mapDispatchToProps = (dispatch) => ({
  receiveSteps: (steps) => dispatch(receiveSteps(steps)) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);