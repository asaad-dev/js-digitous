//
// Requêtes
//

// Import Axios
var axios = require('axios');

// Methods
//  * axios.post()
//  * axios.pust()
//  * axios.put()
//  * axios.delete()

axios.get("https://restcountries.eu/rest/v2/name/france").then(function (res) {
  //console.log(res);
  //console.get(res.data);
});

axios
    .get("https://restcountries.eu/rest/v2/name/france")
    .then((res) => {
      //console.log(err);
    });


//
// JSON
//

// 1- JSON.parse() -> transforme une string en un objet littéral
var jsonStr = '{"foo": 1, "bar": ["buzz", "woody"]}';
var json = JSON.parse(jsonStr);

// console.log(json.foo);
// console.log(json.bar);

// 2- JSON.stringify() -> transforme un objet littérral en string JSON

var obj = {
  foo: 1,
  bar: ['buzz', 'woody']
};

var str = JSON.stringify(obj);

// console.log(str);