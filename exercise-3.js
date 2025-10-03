// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};


//writing the 'printPizzaPlace' function here that iterates through the object and prints out its properties and values.

function printPizzaPlace(pizzaPlace) {
  for (let key in pizzaPlace) {
    console.log(`${key}: ${pizzaPlace[key]}`);
  }
}

printPizzaPlace(dominos);
console.log(printPizzaPlace(dominos));

//writing 'toppingsPriceRange 

function toppingsPriceRange(pizzaPlace) {
  let prices = Object.values(pizzaPlace.pizzaToppings);
  let minPrice = Math.min(...prices);
  let maxPrice = Math.max(...prices);
  return { min: minPrice, max: maxPrice };
}

console.log(toppingsPriceRange(dominos));

//writing 'averageStarRating' function that calculates the average star rating of the pizza place.

function averageStarRating(pizzaPlace) {
  let ratings = Object.values(pizzaPlace.starReviews);
  let total = ratings.reduce((acc, rating) => acc + rating, 0);
  return total / ratings.length;
}

console.log(averageStarRating(dominos));