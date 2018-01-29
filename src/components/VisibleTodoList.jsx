import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoList from './TodoList';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, ownProps.match.params.filter || 'all'),
});

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   },
// });

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  // mapDispatchToProps Shorthand Notation
  { onTodoClick: toggleTodo },
)(TodoList));

export default VisibleTodoList;
