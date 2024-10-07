/* Scrivi una funzione che accetti un'array di stringhe e una lettera e
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = prompt("Inserisci una lettera").toUpperCase();

console.log(names);

// Dichiara la funzione qui.
/**
 * given an array and a letter returns in a new array only the words with that letter
 * @param {array} array 
 * @param {string} letter 
 */

function wordsWith(names, letter) {
    let initials_array = [];
    for (i = 0; i < names.length; i++) {
        if (names[i].charAt(0) == letter) {
            initials_array.push(names[i]);
        }
        else {
            continue;
        }
    }
    return initials_array;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(wordsWith(names, letter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// Arrow function
const wordsWithArrow = (names, letter) => {
    let initials_array = [];
    for (i = 0; i < names.length; i++) {
        if (names[i].charAt(0) == letter) {
            initials_array.push(names[i]);
        }
        else {
            continue;
        }
    }
    return initials_array;
}
console.log(wordsWithArrow(names, letter));
