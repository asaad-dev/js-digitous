// Import Node.JS
console.log(process.argv);

// Import Internal files
import "table-utils.js";

//  Exo : 01
function calculate(number1, operator, number2) {
    if (operator == '+') {  
    result = number1 + number2; 
    }  else if (operator == '-') {  
    result = number1 - number2;  
    }  else if (operator == '*') { 
    result = number1 * number2;  
    }  else {  
    result = number1 % number2;  
    }  
}

// (calculate(5, '*', 4));
// console.log(result);

// console.log(parseInt(process.argv[2]) * parseInt(process.argv[4]));



//  Exo : 02
addition();


//  Exo : 03
