function init() {
  let letFirstName = "soohyun";
  var varLastName = "Cho";
  function displayName() {
    console.log(letFirstName + varLastName);
  }
  return displayName; // displayName을 반환한다.
}

var newFunc = init();
newFunc();
// 결과 : soohyunCho

function makeNum(x) {
  var y = 1;
  return function(z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeNum(5);
var add10 = makeNum(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산

// var add15 = x => {
//   x = 15;
//   var y = 1;
//   return z => {
//     y = 100;
//     return x + y + z;
//   };
// };

// console.log(add15(2));
