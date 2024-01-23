import { useState } from "react"; // importo useState
import { Welcome } from "./Welcome"; // importo il welcome che ho creato prima, e posso importarlo perche ho scritto export

export function InteractiveWelcome() { // creo funzione 
    const [username, setUsername] = useState("") 
    // use state che faccio partire con stringa vuota
    // primo par valore corrente, secondo funzione

    function handleUserName(e) {
        const user = e.target.value // in react non é e.value ma ci va anche target nel mezzo
        setUsername(user) // funzione di useState e all'interno la const che ho creato a cui do come valore e.target.value
    }
    return(
        <div>
            <input value={username} onChange={handleUserName} />
            <Welcome name={username}/>
        </div>
    )
}