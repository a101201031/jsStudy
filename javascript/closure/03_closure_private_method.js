/*
let letCounter = (() => {
  let privateTotal = 0;
  function changeBy(val) {
    privateTotal += val;
  }
  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    value: () => {
      return privateTotal;
    }
  };
})();

console.log(letCounter.value()); // 0
letCounter.increment();
letCounter.increment();
console.log(letCounter.value()); // 2
letCounter.decrement();
console.log(letCounter.value()); // 1
*/
let makeCounter = () => {
  let privateTotal = 0;
  function sumVal(val) {
    privateTotal += val;
  }
  return {
    increment: () => {
      sumVal(1);
    },
    decrement: () => {
      sumVal(-1);
    },
    value: () => {
      return privateTotal;
    }
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); // 0
counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2
counter1.decrement();
console.log(counter1.value()); // 1
console.log(counter2.value()); // 0
