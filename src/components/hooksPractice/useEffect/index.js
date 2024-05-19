import React, { useEffect, useState } from "react";

function Timer() {
  /* 
    Noltes:- 
    #useEffect:- 
    -> Performs side effects in functional components.
    -> Executes a function after rendering and optionally cleans up after it.
    -> this takes two parameter-
     1. Callback function
     2. dependency array 
        a. if dependency array is empty then callback will run only once when component mounts on DOM;
        b. if dependency array is not empty then whenever the items of the array gets updated callback
           function will trigger;
        c. if callback contains return function then , this will trigger when component will unmount;   
    */
  const [count, setCount] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [isIntervalChanged, setIsintervalChanged] = useState(false);

  const handleIntervalChange = (event) => {
    let value = parseInt(event.target.value);
    if (value > 0) {
      setIntervalTime(value);
    } else {
      setIntervalTime();
    }
  };

  const handleApply = () => setIsintervalChanged(true);
  const handleReset = () =>{
    setCount(0);
    setIsintervalChanged(false);
    setIntervalTime(1000);
  }
  useEffect(() => {
    let timer;
    if (isIntervalChanged) {
      clearInterval(timer);

      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, intervalTime);
      setIsintervalChanged(false);
    } else {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, intervalTime);
    }

    // Cleanup
    return () => clearInterval(timer);
  }, [isIntervalChanged]);

  return (
    <div
      style={{
        margin: "50px",
        border: "2px solid black",
        backgroundColor: "#30ff93",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2> Below logic is handled by useEffect hook </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>{count}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{ height: "20px" }}
          type="number"
          value={intervalTime}
          placeholder="please enter more than 1000 value"
          onChange={(e) => handleIntervalChange(e)}
        />
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={handleApply}
        >
          {`Apply timer of ${intervalTime} ms`}
        </button>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={handleReset}
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
}

export default Timer;
