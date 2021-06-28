// 01 - Number
var integer = 102;
var float = 13.9;
// console.log(integer);
// console.log(float);

// 02 - Convert
var basic = 34;
var stringified = basic.toString();
// console.log(stringified);

// 03 - Round
var num = 1.5;
var rounded = Math.round(num);
// console.log(rounded);

// 04 - Arithmétique
var test = 12;
var bis = 5;
// console.log(test + bis);
// console.log(test - bis);
// console.log(test * bis);
// console.log(test / bis);
// console.log(test ** bis);
// console.log(test % bis);

// 05 - Comparaison
var test = 143;
var bis = 219;
// console.log(test > bis);
// console.log(test < bis);
// console.log(test >= bis);
// console.log(test <= bis);
// console.log(test === bis);
// console.log(test != bis);
// console.log(test !== bis);

// 06 - Condition
var limit = 50;
var score = 64;
if (score >= limit) {
    console.log('Ok good !');
} else {
    console.log('Oh noo...');
}

// 07 - Condition II
var password = "azerty";
if (password.length > 5) {
    // console.log("The password is secure");
}

// // 08 - Condition III
// if (score >= limit && password > 5) {
//     console.log("Everything is good");
// } else if (score >= limit || password > 5) {
//     console.log("Something is good");
// } else {
//     console.log("Nothing is good");
// }

// //? Bonus
// var  random = Math.floor(Math.random() * 6) + 1;
// var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
// if (random === 6) {
//     console.log(random, "Yes I win");
// } else {
//     console.log(random, "So close...");
// }

//? Bonus II
// var month = "April";

// switch (month) {
//     case "January": 
// 		console.log("Winter");
// 		break;
// 	case "April": 
// 		console.log("Spring");
// 		break;
// 	case "July": 
// 		console.log("Summer");
// 		break;
// 	default: 
// 		console.log("Fall...");
// }

//? Bonus III
// var roundedNumber = 12.3;
// if (roundedNumber % 1 >= 0.5) {
//     console.log(Math.ceil(roundedNumber));
// } else {
//     console.log(Math.floor(roundedNumber));
// }

// var str = roundedNumber.toString().split(".")[1];
// console.log(str);

// var str = roundedNumber.toString()

// var decimal = str.substring(str.indexOf("."));
// console.log(decimal);

// if (decimal >= 5) {
//     console.log(Math.ceil(roundedNumber));
// } else {
//     console.log(Math.floor(roundedNumber));
// }