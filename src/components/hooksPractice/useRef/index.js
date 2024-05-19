import React, { useRef } from "react";

const Focus = () => {
    /* 
     # useRef hook
     1. Creates a reference to a DOM element or a mutable value.
     2. Accesses or stores mutable values without causing re-renders.

     uses:- we mainly use this for uncontrolled component ;
    */
    const inputRef = useRef(null);
    const handleClick = () =>{
          inputRef.current.focus() ;
    }
    return (
        <div
        style={{
          margin: "50px",
          border: "2px solid black",
          backgroundColor: "#30ff93",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2> Below logic is handled by useRef hook </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding:"30px"
          }}
        >
          <input
            ref={inputRef}
            style={{ height: "20px", marginRight:"30px" }}
            type="text"
            placeholder="you can't enter, just see focus"
          />
          <button onClick={handleClick}>
           Click me to Focus the input
        </button>
        </div>
      </div>
    )
}

export default Focus;