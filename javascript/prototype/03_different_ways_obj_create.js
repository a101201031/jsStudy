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
// g 'vertexes' 와 'edges'를 속성으로 가지는 객체이다.
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
// a ---> Object.prototype ---> null

let ocB = Object.create(ocA);
// b ---> a ---> Object.prototype ---> null
console.log(ocB.a); // 1 (상속됨)

let ocC = Object.create(ocB);
// c ---> b ---> a ---> Object.prototype ---> null

let ocD = Object.create(null);
// d ---> null
console.log(ocD.hasOwnProperty); // undefined이다. 왜냐하면 d는 Object.prototype을 상속받지 않기 때문이다.
console.log(ocD);
