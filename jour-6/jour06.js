// Imports 
var prompt = require("prompt");

// Exo : 01 - Formats
// console.log("============ Exo : 01 Date Formats ============");

function formatDate() {
    const birthDay = new Date();
    console.log(`${birthDay.getDate()}/${birthDay.getMonth()}/${birthDay.getFullYear()}`);

    // birthDay.getFullYear();
    // console.log(birthDay);

    // var todaysDate = new Date; 
    // todaysDate = todaysDate.toDateString(); 
    // console.log(todaysDate);

    // let ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(birthDay);
    // let mo = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(birthDay);
    // let da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(birthDay);
    // console.log(`${ye}-${mo}-${da}`);

}

// formatDate("2001-11-17");


// Exo : 02 - Age
// console.log("============ Exo : 02 Age ============");

function calculateAge() {

    var birthDate = new Date("06/24/2001"); 
    var month = Date.now() - birthDate.getTime();

    var age = new Date(month);

    var year = age.getUTCFullYear();

    var age = Math.abs(year - 1970);
   
}
// console.log(calculateAge(age));


// Exo : 03 - Validator
console.log("============ Exo : 03 - Validator ============");

function checkProfile() {
    prompt.start();  // démarre le prompt

    function onErr(err) { 
    console.log(err);
    return;
    }

    prompt.get([
        {
          name: 'username',
          required: true,
          type: "string",
        }, 
          {
          name: 'email',
          required: true
        },
    
        {
          name: 'password',
          hidden: true,
          conform: function (value) {
            return true;
          }
        }], function (err, result) {
            
        // Log the results.
        console.log('Command-line input received:');
        console.log('  username: ' + result.username);
        console.log('  password: ' + result.password);
      });
}

checkProfile();