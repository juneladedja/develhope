import { UseCustom } from "./UseCustom"

export function CustomForm(){

    const {handleInput, handleOnSubmit} = UseCustom()

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
        </>
    )
}