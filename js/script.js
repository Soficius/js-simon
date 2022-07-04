
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
    for(let i = 0; i<arr.length; i++){
        result+= arr[i]+' '
    } 
    return result
}
let numbers = generaNumbers(5, 0, 100);
memorizeNumbers.innerText = concatArray(numbers)

// * creo il timer di 30 secondi che viene visualizzato in pagina
let seconds = 30
display.innerText = seconds
const countdown = setInterval(
    function(){
        display.innerText = --seconds
        if(seconds === 0){
            clearInterval(countdown)
            // * rimuovo i numeri allo scadere dek tempo
            memorizeNumbers.innerText=''
            // * utilizzo la fumzione selftime per rimuovere tutti i numeri prima che esca il prompt in pagina
            setTimeout(()=>{
                //* chiedo all'utente (per 5 volte) i numeri memorizzati 
                const guessed = []
                for(let i = 0; i<5; i++ ){
                    const response = parseInt(prompt('inserisci un numero da 1 a 100'));
                    // * verifico quanti numeri ha memorizzato l'utente e me li salvo
                    if(numbers.includes(response)){
                        guessed.push(response)
                    }
                }
                //* comunico all'utente quanti numeri ha indovinato
                alert(`hai indovinato ${guessed.length} numeri ${concatArray(guessed)}`)
            },200)
        }
    }, 
    1000
)


