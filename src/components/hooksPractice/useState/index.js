import React, { useState } from "react";

export default function StateComponent() {
  const [state, setState] = useState();
  /* 
    # useState
      1. Manages state in functional components.
      2. Returns a state variable and a function to update it.
    */
  return (
    <div
      style={{
        margin: "50px",
        border: "2px solid black",
        backgroundColor: "#30ff93",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2> Below logic is handled by useState hook </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>{state}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{ height: "20px" }}
          type="text"
          placeholder="Enter to check magic"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
}
