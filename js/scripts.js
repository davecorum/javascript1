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
// let currency = confirm("In dollars or not?");
// currency ? alert(`$${money}`) : alert(money);   //? true : false

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

let name = prompt("What's your name?", "User");
let color = prompt("What's your favorite color?", "Red, Blue, Yellow, Orange, Pink, White, Purple, Black, Gray, Green");

switch (color.toLowerCase()) {
  case "red":
    alert(`${name}, red's not very impressive...`);
    break;
  case "blue":
    alert(`Ooh, I like that choice ${name}.`);
    break;
  case "yellow":
    alert(`Why so yellow ${name}?`);
    break;
  case "orange":
    alert(`Great choice ${name}!`);
    break;
  case "pink":
    alert(`How pretty, ${name}.`);
    break;
  case "white":
    alert(`That's a pretty bland choice ${name}/`);
    break;
  case "purple":
    alert(`Purple's not a bad choice ${name}.`);
    break;
  case "black":
    alert(`Damn ${name}, so edgy...`);
    break;
  case "gray":
    alert(`Really ${name}? Gray's your favorite color?`);
    break;
  case "green":
    alert(`Green's a pretty nice color ${name}.`);
    break;
  default:
    alert(`Hey ${name}, I also like ${color}!`);
}








//
