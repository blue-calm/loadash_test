const _ = require('../task/omitBy');

var object = { 'a': 1, 'b': '2', 'c': 3 };

test(
    'Check the result',
    () => {
        expect(_.omitBy(object, _.isNumber)).toStrictEqual({ b: '2' });
    }
 );
 