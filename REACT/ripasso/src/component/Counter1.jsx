import { useState, useRef } from "react"

export function Counter1(){

    const [count, setCount] = useState(0)
    const counter = useRef(0)

    function handleAumenta(){
        setCount((prev) => prev + 1)
        counter.current ++
        console.log(count);
        console.log('Ref:'+ counter.current);
    }


    return(
        <>
        <p> ho contato fino a: {count} </p>
        <button onClick={handleAumenta}> Aumenta di 1 </button>
        </>
    )
}

// ref da valore corrente e non si mette mai nel return