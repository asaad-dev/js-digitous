// Exo : 01
//Imports
var axios = require('axios');
var prompt = require("prompt");


axios.get("https://restcountries.eu/rest/v2/all").then(function (getCountries) {
    // console.log(getCountries);
    var countriesNames = [];
    countriesNames = getCountries.countriesNames;
    // console.log("country -", + countriesNames.name);
},);



// Exo : 02
axios.get("https://api.chucknorris.io/jokes/random").then(function (getFact) {
    prompt.start();

    function displayPrompt() {
    prompt.get({ Joke: "hi, tell me a joke", getFact }, function (err, result) {
        if (err) {
            return onErr(err);
        }
        console.log(result.getFact);
    });
}
displayPrompt();
});

// Exo : 03
