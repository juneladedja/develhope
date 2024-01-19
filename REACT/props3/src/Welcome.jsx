import { Age } from "./Age"; 

export function Welcome({name}) {
    
    return(
        <div>
        <p> Welcome {name} !</p>
        <Age age = {26}/>
        </div>
    )
}

// creo funzione welcome in cui metto welcome + nome e eta, che importo dall'altro file