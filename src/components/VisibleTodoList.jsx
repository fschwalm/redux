import React, { Component } from 'react';
import TodoList from './TodoList';
import { store, getVisibleTodos } from '..';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { todos, visibilityFilter } = store.getState();

    return (
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id,
          })
        }
      />
    );
  }
}

export default VisibleTodoList;
