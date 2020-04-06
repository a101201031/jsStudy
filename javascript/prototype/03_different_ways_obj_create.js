let o = { a: 1 };
let a = ["soo", "hoon"];
function f() {
  return 2;
}

console.log("o Prototype Chain");
console.log(o.__proto__);
console.log(o.__proto__.__proto__);
// o -> Object.Prototype -> null
console.log("\na Prototype Chain");
console.log(a.__proto__);
console.log(a.__proto__.__proto__);
console.log(a.__proto__.__proto__.__proto__);
// a -> Array.Prototype -> Object.Prototype -> null
console.log("\nf Prototype Chain");
console.log(f.__proto__);
console.log(f.__proto__.__proto__);
console.log(f.__proto__.__proto__.__proto__);
// f -> Function.Prototype -> Object.Prototype -> null

/*
o Prototype Chain
{}
null

a Prototype Chain
[]
{}
null

f Prototype Chain
[Function (anonymous)]
{}
null
*/

function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertexes.push(v);
  },
};

let g = new Graph();
// g는 'vertexes' 와 'edges'를 속성으로 가지는 객체이다.
console.log(Graph.prototype);
console.log(g.__proto__);
if (Graph.prototype === g.__proto__) {
  console.log("Graph.prototype === g.__proto__");
}

/*
{ addVertex: [Function: addVertex] }
{ addVertex: [Function: addVertex] }
Graph.prototype === g.__proto__
*/

let ocA = { a: 1 };
// ocA ---> Object.prototype ---> null
console.log("\nocA");
console.log(ocA);
console.log(ocA.__proto__);

let ocB = Object.create(ocA);
// ocB ---> ocA ---> Object.prototype ---> null
console.log("\nocB");
console.log(ocB.a); // 1 (상속됨)
console.log(ocB); // 생성만 하였기에 빈 객체
console.log(ocB.__proto__); // ocB의 prototype인 ocA는 속성 a를 가지고 있다.
console.log(ocB.__proto__.__proto__); // ocA의 prototype은 Object.prototype이다.

let ocC = Object.create(ocB);
// c ---> b ---> a ---> Object.prototype ---> null
console.log("\nocC");
console.log(ocC.a); // 1 (상속됨)
console.log(ocC); // 생성만 하였기에 빈 객체
console.log(ocC.__proto__); // ocC의 prototype인 ocB는 빈 객체이다.
console.log(ocC.__proto__.__proto__); // ocB의 prototype인 ocA는 속성 a를 가지고 있다.
console.log(ocC.__proto__.__proto__.__proto__); // ocA의 prototype은 Object.prototype이다.

let ocD = Object.create(null);
// d ---> null
console.log("\nocD");
console.log(ocD); // Prototype이 null인 빈 객체아다.
console.log(ocD.hasOwnProperty); // undefined. 왜냐하면 d는 Object.prototype을 상속받지 않기 때문이다.

/*

ocA
{ a: 1 }
{}

ocB
1
{}
{ a: 1 }
{}

ocC
1
{}
{}
{ a: 1 }
{}

ocD
undefined
false
[Object: null prototype] {}
*/

class Polygon {
  constructor(height, width) {
    // 생성자로 최초의 값 생성
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  // extends 키워드로 Polygon을 상속받음
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
