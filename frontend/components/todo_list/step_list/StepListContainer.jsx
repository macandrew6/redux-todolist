import { connect } from 'react-redux';
import StepList from './StepList';
import { receiveStep } from '../../../actions/step_actions';
import { stepsByTodoId } from '../../../reducers/selectors';

const mapStateToProps = (state, { todoId }) => ({
  steps: stepsByTodoId(state, todoId),
  todoId
});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);