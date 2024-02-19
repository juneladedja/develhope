import { useState } from "react"

export function UseCustom(){
    const [count, setCount] = useState(0)

    function handleIncrement(){
        setCount((prev) => prev + 1)
    }

    function handleDecrement(){
        setCount((prev) => prev - 1)
    }

    function handleReset(){
        setCount(0)
    }

    return{
        count,
        handleIncrement,
        handleDecrement,
        handleReset
    }
}