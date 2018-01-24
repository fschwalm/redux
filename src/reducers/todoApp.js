import todos from './todos';
import visibilityFilter from './visibilityFilter';
// todoApp here is the top-level reducer. which is a function that
// accepts state and an action
// and returns an object with the new state.
const todoApp = (state = {}, action) => ({
  todos: todos(state.todos, action),
  visibilityFilter: visibilityFilter(state.visibilityFilter, action),
});

export default todoApp;
