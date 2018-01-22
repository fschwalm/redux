import counter from './counter';

describe('Counter reducer', () => {
  it('should increment', () => {
    expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
  });

  it('should decrement', () => {
    expect(counter(1, { type: 'DECREMENT' })).toEqual(0);
  });

  it('should return the current state when action is unknown', () => {
    expect(counter(0, { type: 'SOME_UNKNOWN_ACTION' })).toEqual(0);
  });

  it('should return the initial state when the reducer is not initialized', () => {
    expect(counter(undefined, { type: 'SOME_UNKNOWN_ACTION' })).toEqual(0);
  });
});
