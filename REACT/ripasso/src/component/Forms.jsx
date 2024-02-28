import { useState } from "react" // importo useState sempre
import { Card } from "./Card" // importo componente che ho creato che ha la prop comment

export function Form(){
    const [input, setInput] = useState(0) // punto a input che devo scrivere io dentro a quello 
    const [comments, setComments] = useState([]) // inizializzo state di quello a cui faccio il fetch

    async function FetchData(){ // fetch
        try { // try catch sempre
            const res = await fetch ('https://jsonplaceholder.typicode.com/comments')
            const data = await res.json()
            setComments(data) // imposto allo state quello che ho fetchato
        } catch (error) { // gestisco errore
            console.log(error);
        }
    }

    // punto a input e punto al suo valore
    function handleInput(e){ 
        setInput(Number(e.target.value))
    }

    //punto a bottone, preventDefault per non ricaricare la pagina, e richiamo il fetch che avviene al click del bottone
    // se avveniva al caricamento della pagina ci sarebbe stato bisogno di un useEffect, ma non in questo caso
    function handleOnSubmit(e){
            e.preventDefault()
            FetchData()
    }

    return(
        <>
        <form action="" onSubmit={handleOnSubmit}>
            <input type="number" onChange={handleInput} />
            <button> Clicca qui </button>
        </form>
        
        <div>
        {comments.filter(item => item.postId === input).map((item) => {
                return <Card comment={item} key={item.id} />
            })}
        </div>
        </>
    )
}
// nel return: 
// form normale a cui applico un evento
// div (ul non ci va perche ho bisogno di una card, se metto ul ci vuole un li)
// richiamo array comments e lo filtro perche ho bisogno solo di quegli elmeenti che corrispondono a input
// map per mappare e ritornare array nuovo che restituisce una card 
// dentro la card metto una key e poi richiamo la prop con comment = {item}, ovvero nome attributo= {suo valore}