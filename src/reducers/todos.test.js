import deepFreeze from 'deep-freeze';
import todos from './todos';

describe('todos reducer', () => {
  it('should add a todo', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux',
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false,
      },
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });
  it('should toggle a todo by id', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn React',
        completed: false,
      },
      {
        id: 1,
        text: 'Learn Redux',
        completed: false,
      },
    ];

    const stateAfter = [
      {
        id: 0,
        text: 'Learn React',
        completed: true,
      },
      {
        id: 1,
        text: 'Learn Redux',
        completed: false,
      },
    ];

    const action = {
      type: 'TOGGLE_TODO',
      id: 0,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });
});
