// // 01 - Array
// var fruits = ["mamngo", "lemon", "blueberry"]
// console.log(fruits);
// console.table(fruits);


// // 02 - Access
// var ingredients = ["eggs", "milk", "butter"];
// console.log(ingredients[1]);
// console.log(ingredients.indexOf("butter"));


// // 03 Add & Remove 
// var objects = ["pen", "book", "lamp"];
// // Add chair
// objects.unshift("chair");   
// console.log(objects);

// // Remove lamp
// objects.pop();  
// console.log(objects);

// // Add labtop
// objects.push("labtop"); 
// console.log(objects);

// // Remove chair
// objects.shift();    
// console.log(objects);


// // 04 -  Order
// var numbers = [4, 10, 8, 12, 6];
// numbers.reverse();
// console.log(numbers);

// // Ascending
// numbers.sort((a, b) => a - b);
// console.log(numbers);


// // 05 Boucle
// var total = 0;
// var limit = 10;
// for (var i = 0; i < limit; i++) {
//     console.log(i);
// }


// 06 - Reverse
var sentence = "Hello Konexio";
// for (var i = sentence.length - 1; i >= 0; i--) {
//     console.log(sentence[i]);
// }

var reversed = "";
for (var i of sentence) {
    reversed = i + reversed;
}
console.log(reversed);
