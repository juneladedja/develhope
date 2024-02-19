import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(0) // state per il counter
    const [data, setData] = useState (0) // state per l'input

    function handleButtonCounter(){ // evento per aumentare di 1
        setCount ((prev)=> prev + 1) // nell'aggiornamento dello state metto sempre prev e arrow function
    }

    function handleButtonCounterDec(){ // evento per diminuire di 1
        count > 0 && setCount((prev) => prev - 1)
    }

    function handleButtonCounterReset(){ // evento per resettare
        setCount (0) // per resettare imposto lo state al valore iniziale
    }

    function handleChange(e){ // evento onchange per input in cui punto al value, che cambia
        setData( Number(e.target.value)) // il value lo trasformo in numero, dato che voglio un num e non una stringa
    }

    function handleNumber (){ // con bottone imposto lo state del counter
        setCount((prev) => prev + data)
    }


    return (
     <>
    <h2> Ive counted to: {count} </h2>
    <input type="number" onChange={handleChange} />
    <button onClick={handleNumber}> Aumenta </button>
    <button onClick={handleButtonCounter}> Click here </button>
    <button onClick={handleButtonCounterDec}> Click here </button>
    <button onClick={handleButtonCounterReset}> Reset here </button>
    </>
    )
}