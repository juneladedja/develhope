import { useEffect, useState } from "react";

export function GithubUser({username}){
    const [name, setName] = useState (username)

    async function fetchName() {
        try {
            const res = await fetch (`https://github.com/${username}`)
            const data = await res.json()
            console.log(data);
            setName(data)
        } catch (error) {
            console.log(error);
        }
    }
    fetchName() 

    useEffect(() => {
        fetchName()
    }, [])

    return(
        <>
          <h2> Username:{username.target.value}</h2>
         <p> Login {username.login} </p>
         <img src={user.avatar_url} />
        </>

     
    )
}