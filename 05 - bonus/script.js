/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const now = new Date().getHours();


// Dichiara la funzione qui.
function greetingTime(name) {
    if (now <= 13) {
        console.log(`Buongiorno ${name}!`);
    } else if (now <= 17) {
        console.log(`Buon pomeriggio ${name}!`);
    } else if (now > 17) {
        console.log(`Buonasera ${name}!`);
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(`Ore: ${now}`);
greetingTime(name);




//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


const greetingTimeArrow = (name) => {
    if (now <= 13) {
        console.log(`Buongiorno ${name}!`);
    } else if (now <= 17) {
        console.log(`Buon pomeriggio ${name}!`);
    } else if (now > 17) {
        console.log(`Buonasera ${name}!`);
    }
}
console.log(`Ore: ${now}`);
greetingTimeArrow(name);
