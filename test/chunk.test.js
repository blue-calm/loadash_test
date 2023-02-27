const _ = require('../task/chunk');

test(
    'Check the result when array divided equally',
    () => {
        expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([ [ 'a', 'b' ], [ 'c', 'd' ] ]);
    }
 );
 
test(
    'Check the result when array divided unequally',
    () => {
        expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([ [ 'a', 'b', 'c' ], [ 'd' ] ]);
    }
 );