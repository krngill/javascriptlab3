const output = document.getElementById("output");
const output2 = document.getElementById("output2");

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
  let obj = {};
  obj.name = {
    firstName: firstName,
    lastName: lastName,
  };
  obj.age = age;
  obj.gender = gender;
  obj.interests = interests;
  obj.greeting = function () {
    alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
  };
  return obj;
}

function createNewKaran(first, last, age, gender, interests) {
  const karan = {};
  karan.name = {
    firstName: first,
    lastName: last,
  };
  karan.age = age;
  karan.gender = gender;
  karan.interests = interests;
  karan.greeting = function () {
    alert(`Hello, this is ${this.name.first} ${this.name.last}!`);
  };
  return karan;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("P1", "LP1", 10, "Female", ["swimming", "dancing"]);

const karanObj1 = createNewKaran("Karan", "Gill", 21, "male", [
  "swimming",
  "coding",
  "co-op gaming",
]);

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
// function Person(firstName, lastName, age, gender, interests) {
//   this.name = {
//     firstName: firstName,
//     lastName: lastName,
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.greeting = function () {
//     alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
//   };
// }

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
// let person2 = new Person("P2", "LP2", 90, "Male", ["dancing", "singing"]);

// const person3 = new Karan("Karan", "One", 19, "Male", ["coding", "co-op gaming"]);
// const person4 = new Karan("Karan", "Twp", 20, "Male", ["swimming", "co-op gaming"]);
// const person5 = new Karan("Karan", "Three", 21, "Male", ["swimming", "coding"]);
// const person6 = new Karan("Karan", "Four", 22, "Male", ["swimming"]);
// const person7 = new Karan("Karan", "Five", 23, "Male", ["coding"]);
// person3.greeting();
// person4.greeting();
// person5.greeting();
// person6.greeting();
// person7.greeting();
/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
function Karan(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.greeting = function () {
    alert(`Hello, this is ${this.name.first} ${this.name.last}!`);
  };
  this.bio = function () {
    alert(
      `The interest of ${this.name.first}, of age ${this.age}, of gender ${this.gender} are ${this.interests}. He is also got a good sense of humor!`
    );
  };
}
/* STEP 3b: Instantiate a new Person based on the above constructor */
const karan1 = new Karan("Karan", "Gill", 24, "Male", ["shoes", "social media", "creative arts"]);

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']   = [output] 10
// person1.interests[1] = [output] 'dancing'
// person1.bio() = [ouput] person.bio is not a function => reason: there is not function named bio in that object

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();
car.brand = "Honda";
car.model = "Civic";

/* STEP 4b: Once 'car' is created, add various properties and methods… */

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);
console.log(anotherCar.brand);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// [METHOD 1]
const createNewHamburger = function (
  buns,
  garnishes,
  cheeses,
  sauces,
  patties,
  pattyCount,
  extras
) {
  const obj = {};
  obj.buns = buns;
  obj.garnishes = garnishes;
  obj.cheeses = cheeses;
  obj.sauces = sauces;
  obj.patties = patties;
  obj.pattyCount = pattyCount;
  obj.extras = extras;
  obj.describe = function () {
    return `This hamburger has ${this.buns} buns, ${this.garnishes} garnishes, ${this.cheeses} cheeses, ${this.sauces} sauces, ${this.pattyCount} ${this.patties} patties, and includes ${extras}.`;
  };
  return obj;
};

// [METHOD 2]
function Hamburger(buns, garnishes, cheeses, sauces, patties, pattyCount, extras) {
  this.buns = buns;
  this.garnishes = garnishes;
  this.cheeses = cheeses;
  this.sauces = sauces;
  this.patties = patties;
  this.pattyCount = pattyCount;
  this.extras = extras;
  this.describe = function () {
    return `This hamburger has ${this.buns} buns, ${this.garnishes} garnishes, ${this.cheeses} cheeses, ${this.sauces} sauces, ${this.pattyCount} ${this.patties} patties, and includes ${extras}.`;
  };
}

let hamburgerObjFromFunction = new Hamburger(
  "Whole Wheat",
  ["Lettuce", "Tomato"],
  ["Cheddar", "Swiss"],
  "Barbecue, Ketchup",
  "Beef",
  2,
  ["Pickles", "Olives"]
);
let hamburgerObjFromConstructor = new Hamburger(
  "Whole Wheat",
  "Lettuce",
  "Cheddar",
  ["Barbecue", "Ketchup"],
  "Beef",
  2,
  ["Pickles", "Hot Peppers", "Olives"]
);

console.log(hamburgerObjFromFunction.describe());
console.log(hamburgerObjFromConstructor.describe());

/**
 * Explaination
 * So I have created two ways of creating the "Hamburger": -
 * 1. using "createNewHamburger" function
 * 2. using "Hamburger"
 * Reason: It was not written in which way I need to create the object.
 * I also experimented with which types of data types we can pass in there and found out that we can pass any datatype and it will not give error until we access the wrong thing.
 */
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
