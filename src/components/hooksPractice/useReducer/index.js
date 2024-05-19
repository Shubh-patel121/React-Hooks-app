import React, { useReducer } from "react";

export default function Counter() {
  /* Definition: useReducer is a hook that lets you manage state with
     a reducer function. It is an alternative to useState for more complex state logic. */
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "INCREASEBY5":
        return { count: state.count + 5 };
      case "DECREASEBY5":
        return { count: state.count - 5 };
      default:
        throw new Error("something went wrong");
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, { count: 0 });

  return (
    <div  style={{ margin: "50px", border: "2px solid black" , backgroundColor:"#30ff93"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
       <h2>Below logic is handled by useReducer hook</h2> 
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {state.count}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          INCREMENT
        </button>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          DECREMENT
        </button>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={() => dispatch({ type: "INCREASEBY5" })}
        >
          INCREASEBY5
        </button>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={() => dispatch({ type: "DECREASEBY5" })}
        >
          DECREASEBY5
        </button>
      </div>
    </div>
  );
}
