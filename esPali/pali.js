
// chiedere all'utente di inserire una parola
let chiediWord = prompt("inserisci una parola");

// verificare se questa parola è palindroma
function verificaPali() {

    // rendere le parole minuscole nel caso
    const wordLower = chiediWord.toLowerCase();
   
    // invertire la parola
    const reversedWord = wordLower.split('').reverse().join('');

    // verificare se è palindroma, rovesciando la parola
    if (reversedWord === chiediWord) {
        console.log("Questa parola è palindroma");
    } else {
        console.log("Questa parola non è palindroma");
    }

    return chiediWord;

}

verificaPali();