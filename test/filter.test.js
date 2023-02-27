const _ = require('../task/filter');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  
    
test(
    'Check the result when predicate is a function',
    () => {
        expect(_.filter(users, function(o) { return !o.active; })).toStrictEqual([ { user: 'fred', age: 40, active: false } ]);
    }
 );
 
test(
  'Check the result when predicate is a object',
  () => {
      expect(_.filter(users, { 'age': 36, 'active': true })).toStrictEqual([ { user: 'barney', age: 36, active: true } ]);
  }
);

test(
  'Check the result when predicate is an array',
  () => {
      expect(_.filter(users, ['active', false])).toStrictEqual([ { user: 'fred', age: 40, active: false } ]);
  }
);

test(
  'Check the result when predicate is string',
  () => {
      expect(_.filter(users, 'active')).toStrictEqual([ { user: 'barney', age: 36, active: true } ]);
  }
);
