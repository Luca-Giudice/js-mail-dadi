// ESERCIZIO 1 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato
// -----------------------------------------------------------------
// ESERCIZIO 2 - Finta Login
// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Cosa devo controllare esattamente?

// ESERCIZIO 1
//  prendo gli elementi dal DOM
const resultElement = document.getElementById('result')
const playerNumber = Math.floor(Math.random()*6)+1;
const cpuNumber = Math.floor(Math.random()*6)+1;

let message = 'Pareggio'

if (playerNumber > cpuNumber){
    message ='Ha vinto il giocatore'
}else if (playerNumber < cpuNumber){
    message ='Ha vinto la CPU'
}

resultElement.innerText += message;



// ESERCIZIO 2 ----------------------------------------------------------------------------------

const allowedEmails = ['lucagiudice@gmail.com', 'giudiceluca@libero.it', 'luca@yhaoo.com'];

const emailField = document.getElementById('email');
const button = document.getElementById('button');
const acess = document.getElementById('acess');

button.addEventListener('click', function(){
    const userEmail = emailField.value.trim();

    if(!userEmail){
        acess.innerText = 'Non hai inserito la mail';
        return;
    }

    let isAllowed = false;

    for(let i = 0; i < allowedEmails.length; i++){
        const currentEmail = allowedEmails[i];
        if(currentEmail === userEmail){
            isAllowed = true;;

        }
    }

    if(isAllowed){
        acess.innerText = 'Benvenuto';
    } else {
        acess.innerText = 'Non sei autorizzato'
    }
})



