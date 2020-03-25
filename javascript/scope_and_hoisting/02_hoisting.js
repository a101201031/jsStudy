function hoistingExam1() {
  console.log("value=" + variable1);
  var variable1 = 10;
  console.log("value=" + variable1);
}
hoistingExam1();

function hoistingExam2() {
  var variable2;
  console.log("value=" + variable2);
  variable2 = 10;
  console.log("value=" + variable2);
}
hoistingExam2();

/*
value=undefined
value=10
*/

hoistingExam3();
var hoistingExam3 = function() {
  var hoisting_val = 10;
  console.log("hoisting_val =" + hoisting_val);
};

/*
hoistingExam3 of object is not a function  
*/

hoistingExam4();
var hoistingExam4 = new Function("", "return console.log('Ya-ho!!');");
//실행결과
/*
hoistingExam4 of object is not a function  
*/
