const _ = require('../task/includes');

test(
    'Check the result without fromIndex',
    () => {
        expect(_.includes([1, 2, 3], 1)).toStrictEqual(true);
    }
 );
 
test(
  'Check the result with fromIndex',
  () => {
      expect(_.includes([1, 2, 3], 1, 2)).toStrictEqual(false);
  }
);

test(
  'Check the result when a collection is an object',
  () => {
      expect(_.includes({ 'a': 1, 'b': 2 }, 1)).toStrictEqual(true);
  }
);

test(
  'Check the result when a collection is string',
  () => {
      expect(_.includes('abcd', 'ab')).toStrictEqual(true);
  }
);
