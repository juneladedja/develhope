import { useState } from "react"
import { UseCustom } from "./UseCustom"

export function CustomCounter(){
const {count, handleIncrement, handleDecrement, handleReset} = UseCustom()

    return(
        <>
        <p>I've counted to: {count} </p>
        <button onClick={handleIncrement}>Incrementa</button>
        <button onClick={handleDecrement}>Decrementa</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}