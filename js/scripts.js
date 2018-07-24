//QUERYING THE DOM
const body = document.getElementsByTagName("body"); //ALWAYS A STRING
// console.log(body[0]);
const header = document.getElementsByClassName("heading");

const paragraph = document.getElementById("paragraph1"); //IDS ARE MOSTLY USED FOR JAVASCRIPT
// console.log(paragraph);
let div = document.querySelector("#beth-is-cool"); //GIVES FIRST INSTANCE, BUT CAN DO TAG (just the tag name), CLASS (use the .), OR ID (use the #)

// div.addEventListener(
//   "mouseover",
//   ev => { //ES6 way to write callback
//     console.log(ev);
//     div.style.backgroundColor = "indigo";
//   }
  // function(ev) {
  //   div.style.backgroundColor = "e40007"; //ES5 way to write callback
  // }
// ); //First string is the event,


 //TAKEHOME
const h3 = document.querySelector("#temp");
let scale = prompt("What scale (C or F) do you want to use?", "F or C");
let temp = prompt("How hot it it?", "99");

function convertTemp(scale, temp) {
  scale = scale.toLowerCase();
  let returnVal;
  let oppositeVal = scale === "c" ? "Fahrenheit" : "Celcius";
  temp = parseInt(temp);
  if (!isNaN(temp)) {
    returnVal = scale === "c" ? (1.8 * temp) + 32 : (5 / 9) * (temp - 32);
    h3.innerText = `Your temperature is ${returnVal} ${oppositeVal}`;
  } else {
    scale = prompt("What scale (C or F) do you want to use?", "F or C");
    temp = prompt("How hot is it?", "99");
    convertTemp(scale, temp);
  }
};
convertTemp(scale, temp);

h3.addEventListener("click", (e) => {
  let valueArr = e.target.innerText.split(" ");
  scale = valueArr[valueArr.lenth - 1] === "Celcius" ? "C" : "F";
  temp = valueArr[valueArr.lenth - 2];
  convertTemp(scale, temp);
});










































//
