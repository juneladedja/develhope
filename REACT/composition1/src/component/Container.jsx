import { useState } from "react"

export function Container ({title, children}){
    const [collapsed, setCollapsed] = useState(false)
    // faccio lo state perche devo cambiare lo stato del bottone per fare in modo che il contenuto si veda e si nasconda

    function handleToggleCollapse(){ // creo funzione che linko al bottone
        setCollapsed (t => !t) // prendo il valore e lo nego, quindi dico true
    }

    return(
        <div className="app">
            <div className="app-title"> {title} <button onClick={ handleToggleCollapse}>Toggle</button> </div>
            {collapsed && <div className="app-content"> {children} </div>}
        </div>
    )
}