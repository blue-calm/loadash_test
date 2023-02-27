const _ = require('../task/pick');

var object = { 'a': 1, 'b': '2', 'c': 3 };

test(
    'Check the result',
    () => {
        expect(_.pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
    }
 );
 