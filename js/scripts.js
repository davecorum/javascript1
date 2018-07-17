let myArray = []; //MOST basic form of array
let favoriteFoods = ["pizza", "hamburgers", "french fries"];
let allTheThings = ["string", 32, ["stuff"], {}, false];

//console.log(favoriteFoods[1]); //hamburgers is the result

//alert(favoriteFoods.length) //gives how many members are in the array

//TRY IT OUT #1
let myFavs = ["Spiderman Homecoming", "0", true, 2019];
// console.log(myFavs, myFavs.length);

//Check if this is an array
// console.log(Array.isArray(myFavs), typeof myFavs);

//PUSH
// console.log(myFavs);
myFavs.push("Some person"); //Adds to the end of the array
// console.log(myFavs);

//UNSHIFT
myFavs.unshift("Me"); //Adds to the beginning of the array
// console.log(myFavs);

//POP
//let lastMember = myFavs.pop(); //.pop removes the last object from the array
// console.log(lastMember, myFavs);

//SHIFT
//myFavs.shift(); //.shift removes the first object form the array
// console.log(myFavs);

//SPLICE
// let removed = myFavs.splice(2); //1 argument: BEGINNING with that index, removes ALL indices after;
// console.log(myFavs, removed);
// console.log(myFavs, "BEFORE");
// myFavs.splice(1, 2); //2 arguments: Starting at the first number (index) and INCLUDING it, remove the secound number of items (count)
// console.log(myFavs, "AFTER");
// myFavs.splice(3, 1, ["I got added!!!"]); //3+ arguments: Starting at 3, remove 1 thing, and then add my array
// console.log(myFavs, "AFTER");
//  myFavs.splice(-3, 1); //If negative num is 1st arugment, starts at the END of the array and counts back to that spot

//SLICE
let copy = myFavs.slice(1, 4);
// console.log(copy, myFavs);

//IndexOf
// let removeIndex = myFavs.indexOf("Me"); //returns the index of "Me" in our myFavs array
// console.log(removeIndex);
// myFavs.splice(removeIndex, 1);

//REVERSE
// let myNums = [1, 2, 3, 4, 5];
// console.log(myNums.reverse()); //.reverse changes the original order of the array
// console.log(myNums);

//SORT
// console.log(myFavs);
// myFavs.sort();
// console.log(myFavs);

let multiDimensional = [["hello", 1], ["goodbye", 0]];
// console.log(multiDimensional[0][0], multiDimensional[1][0]);

//TRY IT OUT #2
let favoriteMovies = [];
let movie1 = ["Infinity War", "Avengers"];
let movie2 = ["Black Panther", "T'Challa"];
let movie3 = ["Star Wars V", "Luke Skywalker"];

favoriteMovies.push(movie1);
favoriteMovies.unshift(movie2);
favoriteMovies.splice(1, 0, movie3);

let titles = [];
titles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0]);
// alert(titles);

let favAndLeast = [];
favAndLeast.push(favoriteMovies[0], favoriteMovies[2]);
// console.log(favAndLeast);

// alert(favoriteMovies.length);


//LOOPS

//FOR
// for (let i=0; i < 11; i++) {
//   console.log(`The number is ${i * 10}!`);
// }

// const colors = ["blue", "purple", "green", "red", "aquamarine", "lavender", "dodgerblue"];
// for(let index = 0; index < colors.length; index++) {
//   console.log([index]);
//   continue;
//   console.log("Why can't you see me?");
// }

//WHILE
// let counter = 0;
// while (counter < 10) {
//   console.log(`Before ${counter}`);
//   counter++;
//   console.log(`After ${counter}`);
// }

//FOR EACH
// const captains = ["Kirk", "Picard", "Sisko", "Janeway", "Lorca"];
// captains.forEach( (captain, index) => {
//   console.log(captain, index);
// })

//FOR...OF
const captains = ["Kirk", "Picard", "Sisko", "Janeway", "Lorca"];
for (let captain of captains) {
  console.log(`Hello Captain ${captain}`);
}

//FOR...IN is for OBJECTS
const me = {
  firstName: "David",
  lastName: "Corum",
  age: 16
}

for (let property in me) {
  console.log(me[property]);
}

//TRY IT OUT #3
let input = "Some movie"
for (let i = 0; i < favoriteMovies.length; i++) {
  if (input === favoriteMovies[i][0]) alert(`${favoriteMovies[i][0]}, ${favoriteMovies[i][1]}`)
}














//
