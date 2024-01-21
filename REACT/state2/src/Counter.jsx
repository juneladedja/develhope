import {useState} from 'react' // importo useState

export function Counter (){
  const [counter, setCounter] = useState (0) // questo è il useState con destrutturazione dato che è un array

  function handleCounterIncrement (){ // evento per il primo bottone, che quando schiaccio aumenta il counter
    setCounter (counter + 1)
  }

  function handleCounterDecrement (){ // evento che quando clicco, diminuisce il numero
    setCounter (counter - 1)
  }

  function handleCounterReset (){
    setCounter(0)
  }

  <div>
    <p> I have counted to {counter} </p> // counter parte da 0 dato che gli ho messo 0
    <button onClick = {handleCounterIncrement} > Aumenta </button> // richiamo il suo evento
    <button onClick = {handleCounterDecrement}> Diminuisci </button>
    <button onClick = {handleCounterReset}> Reset </button>
  </div>
}