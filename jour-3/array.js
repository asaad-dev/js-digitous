// Un tableau (array) est une liste de valeurs.
// Chaque élément à l'intrieur du tableu posséde un index.

var elements = ["water", "fire", "earth", "wind"];

// Longueur d'un tableau
console.log("======= Longueur ======");

var test = [1, 2, 3, 4, 5];

console.log(test.length);

// Accéder aux valeurs d'un array
console.log("======= Accéder aux valeurs ======");

var ingredients = ["eggs", "flour", "butter", "milk"];

console.log(ingredients[3]);
console.log(ingredients[0]);

//
// Méthodes
//

// 1- .indexOf
console.log("============= IndexOf ============");

var nums = ["first", "second", "third"];

console.log(nums.indexOf("second"));

// 2- Push & Unshift
console.log("============= Push & Unshift ============");

var cake = ["eggs", "flour"];

console.log(cake);
cake.push("milk");
console.log(cake);
cake.unshift("butter");
console.log(cake);

// 3- Pop & Shift
console.log("============= Pop & Shift ============");

var list = ["coffee", "soap", "tomatoes", "rice"];

console.log(list);
list.pop();
console.log(list);
list.shift();
console.log(list);

// 4- Reverse
console.log("============= Reverse ============");

var testR = ["one", "two", "three"];

console.log(testR);
testR.reverse();
console.log(testR);

// 5- Sort
console.log("============= Sort ============");

var testS = [5, 1, 4, 43, 5, 7, 10];

console.log(testS);
testS.sort((a,b) => a - b);
console.log(testS);
testS.sort((a, b) => b - a);
console.log(testS);

//6- Slice
console.log("============= Slice ============");

var testSlice = [1, 2, 3, 4, 5, 6];

//? Something wrong here
console.log(testSlice);
testSlice.slice(2, 4);
console.log(testSlice);

//6- Join
console.log("============= Join ============");

var testJoin = ["Hello", "there", "!"];

//? Something wrong here
console.log(testJoin);
testJoin.join("");
console.log(testJoin);
testJoin.join(" ");
console.log(testJoin);