/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const culinaryDropOut = {
  name: "Culinary Dropout",
  cuisine: [ "American" , "Bar", "Sharable Plates" ],
  numberOfStars: 4.4,
  favorited: true,
}

// adding new properties without modifying the original object

culinaryDropOut.address = "7135 E Camelback Rd, Scottsdale, AZ 85251"
culinaryDropOut.zipCode = 85251
culinaryDropOut.acceptsReservations = true

//updating the following properties 

culinaryDropOut.favortied = false
culinaryDropOut.numberOfStars = 5.0
culinaryDropOut.cuisine.push("Vegetarian")

// writing a function called 'retrieveProperty'

function retrieveProperty(object, key) {
  if (key in object) {
    return object[key];
  } else {
    return "The information you requested does not exist";
  }
}

//Invoking the functions 


console.log(retrieveProperty(culinaryDropOut, "name")); // "Culinary Dropout"
console.log(retrieveProperty(culinaryDropOut, "favortied")); // false
console.log(retrieveProperty(culinaryDropOut, "cuisine")); // [ "American" , "Bar", "Sharable Plates", "Vegetarian" ]
console.log(retrieveProperty(culinaryDropOut, "nickname")); // "receive an error message"
console.log(retrieveProperty(culinaryDropOut, "state")); // "error message"