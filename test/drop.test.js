const _ = require('../task/drop');

test(
    'Check the result with no 2n val input',
    () => {
        expect(_.drop([1, 2, 3])).toStrictEqual([ 2, 3 ]);
    }
);

test(
    'Check the result with 2n val input',
    () => {
        expect(_.drop([1, 2, 3], 2)).toStrictEqual([3]);
    }
);

test(
    'Check the result with 2n val greater than an array length',
    () => {
        expect(_.drop([1, 2, 3], 5)).toStrictEqual([]);
    }
);

test(
    'Check the result with 2n val equals zero',
    () => {
        expect(_.drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
    }
);