import React from 'react';
import { getNextID, store } from '..';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const TodoApp = () => (
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
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
