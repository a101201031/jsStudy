var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

let letCounter = (() => {
  let privateTotal = 0;
  function changeBy(val) {
    privateTotal += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
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
