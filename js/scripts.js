//ANONYMOUS FUNCTION
//FUNCTION DEFINITION
// function(string) { //INSIDE the () is where your ARGUMENTS/PARAMETERS
//   return string.toUpperCase(); //Data transformation and return
//   console.log(string);
// }; //END of the function

//NAMED FUNCTIONS
//FUNCTION DEFINITION
function addTwo(num) {
  return num + 2;
};

//CALL the FUNCTIONS
// console.log(addTwo(1)); //Call Site

function logMyString(string) {
  console.log(string);
};
// logMyString("Hey there good lookin'");

//FUNCTION DECLARATION (IS HOISTED)
function alertsAd() {
  alert("Hey there! We have a sale going on!");
};
// alertsAd();

//FUNCTION EXPRESSION (NOT HOISTED)
let confirmStuff = function(someString) {
  let newVariable = "cheese";
  confirm(someString);
};
// confirmStuff("Are you sure you want to watch 'Frozen' again??????")
// console.log(newVariable); //WOULD THROW ERROR

//RECURSION
let i = 0;
function iCallMyself() {
  console.log(i);
  i++;
  if(i < 10) iCallMyself();
};
iCallMyself();

//FAT ARROW FUNCTIONS
//BASIC IMPLEMENTATION
(logFunction, alertFunction) => { //NO FUNCTION KEYWORD
  logFunction("Hello World");
  alertFunction("Goodbye friends!");
};

//ONLY 1 ARGUMENTS
string => { //PARENTHESES ARE OPTIONAL
  console.log(string);
};


//FUNCTION EXPRESSION OF FAT ARROW
let logString = string => {
  console.log(string);
};
// logString("Hellos cats!");

//IMPLICIT RETURN
string => (string.toUpperCase());
string => string.toUpperCase();

//TRY IT OUT #1
function dogAge(string) {
  let regularAge = prompt(string);
  alert(regularAge * 7);
}
dogAge("What's your dog's age?")




















//
