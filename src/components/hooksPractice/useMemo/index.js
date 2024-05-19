import React, { useEffect, useMemo, useState } from "react";

export default function Factorial() {
  /* 
    useMemo:- is a React Hook that lets you cache the result of a calculation between re-renders.

    Syntex:- const cachedValue = useMemo(calculateValue, dependencies) ;
    You need to pass two things to useMemo:
     -> A calculation function that takes no arguments, like () =>, and returns what you wanted to calculate.
     -> A list of dependencies including every value within your component that’s used inside your calculation.
     -> On the initial render, the value you’ll get from useMemo will be the result of calling your calculation.
    */

  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  function ExpensiveCalculation(num) {
    console.log("Calculating...");
    return num * num;
  }

  // Memoize the expensive calculation
  const squaredValue = useMemo(() => {
    return ExpensiveCalculation(count);
  }, [count]);

  return (
    <div
      style={{
        margin: "50px",
        border: "2px solid black",
        backgroundColor: "#30ff93",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2> Below logic is handled by useMemo hook</h2>
      </div>
      <div style={{ padding: "20px", textAlign: "center" }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Squared Value: {squaredValue}</p>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
    </div>
  );
}
