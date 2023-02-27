const _ = require('../task/take');

test(
    'Check the result with no 2n val input',
    () => {
        expect(_.take([1, 2, 3])).toStrictEqual([1]);
    }
);

test(
    'Check the result with 2n val input',
    () => {
        expect(_.take([1, 2, 3], 2)).toStrictEqual([1, 2]);
    }
);

test(
    'Check the result with 2n val greater than an array length',
    () => {
        expect(_.take([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
    }
);

test(
    'Check the result with 2n val equals zero',
    () => {
        expect(_.take([1, 2, 3], 0)).toStrictEqual([]);
    }
);