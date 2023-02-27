const _ = require('../task/pickBy');

var object = { 'a': 1, 'b': '2', 'c': 3 };

test(
    'Check the result',
    () => {
        expect(_.pickBy(object, _.isNumber)).toStrictEqual({ a: 1, c: 3 });
    }
 );
 