// Un objet est une variable dans laquelle on peut stocker plusieurs valeurs, associées à des clés.

var user = {
    name: "Asaad",
    genre: "m",
    age: "32",
    isStudent:  true,
    favorites: ["coffee", "nutella", "pizza"]
  };
  
  
  //
  // Accéder aux valeurs d'un objet
  //
  console.log(`============ Accéder aux valeurs d'un objet ============`);
  
  console.log(user);
  //  01
  console.log(user.name);
  //  02
  console.log(user["favorites"]);
  
  
  //
  //  Méthodes
  //
  
  // 1- Assign
  console.log(`============ Assign - Method ============`);
  
  var user = {
    name: "Peter",
    email: "peter@object.com",
  };
  
  var double = {
    email: "peter@newmail.com",
    isAdmin: true,
  };
  
  Object.assign(user, double);
  
  console.log(user);
  
  
  // 2- HasOwnroperty
  console.log(`============ HasOwnProperty - Method ============`);
  
  var cat = {
    name: "Pickle",
    color: "black"
  };
  
  console.log(cat.hasOwnProperty("name"));  // true
  console.log(cat.hasOwnProperty("age")); // false
  
  
  // 3- Key
  console.log(`============ Key - Method ============`);
  
  Object.keys(cat);
  console.log(cat);
  
  
  // 3- Values
  console.log(`============ Values - Method ============`);
  
  //? Something wrong here
  Object.values(cat);
  console.log(cat);
  
  // 3- Entries
  console.log(`============ Entries - Method ============`);
  
  //Object.entries(a);
  console.log(cat);