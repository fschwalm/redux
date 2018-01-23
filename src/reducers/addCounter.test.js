import deepFreeze from 'deep-freeze';

const addCounter = list => [...list, 0];

const removeCounter = (list, index) => [...list.slice(0, index), ...list.slice(index + 1)];

const incrementCounter = (list, index) => [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];

it('should add a counter without mutations', () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(addCounter(listBefore)).toEqual(listAfter);
});

it('should remove a counter without mutations', () => {
  const listBefore = [10, 20, 30];
  const listAfter = [10, 20];

  deepFreeze(listBefore);

  expect(removeCounter(listBefore, 2)).toEqual(listAfter);
});

it('should increment a specific counter without mutations', () => {
  const listBefore = [10, 20, 30];
  const listAfter = [10, 21, 30];

  deepFreeze(listBefore);

  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
});
