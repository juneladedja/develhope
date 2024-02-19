import { useState } from "react"

export function ControlledForm(){
const [inputs, setInputs] = useState({
    email:'',
    password:''
})

function handleSubmit(e){
    e.preventDefault();
    console.log(inputs);
}

function handleChangeInput(e){
    const value = e.target.value;
    const id = e.target.id;

    setInputs((prev)=>{
        return {
            ...prev,
            [id] : value
        }
    })
}

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email
                <input type="email" id="email" onChange={handleChangeInput}></input>
            </label>
            <label htmlFor="password">
                Password
                <input type="password" id="password" onChange={handleChangeInput}></input>
            </label>
            <button>Submit</button>
        </form>
        </>
    )
}