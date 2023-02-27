const _ = require('../task/omit');

var object = { 'a': 1, 'b': '2', 'c': 3 };

test(
    'Check the result',
    () => {
        expect(_.omit(object, ['a', 'c'])).toStrictEqual({ b: '2' });
    }
 );
 