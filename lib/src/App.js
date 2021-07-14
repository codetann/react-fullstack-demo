import React from "react";
import useFetch from "./hooks/useFetch";
import useInc from "./hooks/useInc";

export default function App() {
  const [state, inc, dec, reset] = useInc();
  const [data, status] = useFetch("/api/names");

  if (status !== "loaded")
    return <h1 onClick={() => console.log(data)}>Loading...</h1>;

  return (
    <div>
      {data.map((name) => (
        <p>{name}</p>
      ))}

      {/* <h1>{state.count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button> */}
    </div>
  );
}
