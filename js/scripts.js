var myString = "Hello World!*76"; //String
//console.log(typeof myString);
var myNumber = 43; //Number - PRIMITAVE
var myOtherNumber = new Number(43); //Number - OBJECT
//console.log(myNumber, myOtherNumber);

var isLoggedIn = false; //Boolean

let newVariable = "The best variable!";
//console.log(newVariable, "AFTER"); //Undefined

{
  let newVariable = "The worst variable...";
  //console.log(newVariable, "INSIDE the scope!!");
};
//let newVariable; DECLARATION
newVariable = "My dog is not ugly..."; //DEFINITION
//console.log(newVariable, "OUTSIDE the scope!!");

isLoggedIn = null; //Null

//STRING interpolation
//console.log("Hey there, " + myString + " how are you?"); //ES5
//console.log(`Hey there, ${myString} how are you?`); //ES6

{
  //BLOCK OF CODE
};

const age = 16;
{
  const age = 18;
  //console.log(18);
};
//console.log(age);

let today = new Date();
let myBirthday = new Date("7/10/01");
//console.log(myBirthday);

let bestNumber = 42.7;
Math.floor(bestNumber);
//console.log(Math.ceil(bestNumber) * Math.PI);

let classRoom = "Room 1";
let objectClassroom = new String("Room 1");
// console.log(typeof classRoom);
// console.log(typeof objectClassroom);
// console.log(classRoom.length);

//alert("Hey there, user!"); //1 Direction Communication to your user

//const isReady = confirm("Are you ready to party?");

//alert(isReady);

//let userName = prompt("What's your name?", "User");
//console.log(userName);

let firstName = prompt("What's your first name?", "User");
console.log(firstName);

let lastName = prompt("What's your last name?", "User");
alert(lastName);

let userBirth = prompt("When's your birthday?", "01/10/98");
confirm("Is " + userBirth + " your birthday?");  //ES6 wouldn't work
alert(userBirth);
