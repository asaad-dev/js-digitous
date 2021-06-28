// Concaténation
console.log(`============ String - Concatenation ============`);

// Template literals
var name = `Julie`;
var age = 24;
console.log(`My name is ${name} and I'm ${age}`);

// Méthodes
console.log(`============ String - Methods ============`);

//  01 - Length 
var test = "example string";
console.log(test.length);

//  02 - Replace
var test2 = `Coding is hard`;          
console.log(test2);
test2 = test2.replace("hard", "fun");
// console.log(test2);

// 03 - charAt
test2 = test2.charAt(2); // accéder au caractère situé à un endroit précis d'une sting
// console.log(`"${test2}"`);

// 04- ToUpperCase & ToLowerCase
var test3 = "I'm normal";
test3.toUpperCase();
// console.log(test3);

// 05- Split
var test4 = "Lunch time";
var letters = test4.split("");
// console.log(letters);

// 06- indexOf
var test5 = "This is a text";
test5.indexOf("text");
console.log(test5);

// 07- Substring
var test6 = "Long string";
var sub = test6.substring(2, 4);
console.log(sub);
var end = test6.substring(2);
console.log(end);