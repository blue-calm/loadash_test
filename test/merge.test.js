const _ = require('../task/merge');

var object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
   
var other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
};

test(
    'Check the result',
    () => {
        expect(_.merge(object, other)).toStrictEqual({ a: [ { b: 2, d: 4 }, { c: 3, e: 5 } ] });
    }
 );
 