// Parfois, on a besoin de répéter un bout de code un certain nombre de fois. Plutôt que de tout réécrire, on peut utiliser une boucle et lui spécifier :
//  * soit combien de fois ce code devra être excuté ?
//  * soit quelle est la condition pour que la boucle tourne ?


//
// Boucle While
//

// La boucle `while` est utilisée lorsqu'on ne connaît pas le nombre de répétitions (itérations) nécessaires :
//  * on exécute le code jusqu'à ce qu'une condition d'arrêt soit validée.


//
// Boucle For
//

// La boucle `for` est utilisée lorsqu'on connaît le nombre d'étapes (itérations) nécessaires : 
//  * on programme la boucle pour tourner `x` fois.

console.log("======= For Loop ======");

var goal = 10;

for (var i = 0; i <= goal; i++) {
  console.log(i);
}


//
// Break & Continue
//   

console.log("======= Break & Continue ======");

var menu = ["salad", "burger", "cheese", "dessert", "coffee"];

for (var i = 0; i < menu.length; i++) {
  if(menu[i] === "cheese") {
  //  break; // arrête avant le console.log de "cheese"
  }
  
if (menu[i] === "coffee") {
    continue;
  }
  console.log(menu[i]);
}


//
// Récursivité
//

console.log("======= Récursivité ======");

function countDown(num) {
  if (num === 0) {
    console.log(num + " finished !");
    return;
  }

  console.log(num);
  countDown(num - 1);
}

countDown(5);
