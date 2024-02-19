import { useEffect } from "react"
import { useState } from "react"
import { Card } from "./Card"

export function Form(){
    const [input, setInput] = useState(0)
    const [comments, setComments] = useState([])

    async function FetchData(){
        try {
            const res = await fetch ('https://jsonplaceholder.typicode.com/comments')
            const data = await res.json()
            setComments(data)
        } catch (error) {
            console.log(error);
        }
    }

    function handleInput(e){
        setInput(Number(e.target.value))
    }

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