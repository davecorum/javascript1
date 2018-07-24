const div = document.querySelector(".myDiv");
const trekkies = "https://static.turbosquid.com/Preview/2016/10/05__07_05_04/Star_Trek_Enterprise_NCC_1701_0001.jpgDFB123EF-B830-4DB6-9B7C-8F7FD89403F4Original.jpg"
let image = document.querySelector("img");
// console.log(div.textContent); //Returns text (only) in ALL children
// div.textContent = "Say cheese and die!" //RESET the value of the text inside an element

// console.log(div.innerHTML);
// div.innerHTML = "<h1>Hey there...</h1>";

let newH1 = document.createElement("h1");
newH1.textContent = "I am the greatest...";
// newH1.id = "red_bg"; //set an id explicitly
div.appendChild(newH1); //Always adds AFTER the last element in the parent

let newH2 = document.createElement("h2");
newH2.textContent = "I am before the h1!";
newH2.className = "blue-bg";
newH2.className += " white-text"; //WORKAROUND for adding additional classes
div.insertBefore(newH2, newH1); //1st arg is the NEW element. 2nd arg where you want the 1st arg to go before

let newP = document.createElement("p");
newP.textContent = "I am a squirrel...";
newP.classList.add("purple-text", "green-bg");
div.appendChild(newP);

let span = document.querySelector("span");
span.addEventListener("mouseenter", (e) => {
  span.classList.remove("white-text");
});

span.addEventListener("click", (e) => {
  span.classList.toggle("giant-text");
  span.classList.contains("green-bg") ?
  span.classList.replace("green-bg", "blue-bg") //1st class is the current one, 2nd is the class you are replacing it with
  :
  span.classList.replace("blue-bg", "green-bg");
});

image.addEventListener("click", (e) => {
  image.setAttribute("src", trekkies);
})













































































//
