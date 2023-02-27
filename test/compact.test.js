const _ = require('../task/compact');

test(
    'Check the result when array divided equally',
    () => {
        expect(_.compact([0, 1, false, 2, '', 3])).toStrictEqual([1, 2, 3]);
    }
 );