let bestNumber = true;
let isTrue = false;

//console.log(bestNumber || isTrue);
//console.log(!bestNumber);



let num = 11;
let string = "11";
// console.log(num == string); //loose equality checks for value and NOT type
// console.log(num === string); //strict equality checks both value AND type

let foo = "Hello";
let voo = new String("Hello");
// console.log(foo === voo); //false
// console.log(foo == voo); //true

//MODULUS is the remainder
//console.log(5 % 2); = 1

//INC and DEC
let start = 1;
//....after some logic
start++;
//console.log(start); //2

let nonNumber = "cheese";
// console.log(parseInt(nonNumber));
// console.log(isNaN(nonNumber));

let fifty = "50";
//console.log(parseInt(fifty)); //converts to number, if isn't a number results in NaN

let nonString = "50000";
//console.log(nonString.toString()); //converts to string but NOT PERMANENTLY

//console.log(nonString += 20);

//IF AND ELSE
// let firstNum = parseInt(prompt("Enter a number", "10"));
// let secondNum = parseInt(prompt("Enter another number", "10"));
// if(!isNaN(firstNum) && !isNaN(secondNum)) {
//   alert(firstNum + secondNum);
// } else  if(isNaN(secondNum)){
//   secondNum = parseInt(prompt("No, I said a number!!", "10"));
//   alert(firstNum + secondNum);
// } else {
//   alert("No dummie!!");
// }

//switch
// let greeting = prompt("Tell me how to say hello", "Gutentaag!");
// switch (greeting.toLowerCase()) {   //NORMALIZING DATA
//   case "hello":
//     alert("I love saying ${greeting}!");
//     break;
//   case "wassup":
//     alert("${greeting} is SO 90's!!");
//     break;
//   default:
//     alert("I've never heard ${greeting} before!");
//     break;
// }

//TERNARY
let money = 10;
let currency = confirm("In dollars or not?");
currency ? alert(`$${money}`) : alert(money);   //? true : false

// let isAdult = confirm("Are you over 18?");
// if(isAdult) {
//   let isUnder80 = confirm("Are you under 80 years old?");
//   if(isUnder80) {
//     let isCool = confirm("Do you like Star Wars?");
//     if(isCool) {
//       alert("You are so cool!");
//     }
//   } else {
//     let isElderly = confirm("Do you enjoy prunes?");
//   }
// } else {
//   alert("You are not old enough")
// }










//
