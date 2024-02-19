import { useState } from "react";

export function Posts(){

    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    async function FetchPosts(){
        try {
            const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${input}`)
            const data = await res.json()
            setPosts(data)
        } catch (error) {
            console.log(error);
        }
    }

    if(posts){
        console.log(posts);
    }

    function handleInput(e){
        setInput( e.target.value)
    }

    function handleBtn(){
        FetchPosts(input)
    }

    function handleReset(){
        setPosts([])
        setInput('')
    }

    return(
        <>
        <input type="number" onChange={handleInput} value={input}/>
        <button onClick={handleBtn}> Clicca qui </button>

        <button onClick={handleReset}> Reset All </button>

        {posts && <p key={posts.id}> {posts.title} </p>}
        </>
    )
}