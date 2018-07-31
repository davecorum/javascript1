let loginForm = document.forms.login;
let emailInput = loginForm.email;
let passwordInput = loginForm.password;

/*
THE FOUR MAIN SYMBOLS TO MEMORIZE!!!!!!!!
? = after this = QUERY PARAMETER
& = separates parameters
*/

/*
TWO OF THE FIVE MAIN VERBS!!!!!!
GET = You give data, and they don't give back
POST = User gives data to do something
*/

emailInput.addEventListener("keyup", e => {
  listItems.call(emailInput);
  console.log(this); //What key did they hit?
  e.target.value //What is getting typed in?
})

loginForm.addEventListener("submit", e => { //submit event, only valid on FORMS
  e.preventDefault(); //stops default action of
  //...do some checks, submit the form, etc...
  loginForm.reset(); //Clear inputs on form
})


//THIS
// let favorites = ["pickles"];
function listItems(pet) {
  console.log(this);
  alert(`${this.name} loves ${this.favorites[0]} and has a ${pet}.`);
};
//THIS will always default to the window unless we change it
let user = {
  name: "David",
  cart: [],
  coupons: [],
  favorites: ["cheese"],
  listFavorites: listItems //IMPLICITLY BINDS "THIS"
};
//IMPLICIT "THIS" BINDING
// user.listFavorites();
//log out: David loves cheese

//EXPLICIT BINDING
let jr = {
  name: "Junior Royce?",
  cart: ["guns"],
  coupons: [1.99],
  favorites: ["Star Wars"]
}
//CALL
// listItems.call(jr, "dog"); //Rule 1 about call is it must be called on a function
//Rule 2 for call is if the function being bound requires Arguents, they begin as the SECOND arguemnt of call()

//APPLY
// listItems.apply(jr, ["cat"]);
























//
