// //  01 - Object
// var cat = {
//     name: "Garfield",
//     age: 3,
//     isCute: true,
// };

// console.log(cat);
// console.log(cat.name);

// if (cat.isCute === true) {
//     console.log("So cute");
// } else {
//     // console.log();
// }


// // 02 Combine
// var cat2 = {
//     name: "Simba",
//     age: 4,
//     isCute: false,
// };

// var cats = {
//     cat: {},
//     cats: {},
// };

// console.log(cat.age);
// console.log(cat2.isCute);


// //  03 Even
// function checkIfEven(num) {
//     if(num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(checkIfEven(9));
// console.log(checkIfEven(4));


// // 04 - Compare
// function compare(num1, num2) {
//     if(num1 > num2) {
//         // console.log("num1 is bigger");
//         return "num1 is bigger";
//     } else if(num2 > num1) {
//         // console.log("num2 is bigger");
//         return "num2 is bigger";
//     } else {
//         // console.log("both are the same");
//         return "both are the same";
//     }
// }

// console.log(compare(50, 20));
// var results = compare(30, 30);
// console.log(results);

// 05 - Add up
function addUp (num) {
    let sum = 0;
    
    for (let i = 1; i <= num; i += 1) {
      sum += i;
    }
    
    return sum;
  }

console.log(addUp(12));


// 06 - Time
function format(num) {
    // return Math.floor(num / 60) + ':' + Math.floor(num % 60) + ':' + (num - 2) ;
    var minutes = 0;
    var seconds = 0;
    return minutes = ":" + Math.floor(num / 60) + ":" + seconds + ":" + (num - minutes * 60) + ":" + minutes.substr(-2) + ":" + AudioScheduledSourceNode.substr(-2) + seconds;
}

console.log(format());


//? Bonus