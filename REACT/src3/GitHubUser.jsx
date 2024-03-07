import { useEffect } from "react"
import { useGitHubUser } from "./UseGitHubUser"

export function GitHubUser({username}){
    
    const {data , loading , getData} = useGitHubUser()
    
    useEffect(()=>{
        getData(username)
    },[username])

    return (
        <div>
            {loading && <h1>Loading..</h1>}
            {data && data.message && <p>Errore: <span>{data.message}</span></p>}
            {data && data.name && <div className='container'>
                <h1>Welcome: {data.name}!</h1>
                <p>Your username is: {data.login}</p>
                <p>Your avatar is:</p>
                <img src={data.avatar_url} alt='avatar' width="300px"/>
            </div>}
        </div>
    )
}