// Implementare la funzione ageAverage che, 
// dato un array di persone, calcola l'età media.


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

function calculateAverageAge(persons) {
    let somma = persons.reduce ((a, person) => a+person.age, 0)  // facciamo somma con reduce 
    let media = somma/persons.length                             // facciamo media come sempre
    return media
  }

let result = calculateAverageAge(persons)
console.log(result);