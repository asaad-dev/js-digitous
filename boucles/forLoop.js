// Exo : 01 
let sum = 0;

for(let i = 5; i <= 10; i++) {
    sum += i * i;
}
// console.log(sum);


 // Exo : 02
 let count = 0;
 let total = 1000;
for (var i = 100; i <= total.length; i++) {
    if (i % 7 === 0) {
        count++;
    }
}
// console.log(total);


//  Exo : 03 
function entierAleatoire(min, max) {
    if(entier >= 5) {
        console.log(entier);
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entier = entierAleatoire(0, 20);

// entierAleatoire();

//  Avec variable
var de;
de = Math.floor(Math.random() * 20) +1;

if(de >= 5) {
    // console.log(de);
}

var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);


//  Exo : 04
//10
//34
//17
//30
//14


//  Exo : 05
//12
//24
//33
//39
//42
//0


//  Exo : 06
//0
//box2 = 42
//3
//box1 -1
//i = 1
//-3
//box2 = 5
//2
//box1 - 1



