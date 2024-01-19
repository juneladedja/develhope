// ES 1
// Implementare la funzione adultFilter che, dato un array di persone,
// filtra e restituisce soltanto coloro che sono maggiorenni.


    function adultFilter(persons) {
    const magg = persons.filter (person => person.age > 18)
    return magg
  }
  
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
  
  const adults = adultFilter(persons);
  console.log(persons);
  console.log(adults);



// es 2 
// Utilizza il metodo forEach che prende un array di nomi di frutta e 
// li stampa aggiungendo un punto esclamativo a ciascun nome di frutta.

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

let frutta = []

fruits.forEach (fruit => {
    frutta.push(fruit + "!")
})

console.log(frutta);


//ES 3 
// Implementare la funzione nicknameMap che, dato un array di persone, 
// crea un array di nickname. Il nickname deve essere formato in questa modo: <name>-<age>.

  function nicknameMap(persons) {
  const nickname = persons.map (person => person.name + '-' + person.age)
  return nickname
}

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

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);



// ES 4
// Implementare la funzione ageAverage che, dato un array di persone, 
// calcola l'età media.

function calculateAverageAge(persons) {
  let media = persons.reduce ((a, person) => a + person.age, 0) / persons.length
  return media
}

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

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);



let array = []
const name = 'Mario'
const age = 10

new arr = [...array, name, age]