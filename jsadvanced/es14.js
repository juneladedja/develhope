// Crea una funzione chiamata somma che accetta un 
// numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. 
// Stampa in console l'output della funzione somma.

let numbers = [1,2,3,4,5,6,7]

function somma (...number){
    return numbers.reduce((a, number) => a + number, 0);
}

let result = somma(numbers)
console.log(result);
