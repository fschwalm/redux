import uuidv4 from 'uuid/v4';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = text => ({
  type: ADD_TODO,
  id: uuidv4(),
  text,
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export { addTodo, toggleTodo };
