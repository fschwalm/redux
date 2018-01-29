import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

// todoApp here is the top-level reducer. which is a function that
// accepts state and an action
// and returns an object with the new state.
const todoApp = combineReducers({
  todos,
});


export default todoApp;

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);
