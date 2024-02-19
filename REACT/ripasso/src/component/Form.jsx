import { useState } from "react"

export function Form(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState (false)

    // per ogni input creo un evento onchange
    function handleUsername(e){
        setUsername(e.target.value) // imposto username con valore di e
    }

    function handlePassword(e){
        setPassword(e.target.value) // imposto pass con valore di e
    }

    function handleCheckbox(e){
        setCheck(true)
    }

    function handleSubmitForm(e){
        e.preventDefault()
        console.log(username);
        console.log(password);
        console.log(check);
    }

    return(
        <>
        <form action="" onSubmit = {handleSubmitForm}>
        <input type="text" onChange={handleUsername}/>
        <input type="password" onChange={handlePassword}/>
        <input type="checkbox" onChange={handleCheckbox}/>
        <button> Submit </button>
        </form>
        </>
    )
}