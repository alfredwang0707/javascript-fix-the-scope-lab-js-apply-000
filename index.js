/*### `myAnimal` and `yourAnimal`

The first two functions, `myAnimal` and `yourAnimal`, both return a variable
`animal`, but the tests for the two expect different values. The tests are
designed so that:

- you cannot hard code `return 'cat'`
- `yourAnimal` _must_ return a variable named `animal`.
- `yourAnimal` should not reassign the existing `animal` declared on the first
  line (in the _global scope_). */


var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope 
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  let animal = "cat";
  return animal
}
 /*`add2`

The third function in `index.js`, `add2()` takes in a number and returns that
number plus two. Well, at least, that is what it _should_ do. What is wrong? */

function add2(n) {
  return n + two

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
