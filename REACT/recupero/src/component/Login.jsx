import { useState } from "react"

export function Login (){
    const [data, setData] = useState({
        username:'',
        password:'',
        email:''
    })

    function handleData (e){
        const name = e.target.name
        const value = e.target.value

   setData (prevData => { // accedo all'ultimo stato aggiornato
    return {...prevData, [name]: value} // modifica il nome con il value che gli do (prima username, poi pass, poi email)
 // è come se ci fosse scritto username: value, pass: value ecc
 // spread operator per copiare quello che c'e dentro l'oggetto, e prima ci metto return perche c'e funzione !
   });
}

function handleSubmit (e){
    e.preventDefault()
    console.log(data);
}


    return (
        <>
        <form onSubmit={handleSubmit}>
               <input type="text" name="username" onChange={handleData} />
               <input type="password" name="password" onChange={handleData}/>
               <input type="email" name="email" onChange={handleData}/>
               <button> Login </button>
               <button> Reset </button>
           </form>

           <ul>
            <li> Username: {data.username} </li>
            <li> Password: {data.password} </li>
            <li> Email: {data.email} </li>
           </ul>
           </>
    )
}