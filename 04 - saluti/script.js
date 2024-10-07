/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function Hello(name) {
    console.log(`Ciao ${name}!`);
    alert(`Ciao ${name}!`);
}

// Invoca la funzione qui e stampa il risultato in console
Hello(name);


//Risultato atteso se si passa 'Mario': // ciao Mario

// Arrow function

const helloArrow = (name) => {
    console.log(`Ciao ${name}!`);
    alert(`Ciao ${name}!`);
}
helloArrow(name);