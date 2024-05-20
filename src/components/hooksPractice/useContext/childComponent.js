import React, { useContext } from "react";
import { MyContext } from ".";

function ChildComponent() {
  const value = useContext(MyContext);

  /* 
  useContext is the alternative of the consumer components of the context api;
  To avoid this complex way of consuming the provided context, useContext hooks introduced;
  useContext hook takes context as a argument and returns the value of the provided context;
  
  <MyContext.Consumer>
  {value => " render something based on the context value "}
  </MyContext.Consumer>
  
  */

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{`: ${value}`}</div>
  );
}

export default ChildComponent;
