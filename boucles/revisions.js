//  Exo : 01
function sortLetters (str) {
    return str.split('').sort().join('');
}

// console.log(sortLetters("Konexio"));


// Exo : 02
function countEach(x, o) {
    return x.charAt((0 > o.length)) ? true : false;
}

// console.log(countEach("xxxoooox", "xox"));


//  Exo : 03
function checkPal(word) {
    var letters = word.split("");
    var reversedLetters = letters.reverse();
    var reversedWord = reversedLetters.join("");

    if(reversedWord === word) {
        console.log("Palindrome");
    } else {
        console.log("Nope !");
    }
}

// checkPal("racecar");
// checkPal("Laptop");


//  Exo : 04
function swap(sentence){
    var swappedSentence = "";

    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence.charAt(i);
        if (letter === letter.toUpperCase()) {
            swappedSentence += letter.toLowerCase();
        } else {
            swappedSentence += letter.toUpperCase();
        }
    }

    return swappedSentence;
}

// console.log(swap('Hello World'));


//? Bonus