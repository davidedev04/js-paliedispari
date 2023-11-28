
// chiediamo all'utente di scegliere un numero da 1 a 5
const utenteNum = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Il tuo numero è " + utenteNum);

// chiediamo all'utente di scegliere tra pari e dispari
const utentePd = prompt("Scegli tra pari o dispari");
console.log("Hai scelto " + utentePd);

// dopodichè generiamo un numero random del computer da 1 a 5

let num;

function numRandom() {
    num = Math.floor(Math.random() * 5) + 1;
    console.log("Il numero casuale è " + num);
    return num;
}

numRandom();

function returnRandomNumb() {
    console.log(numRandom());
}

// sommiamo i due numeri
const sommaNumeri = utenteNum + num;
console.log(sommaNumeri);

// ora con una funzione capiamio se è pari o dispari
function pariDispari() {

    if (sommaNumeri % 2 === 0) {
        console.log("La somma è pari");
    } else {
        console.log("La somma è dispari")
    }

}

pariDispari()
