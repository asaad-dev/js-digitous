// Les fonctions servent à effectuer des actions.
// On peut grouper du code à l'intérieur de fonctions pour découper la logique en morceaux indentifiables et cohérents.

//
// Function declaration
//
console.log(`============ Function Declaration ============`);

function multiply(num) {
  return num * num;
}

console.log(multiply(5));
var age = 27;
console.log(multiply(age));


//
// Scope
//
console.log(`============ Scope ============`);

var global = "hey !";

function logData() {
    var local = "hello !";

    console.log(global);
    console.log(local);
}

console.log(global);
console.log(local);