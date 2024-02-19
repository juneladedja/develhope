import { useState } from "react"
import { useEffect } from "react"

export function FetchForm(){
    
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState ([])
    const [input, setInput] = useState('')

    async function fetchPosts(){
        try {
            const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${input}`)
            const data = res.json()
            setPosts(data)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(()=>{
        fetchPosts()
    },[])

    function handleInput(e){
        setInput (e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setPosts(input)
    }

    return(
        <>
        <form onClick={handleSubmit}>
            <input type="number" onChange={handleInput} />
            <button> Clicca qui per ottenere il post</button>
        </form>
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id}> {post.title} </li>
                )
            })}
        </ul>
         </>
    )
}