import React, { useCallback, useState } from "react";

export default function CallBack() {
  // useCallback hook implementation;
  /* 
    Definition: useCallback is a hook that returns a memoized callback function.
    It is used to optimize performance by preventing unnecessary re-creations of functions. 
    
    ->useCallback function or hook takes two parameter,first callback function and 
    second dependenci array, so if the dependenci array gets updated then it will
     redefine or update the callback function definition else not.
    */
  const [count, setCount] = useState(0);
  const [increaseBy, setIncreaseBy] = useState(1);
  const handleUpdateClick = useCallback(
    () => { setCount((prev) => prev + increaseBy)},
    [increaseBy]
  );

  const handleInputChange = (event) => {
    let numberToIncrease = parseInt(event.target.value);
    setIncreaseBy(numberToIncrease);
  };
  return (
    <div style={{ margin: "50px", border: "2px solid black" , backgroundColor:"#30ff93"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2> Below logic is handled by useCallback hook </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>{count}</div>
      <div style={{display:"flex" ,justifyContent:"center" , alignItems:"center"}}>
        <input
          style={{height:"20px"}}
          type="number"
          value={increaseBy}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={handleUpdateClick}
        >
          {`Increase by ${increaseBy ? increaseBy : 0}`}
        </button>
      </div>
    </div>
  );
}
