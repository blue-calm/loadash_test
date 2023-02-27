const _ = require('../task/toPairs');

function Foo() {
    this.a = 1;
    this.b = 2;
  }
   
  Foo.prototype.c = 3;

test(
    'Check the result',
    () => {
        expect(_.toPairs(new Foo)).toStrictEqual([ [ 'a', 1 ], [ 'b', 2 ] ]);
    }
 );
 