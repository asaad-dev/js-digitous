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
})

console.log(double);

//  Exo : 3
var longName = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

var shortName = [
    
]