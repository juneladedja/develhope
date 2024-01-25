import { useState } from "react";

export function Login(){
    const [data, setData] = useState ({
        username: '',
        password: '',
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
      <input type = "text" name="username" value={data.username} onChange={handleData} placeholder="username" />
      <input type="password" name="password" value={data.password} onChange={handleData} placeholder="password" />
      <input type="checkbox" name="checkbox" value={data.checkbox} onChange={handleData} />
      <button onClick={handleResetButton}> Reset </button>
    </div>
  );
}