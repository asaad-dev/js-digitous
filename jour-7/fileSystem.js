// Node implémente (Input / Output) à travers le module `fs`
const fs = require('fs');

// 
// Working with file descriptors in Node.js 
// 

// Récupérer les informations d'un ficher
// `fs.stat(path, callback)`

// Exemple :
console.log("C'est parti pour la rechere :");
fs.stat("jour-7/hello.txt", function (err, stats) {
    if(err) {
        return console.error(err);
    }

    console.log(stats);
    console.log("Et voilà ! Voyons le résultat");
})