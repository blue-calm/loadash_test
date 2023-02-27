const _ = require('../task/find');

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
  
    
test(
    'Check the result when predicate is a function',
    () => {
        expect(_.find(users, function(o) { return o.age < 40; })).toStrictEqual({ user: 'barney', age: 36, active: true });
    }
 );
 
test(
  'Check the result when predicate is a object',
  () => {
      expect(_.find(users, { 'age': 1, 'active': true })).toStrictEqual({ user: 'pebbles', age: 1, active: true });
  }
);

test(
  'Check the result when predicate is an array',
  () => {
      expect(_.find(users, ['active', false])).toStrictEqual({ user: 'fred', age: 40, active: false });
  }
);

test(
  'Check the result when predicate is string',
  () => {
      expect(_.find(users, 'active')).toStrictEqual({ user: 'barney', age: 36, active: true });
  }
);
