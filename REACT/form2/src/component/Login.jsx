import { useState } from "react";

// creo funzione Login
export function Login(){
    const [data, setData] = useState ({ // faccio useState e creo oggetto con dentro le cose che mi servono
        username: "",
        password: "",
        checkbox: false,
    })

    // creo evento (che è una funzione) che prende un par e
  function handleData(e) {
    const name = e.target.name 
    const value = e.target.value // punto value che poi metto dentro a input in cui punto a quello che mi serve
    const checked = e.target.checked // questo serve per checkbox
    const type = e.target.type

    setData((data) => { // setData (prevData)
      return { // return lo metto sempre
        ...data, // prendo tutto quello che c'e dentro l'oggetto che ho creato in useState
        [name]: type == "checkbox" ? checked : value
      };
    });
  }
 
  return ( // quello che deve tornarmi la funzione Login
    <div>
      <h1> My Form: </h1>
      <input type = "text" name="userName" value={data.userName} onChange={handleData} placeholder="username" />
      <input type="password" name="password" value={data.password} onChange={handleData} placeholder="password" />
      <input type="checkbox" name="rememberMe" value={data.checkBox} onChange={handleData} />
    </div>
  );
}