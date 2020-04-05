let myObj = {
  a: 2,
  plusNum: function (b) {
    return this.a + 1;
  },
};
// 속성 a와 method plusNum가 존재하는 myObj 객체 생성

console.log(myObj.plusNum()); // 3

let objSon = Object.create(myObj); // prototype이 myObj인 objSon 객체 생성
objSon.a = 13;

console.log(objSon.plusNum()); // 14
// this.a는 __proto__.a를 보는 것이 아닌 objSon.a를 봄.
objSon.plusNum = function (b) {
  return this.a + 10;
}; // 상속받은 method plusNum을 수정. method overriding.

console.log(objSon.plusNum());

/*
3
14
23
*/
