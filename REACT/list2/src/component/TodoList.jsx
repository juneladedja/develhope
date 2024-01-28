import { useState } from "react"

export function TodoList (){
    const [todo, setTodo] = useState(['Mario', 'Giovanni', 'Giacomo'])

    function handleButtonEvent(e){ // evento per bottone
        e.preventDefault() // se non lo metto la pagina si ricarica sempre 
        const value = e.target[0].value // punto al value
        setTodo([...todo, value]) // prendo la stringa con ... e aggiungo il nuovo value 
        e.target[0].value = "" // svuoto dopo che ho scritto 
    }

 // input e button li metto dentro un form fuori da ul 
    return (
        <>
        <ul>
            {todo.map((todo, index) => (
                <li key={index}> {todo} </li>
            ))}
        </ul>
        <form action="" onSubmit={handleButtonEvent} >
           <input type="text"/>
           <button></button>
        </form>
        </>
    )
}