import { useState } from "react";

export function Counter() {
  const [counter, setCount] = useState(0);

  function handleCounterIncrement() {
    setCount(counter + 1)
  }
  return (
    <>
      <h2> I have counted to: {counter} </h2>
      <button onClick= {handleCounterIncrement}>Incrementa</button>
    </>
  );
}