// 익명 함수를 사용하지 않음.

// global scope start
let e = 10;
// global scope end
function oldSum(a) {
  // outer functions scope start
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope end
      return function sum4(d) {
        // local scope start
        return a + b + c + d + e;
        // local scope end
      };
    };
  };
}
console.log(newSum(1)(2)(3)(4)); // log 20

var s = oldSum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3); //log 20

// 익명 함수를 사용.

// global scope start
e = 10;
// global scope end
function newSum(a) {
  // outer functions scope start
  return b => {
    return c => {
      // outer functions scope end
      return d => {
        // local scope start
        return a + b + c + d + e;
        // local scope end
      };
    };
  };
}

console.log(newSum(1)(2)(3)(4)); // log 20

var s = newSum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3); //log 20
