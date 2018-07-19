//QUERYING THE DOM
const body = document.getElementsByTagName("body"); //ALWAYS A STRING
// console.log(body[0]);
const header = document.getElementsByClassName("heading");

const paragraph = document.getElementById("paragraph1"); //IDS ARE MOSTLY USED FOR JAVASCRIPT
// console.log(paragraph);
let div = document.querySelector("#beth-is-cool"); //GIVES FIRST INSTANCE, BUT CAN DO TAG (just the tag name), CLASS (use the .), OR ID (use the #)

div.addEventListener(
  "mouseover",
  ev => { //ES6 way to write callback
    console.log(ev);
    div.style.backgroundColor = "indigo";
  }
  // function(ev) {
  //   div.style.backgroundColor = "e40007"; //ES5 way to write callback
  // }
); //First string is the event,
















































//
