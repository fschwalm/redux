import uuidv4 from 'uuid/v4';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const RECEIVE_TODOS = 'RECEIVE_TODOS';

const receiveTodos = (filter, response) => ({
  type: RECEIVE_TODOS,
  filter,
  response,
});

const addTodo = text => ({
  type: ADD_TODO,
  id: uuidv4(),
  text,
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export { addTodo, toggleTodo, receiveTodos };
