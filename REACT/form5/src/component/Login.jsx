import { useState } from "react";


export function Login(){
    const [data, setData] = useState ({ 
        username: "",
        password: "",
        checkbox: false,
    })

  function handleData(e) {
    const name = e.target.name 
    const value = e.target.value
    const checked = e.target.checked
    const type = e.target.type

    setData((data) => {
      return { 
        ...data,
        [name]: type == "checkbox" ? checked : value
      };
    });
  }

  function handleLoginButton(e){
    e.preventDefault(); 
    // preventDefault lo devo mettere perche dato che si tratta di un form, nel momento in cui clicco 
    // il bottone per fare login, la pagina si ricarica da sola di default e per fermare questo
    // uso preventdefault per non riaggiornare ogni volta che faccio qualcosa
    onLogin(data) 
  }

  function handleResetButton (){
    setData ({
        username: '',
        password: '',
        checkbox: false,
    })
  }
 
  return (
    <div>
      <h1> My Form: </h1>
      <input type = "text" name="userName" value={data.userName} onChange={handleData} placeholder="username" />
      <input type="password" name="password" value={data.password} onChange={handleData} placeholder="password" />
      <input type="checkbox" name="rememberMe" value={data.checkBox} onChange={handleData} />
      <button onClick={handleLoginButton}> Login </button>
      <button onClick={handleResetButton}> Reset </button>
    </div>
  );
}