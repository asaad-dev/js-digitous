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