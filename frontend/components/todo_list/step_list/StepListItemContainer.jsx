import { connect } from 'react-redux';
import StepListItem from './StepListItem';
import { removeStep, receiveStep } from '../../../actions/step_actions';

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => ({

});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);