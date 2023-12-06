// Crea una semplice Promise che si risolve dopo un 
// ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

function checkAge (){
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
            if (age > 18){
                resolve ('You can drive')
            } else {
                reject ('you cant drive')
            }
        }, 3000);
    })
}

checkAge(15)
.then ((age) => console.log(age))
.catch ((error) => console.log(error))