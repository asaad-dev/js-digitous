//  Exo : 01
var nums = [];
var randomNum = 0;

for (var i = 0; i <50; i++) {
    randomNum = Math.floor(Math.random() * (100 + 1) +1);

    nums.push(randomNum)
    // console.log(randomNum);
}

var total = 0;

console.log("i:", i);
for (var i = 0; i <= nums.length - 1; i++) {
    total = total += nums[i];
}

console.log('Total:', total);


//  Exo : 04 - Nested loop
console.log("============ Exo : 04 - Nasted lopps ============");

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let conunt = 0;
for (var i = 0; i < words.length; i++) {
    // let letters = words[i].split("");
    let letter = words[i];
    // console.log(letters);

    for(var j = 0; j < letters.length; j++) {
        if (letters[j] === "o") {
            count++;
        }
    }
}
// console.log(count);