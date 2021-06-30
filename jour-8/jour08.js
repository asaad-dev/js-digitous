// Exo : 01
//Imports
var axios = require('axios');
var prompt = require("prompt");


let countriesNames = [];

function getCountries() {
	axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
		let countries = res.data;

		countriesNames = countries.map(function (country) {
			return country.name;
		});

		console.log(countriesNames.join("-"));
	});
}

getCountries();


// Exo : 02

function getFact() {
	axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
		let fact = res.data;

		console.log(fact.value);
	});
}

getFact();


// Exo : 03

function catchPokemon(id, lang) {
	axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => {
		let pokemon = res.data;
		let translatedName = pokemon.names.find((element) => {
			return element.language.name === lang;
		});

		console.log(`Mon pokemon numéro ${pokemon.id} s'appelle: ${translatedName.name}`);
	});
}

catchPokemon(1, "fr");
