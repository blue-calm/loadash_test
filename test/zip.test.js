const _ = require('../task/zip');

test(
    'Check the result',
    () => {
        expect(_.zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
    }
 );
 