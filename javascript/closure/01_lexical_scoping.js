function init() {
  let letFirstName = "soohyun";
  var varLastName = "Cho"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() {
    console.log(letFirstName + varLastName);
  }
  displayName();
}
init();
// displayName(); -> ERROR!!!!
