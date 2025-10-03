/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

//writing a function called 'grabCategories'

function grabCategories(object) {
  return Object.keys(object);
}

//calling the function 

console.log(Object.keys(papaJohns));

//writing a function called 'verifyValues' 

function verifyValues(object, targetNumberOfValues) {
  const values = Object.values(object);
  return values.length === targetNumberOfValues;
}

//calling the function

console.log(verifyValues(papaJohns, 5)); 
console.log(verifyValues(papaJohns, 20));

//creating a function called 'getToppingsInfo' 

function getToppingsInfo(object) {
  return Object.entries(object.pizzaToppings);
}

//calling the function  

console.log(getToppingsInfo(papaJohns));

//Now, without changing the previous code, add a `printAd` method to our `papaJohns` object that will announce a sale. It will intake a topping and return the following string:
// `"Welcome to Papa John's! We are located at 555 Main Street. This week, we are having a sale on {topping} for ${topping price}. Better Ingredients. Better Pizza. Papa John's."`

papaJohns.printAd = function(topping, price) {
console.log(`Welcome to ${papaJohns.name}! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $${price}. ${papaJohns.slogan}`);
}

papaJohns.printAd("bacon", 3);

//Refactoring this function so it can handle any changes in address or slogan. 

papaJohns.address = "1234 New Address, City, State, Zip"
papaJohns.slogan = "New Slogan Here!"

papaJohns.printAd("bacon", 3);


