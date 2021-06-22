//  Exo : 01
function calculate() {
  
    // declaration of the variables.  
    let number1 = 5;
    let number2 = 4;
    let operator = '*';

    if (operator == '+') {  
    result = number1 + number2; 
    console.log(result); 
    }  else if (operator == '-') {  
    result = number1 - number2;  
    }  else if (operator == '*') { 
    result = number1 * number2;  
    }  else {  
    result = number1 % number2;  
    }  
}

// display the result of the Calculator  
console.log(calculate());
console.log("Result is " + result);  

//Exo : 02