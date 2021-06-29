// Exo : 01

var fs = require('fs');

fs.readFile("jour07.txt", function (err, stats) {
    if (err) {
        return console.error(err);
    }

    // console.log(stats);
});


//  Exo : 02
var array = [1, 2, 3, 4, 5];

var double = array.map(function(num) { 
    return num * 2;
});

// console.log(double);


//  Exo : 3
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

let shortNames = longNames.map(obj => {
    resObj = {name: obj.firstName + " " + obj.lastName};
    return resObj;
});

// console.log(shortNames);


//  Exo : 04
var array = [1, "toto", 34, "javascript", 8]
var numbers = array.filter(function(num) {
    return (parseInt(num));
    // return !(parseInt(num));
});

// console.log(numbers);


//  Exo : 05
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var even = numbers.filter(function(numPair) {
    return ((numPair % 2) === 0);
})

// console.log(even);


//  Exo : 06
var  cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]
