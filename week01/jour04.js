// //  01 - Object
// var cat = {
//     name: "Garfield",
//     age: 3,
//     isCute: true,
// };
// console.log(cat.name);
// if (cat === true) {
//     console.log("So cute");
// }


// //  02 Combine
// var cat2 = {
//     name: "Simba",
//     age: 5,
//     isCute: false,
// };

// var cats = {
//     cat: {
//         name: "Garfield",
//         age: 3,
//         isCute: true,
//     },

//     cat2: {
//         name: "Simba",
//         age: 5,
//         isCute: false,
//     }
// };

// console.log(cat.age);
// console.log(cat2.isCute);


// //  03 Even
// function checkIfEven(num) {
//     if(num % 2) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// console.log(checkIfEven(9));
// console.log(checkIfEven(4));


// 04 - Compare
var comparedNum = "";
function compare(sum1, sum2) {
    if(num1 > comparedNum) {
        console.log("sum1 is bigger");
    } else if(num2 > comparedNum) {
        console.log("sum2 is bigger");
    } else if (sum1 === sum2) {
        console.log("both are the same");
    } else {
        console.log();
    }
}
console.log(compare(10, 20));