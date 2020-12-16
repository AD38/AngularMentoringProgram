import * as fromCources from './cources.actions';

describe('loadCourcess', () => {
  it('should return an action', () => {
    expect(fromCources.loadCourcess().type).toBe('[Cources] Load Courcess');
  });
});
