import React, { useContext } from "react";
import { MyContext } from ".";

function ChildComponent() {
  const value = useContext(MyContext);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{`: ${value}`}</div>
  );
}

export default ChildComponent;
