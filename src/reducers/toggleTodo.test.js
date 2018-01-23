import deepFreeze from 'deep-freeze';

const toogleTodo = (todo) => {
  // mutation
  // todo.completed = !todo.completed;
  // option 1
  // Object.assign({}, todo, {completed: !todo.completed});
  // option 2 spread operator
  return {
    ...todo,
    completed: !todo.completed,
  };
};

const todoBefore = {
  id: 0,
  text: 'Learn Redux',
  completed: false,
};

const todoAfter = {
  id: 0,
  text: 'Learn Redux',
  completed: true,
};

it('should toogle todo without mutation', () => {
  deepFreeze(todoBefore);

  expect(toogleTodo(todoBefore)).toEqual(todoAfter);
});
