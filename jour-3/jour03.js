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
// for (var i = 1; i <= limit; i++) {
//     console.log(i);
// }


// // 06 - Reverse
// var sentence = "Hello Konexio";
// // for (var i = sentence.length - 1; i >= 0; i--) {
// //     console.log(sentence[i]);
// // }

// var reversed = "";
// for (var i of sentence) {
//     reversed = i + reversed;
// }
// console.log(reversed);


// //? Bonus
// for (var i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuss");
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else if (i % 7 === 0) {
//         // console.log();
//     } else {
//         console.log(i);
//     }
// }


// //? Bonus II
// var total = 0;
// var limit = 10;
// while (total <= limit) {
//     total++;
//     console.log(total);
// }


//? Bonus III
var promo5 = ["Kévin", "Laura", "Emran", "Elodie", "Anthony", "Eliott", "Andy", "Amar", "Art", "Baydir", "Julien", "Victor", "Yangchen", "Asaad"];
var nom = promo5[Math.floor(Math.random() * promo5.length)];
console.table(nom);

