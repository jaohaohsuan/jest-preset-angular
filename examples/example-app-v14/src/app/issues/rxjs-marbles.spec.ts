import { TestScheduler } from 'rxjs/testing';
import { delay } from 'rxjs';
import { expect, jest } from '@jest/globals';

describe('Rxjs marbles', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('generates the stream correctly with delay 2s', () => {
    testScheduler.run((helpers) => {
      const { time, cold, expectObservable } = helpers;
      const source = cold('---a--b--|');
      const t = time('        --|    '); // <- this doesn't work with Jest ESM
      const expected = '   -----a--b|';
      const result = source.pipe(delay(t));
      expectObservable(result).toBe(expected);
    });
  });

  it('generates the stream correctly without delay', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const source = cold('---a--b|');
      const expected = '   ---a--b|';
      const result = source;
      expectObservable(result).toBe(expected);
    });
  });
});
