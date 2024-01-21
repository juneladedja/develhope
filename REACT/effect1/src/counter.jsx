import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrementCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(count);
  }, [count])
  
  return (
    <>
      <button onClick={handleIncrementCount}>incrementa</button>
      <h2>{count}</h2>
    </>
  );
}