//  Exo : 01
console.log(process.argv);

function calculate(number1, operator, number2) {
  
    // // declaration of the variables.  
    // let number1 = 5;
    // let number2 = 4;
    // let operator = '*';

    if (operator == '+') {  
    result = number1 + number2; 
    }  else if (operator == '-') {  
    result = number1 - number2;  
    }  else if (operator == '*') { 
    result = number1 * number2;  
    }  else {  
    result = number1 % number2;  
    }  

    // console.log(parseInt(process.argv[0]) * parseInt(process.argv[1]));
    // console.log("Result is " + result);  

}

(calculate());



// //Exo : 02
// function multiply() {

// }