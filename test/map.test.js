const _ = require('../task/map');

function square(n) {
    return n * n;
};

 var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

test(
    'Check the result with collection ar array',
    () => {
        expect(_.map([4, 8], square)).toStrictEqual([16, 64]);
    }
 );
 
test(
  'Check the result with collection as object',
  () => {
      expect(_.map({ 'a': 4, 'b': 8 }, square)).toStrictEqual([16, 64]);
  }
);

test(
  'Check the result with collection as object and iteratee as string',
  () => {
      expect(_.map(users, 'user')).toStrictEqual(['barney', 'fred']);
  }
);