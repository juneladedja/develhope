import { useState } from "react"; // importo state
import { GithubUser } from "./GithubUser"; // importo componente di prima

// creo funzione
export function GithubUsers() {
    const [data, setData] = useState([]); // creo state che inizializzo con []
    const [username, setUsername] = useState() // creo state per username che inizia vuoto

    // funzione asincrona per fetch con try catch
    async function fecthData(e) {

      e.preventDefault(); // perche c'e un form !!!! si mette sempre quando c'e un form

      try {
        const res = await fetch(`https://api.github.com/users/${username}`); 
        const dataUser = await res.json();
        setData(dataUser); // imposto valore di setData come dataUser
      } catch (error) {
        console.log(error);
      }
    
    }

    // c'e un form, quindi evento va al form e non al bottone
    // label per vedere scritta username + input che cambia ogni volta che cambia il value, poi bottone
    return (
      <>
        <form onSubmit={fecthData}> 
          <label htmlFor="gitubInput">username</label>
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
          <button>search</button>
        </form>

        <GithubUser  user={data}/> 
      </>
    );
}