let makeFunc = function () {
  this.a = 1;
  this.b = 2;
};

let obj1 = new makeFunc();

makeFunc.prototype.b = 3;
makeFunc.prototype.c = 4;
// f.prototype = { b : 3, c : 4}; 를 하면 안된다.

console.log(obj1.a + "\n");
// obj1 객체에는 a라는 속성이 존재한다. 끝
console.log(obj1.b + "\n");
// obj1 객체에는 b라는 속성이 존재한다. obj1.[[Prototype]]에도 b라는 속성은 존재하지만 자신의 속성을 우선시한다.
// 이를 property shadowing이라 부른다.
console.log(obj1.c);
console.log(obj1.__proto__);
// obj1 객체에는 c라는 속성이 없다. obj1.[[Prototype]]엔 c가 존재한다. 끝
console.log("\n" + obj1.d);
console.log(obj1.__proto__);
console.log(obj1.__proto__.__proto__);
console.log(obj1.__proto__.__proto__.__proto__);
// obj1 객체에는 d라는 속성이 없다. obj1.[[Prototype]]에도 d라는 속성이 없다. obj1.[[Prototype]].[[Prototype]]은 Object.prototype이다. obj1.[[Prototype]].[[Prototype.]].[[Prototype]]은 null이다.
// 따라서, d라는 속성을 찾지 못하고 (없으니까) prototype chain은 종결된다. undefind
/*
1

2

4
makeFunc { b: 3, c: 4 }

undefined
makeFunc { b: 3, c: 4 }
{}
null
*/

// console.dir(f.prototype)
