// Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// * prendo gli elementi per stampare in pagina
const display = document.getElementById('display')
const memorizeNumbers = document.getElementById('memorizeNumbers')

// * creo la funzione per generare 5 numeri random che vengono visualizzati in pagina
const getrandomNumbers = (min,max) => Math.floor(Math.random() * (max - min + 1) + min)
function generaNumbers(n,min,max) {
    const numbers =[]
    let i = 0;
    while (i < n) {
        const randomNumbers = getrandomNumbers(min, max);
        if (!numbers.includes(randomNumbers)) {
            numbers[i] = randomNumbers;
            i++;
        }
    }
    return numbers
}
// * funzione per concatenare gli elmenti dell'array con uno spazip
function concatArray(arr){
    let result = ''
    for(let i = 0; i<numbers.length; i++){
        result+= arr[i]+' '
    } 
    return result
}
let numbers = generaNumbers(5, 0, 100);
memorizeNumbers.innerText = concatArray(numbers)

// * creo il timer di 30 secondi che viene visualizzato in pagina
let seconds = 30
display.innerText = seconds
const countdown = setInterval(function(){
display.innerText = --seconds
if(seconds ===0){
    clearInterval(countdown)
}
}, 1000)



// todo dopo 30 secondi deve chiedere all'utente di inserire per 5 volte i numeri che ha visto precedentemente
// todo dopo che ha inserito i numeri il softaware deve dirgli quante parole ha indovinato