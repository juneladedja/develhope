import { useState } from "react";
import { useEffect } from "react";

export function FetchPost(){

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true) 

    async function dataFetch(){
        try {
            const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            console.log(data);
            setPosts(data)
            } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    

    useEffect(()=>{
        dataFetch()
    },[])

    return(
        <>
        <div> 
         { loading ? "loading ..." : 
        <ul>
            {posts.map((post) => <li key={post.id}> {post.title} </li>)}
        </ul>
        }
        </div>
        </>
    )
    }