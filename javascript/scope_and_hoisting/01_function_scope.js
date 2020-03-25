// function scope
function funcScope() {
  var a = 0;
  if (true) {
    var b = 1;
    for (var c = 0; c < 5; c++) {
      console.log("c=" + c);
    }
    console.log("c=" + c);
  }
  console.log("b=" + b);
}
funcScope();

// same variable name
var testScope = 10;
function scopeExam() {
  var testScope = 20;
  console.log("scope = " + testScope);
}
scopeExam();

// var skip
function skipVarScope1() {
  testNum = 10;
  console.log(testNum);
}

function skipVarScope2() {
  console.log(testNum);
}

skipVarScope1();
skipVarScope2();

// lexical scope
function func1() {
  var a = 10;
  func2();
}
function func2() {
  return console.log("func2 Running");
}
func1();

var forA = 10;
for (let forA = 0; forA < 5; forA++) {
  console.log(forA); // 0 1 2 3 4
}
console.log(forA); // 10

// lexical scope Error
// function errFunc1() {
//   var a = 10;
//   errFunc2();
// }
// function errFunc2() {
//   return a;
// }
// errFunc1();
