function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertexes.push(v);
  },
};

var g = new Graph();

console.log(g.hasOwnProperty("vertexes"));
console.log(g.hasOwnProperty("nope"));
console.log(g.hasOwnProperty("addVertex")); // g에는 addVertex가 없기 때문에 결과는 false로 나온다.
console.log(g.__proto__.hasOwnProperty("addVertex")); // Grape의 prototype에 addVertex method를 추가했기 때문에 true

/*
ture
false
false
true
*/
