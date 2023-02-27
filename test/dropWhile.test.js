const _ = require('../task/dropWhile');

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  
    
test(
    'Check the result when predicate is a function',
    () => {
        expect(_.dropWhile(users, function(o) { return !o.active; })).toStrictEqual([ { user: 'pebbles', active: true } ]);
    }
 );
 
test(
  'Check the result when predicate is a object',
  () => {
      expect(_.dropWhile(users, { 'user': 'barney', 'active': false })).toStrictEqual([ { user: 'fred', active: false }, { user: 'pebbles', active: true } ]);
  }
);

test(
  'Check the result when predicate is an array',
  () => {
      expect(_.dropWhile(users, ['active', false])).toStrictEqual([ { user: 'pebbles', active: true } ]);
  }
);

test(
  'Check the result when predicate is string',
  () => {
      expect(_.dropWhile(users, 'active')).toStrictEqual([
        { user: 'barney', active: false },
        { user: 'fred', active: false },
        { user: 'pebbles', active: true }
      ]);
  }
);
