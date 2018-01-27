import React from 'react';
import { getNextID, getVisibleTodos, store } from '..';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';

const TodoApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddTodo
      onAddClick={text =>
        store.dispatch({
          type: 'ADD_TODO',
          id: getNextID(),
          text,
        })
      }
    />
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={(id) => {
        store.dispatch({
          type: 'TOGGLE_TODO',
          id,
        });
      }}
    />
    <Footer />
  </div>
);

export default TodoApp;
