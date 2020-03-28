let functionObj1 = {
  output: function(string) {
    console.log("output : " + string);
  }
};
functionObj1.output("SHCHO");

let functionObj2 = {
  output(string) {
    console.log("output : " + string);
  }
};
functionObj2.output("SHCHO");
