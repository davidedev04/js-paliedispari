
// chiedere all'utente di inserire una parola

const chiediWord = prompt("inserisci una parola");

console.log(verificaPali(chiediWord));

// verificare se questa parola è palindroma
function verificaPali(word) {

    // rendere le parole minuscole nel caso
    const wordLower = word.toLowerCase();

    // invertire la parola
    const reversedWord = wordLower.split('').reverse().join('');

    // verificare se è palindroma
    if (reversedWord === wordLower) {
        console.log("Questa parola è palindroma");
    } else {
        console.log("Questa parola non è palindroma");
    }

}
