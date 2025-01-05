import React, { useState } from "react";

/*
Folllow along for the <useState> intro video
*/

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </>
  );
};

export default Counter;