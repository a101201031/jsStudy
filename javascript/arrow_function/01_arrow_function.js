var testVariable = function(string) {
  console.log(string);
};
testVariable("CHO");

var arrowVariable = string => {
  console.log("Aroow Function => " + string);
};
arrowVariable("CHO");

var simpleArrow = num => num * 10;
console.log(simpleArrow(10)); // 100

var verySimpleArrow = string => "!!" + string + "!!";
console.log(verySimpleArrow("CHO")); // !!CHO!!

var veryVerySimpleArrow = () => "!!" + "CHO" + "!!";
console.log(veryVerySimpleArrow()); // !!CHO!!

var restArrow = (...rest) => {
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += i;
  }
  return total;
};
console.log(restArrow(1, 2, 3, 4, 5));

// let user = () => {
//   let myusername = "admin";
//   let mytel = "010-0000-0000";
//   return { username: myusername, tel: mytel };
// };
// console.log(user());

let user = username => ({ username });
console.log(user("admin"));
