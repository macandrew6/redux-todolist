import { connect } from 'react-redux';
import StepListItem from './StepListItem';
import { removeStep, receiveStep } from '../../../actions/step_actions';



const mapDispatchToProps = (dispatch, { step }) => ({
  removeStep: () => dispatch(removeStep(step)),
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);