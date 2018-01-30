import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoList from './TodoList';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, receiveTodos, requestTodos } = this.props;
    requestTodos(filter)
    fetchTodos(filter).then(todos => receiveTodos(filter, todos));
  }

  render() {
    const { isFetching, toggleTodo, todos } = this.props;
    console.log(isFetching);

    if (isFetching && !todos.length) {
      return (<p>Loading...</p>);
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  };
};

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   },
// });

VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));

export default VisibleTodoList;
