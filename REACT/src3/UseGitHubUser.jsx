import { useState } from "react"

export function useGitHubUser(){
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(false)
    
    async function getData(username){
        
        setLoading(true)

        try {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json()
            setData(data)
            console.log(data);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    
    return {
        data : data , 
        loading : loading,
        getData : getData,
    }
}