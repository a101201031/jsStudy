function makeObj(name) {
  this.name = name;
}

let myFuncObj = new makeObj("SHCHO");
console.log(myFuncObj.name);
