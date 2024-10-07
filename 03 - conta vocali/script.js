/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowels = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.
function howManyVowels(word) {
    let vowels_found = [];
    let word_array = word.split("");
    for (i = 0; i < word.length; i++) {
        for (j = 0; j < vowels.length; j++) {
            if (word_array[i] == vowels[j]) {
                vowels_found.push(vowels[j]);
            }
        }
    }
    return word_array, vowels_found;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(word, howManyVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// Arrow function
const howManyVowelsArrow = (word) => {
    let vowels_found = [];
    let word_array = word.split("");
    for (i = 0; i < word.length; i++) {
        for (j = 0; j < vowels.length; j++) {
            if (word_array[i] == vowels[j]) {
                vowels_found.push(vowels[j]);
            }
        }
    }
    return word_array, vowels_found;
}
console.log(word, howManyVowelsArrow(word));
