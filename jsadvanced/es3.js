// Utilizza il metodo forEach che prende un array
// di nomi di frutta e li stampa aggiungendo un punto 
// esclamativo a ciascun nome di frutta.

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

let newArr = []
let result = fruits.forEach(element => {
    newArr.push(element + '!')         // butto tutto dentro il nuovo array
})

let arrayFruits = newArr.join (' ')   // fa in modo che venga stringa e non array
console.log(arrayFruits);