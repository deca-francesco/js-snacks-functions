/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * given an array returns a new array containing the initial letter of each element
 * @param {Array} names
 */

function getInitials(names) {
    let initials = [];
    for (i = 0; i < names.length; i++) {
        initials.push(names[i].charAt(0));
        console.log(names[i], names[i].charAt(0));
    }
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(names);
console.log(getInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


// arrow function
console.log("ARROW FUNCTION");

const getInitialsArrow = (names) => {
    let initials = [];
    for (i = 0; i < names.length; i++) {
        initials.push(names[i].charAt(0));
        console.log(names[i], names[i].charAt(0));
    }
    return initials;
}
console.log(getInitialsArrow(names));
