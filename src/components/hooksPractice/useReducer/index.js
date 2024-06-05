import React, { useReducer } from "react";

export default function Counter() {
  /* Definition: useReducer is a hook that lets you manage state with
     a reducer function. It is an alternative to useState for more complex state logic. */
  const typesCounterActions = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    increaseBy5: "INCREASEBY5",
    decreaseBy5: "DECREASEBY5",
  };

  // important first parameter of the reducer function is state object and second is the action object;
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case typesCounterActions.increment:
        return { count: state.count++ };
      case typesCounterActions.decrement:
        return { count: state.count-- };
      case typesCounterActions.increaseBy5:
        return { count: state.count + 5 };
      case typesCounterActions.decreaseBy5:
        return { count: state.count - 5 };
      default:
        throw new Error("something went wrong");
    }
  };
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div
      style={{
        margin: "50px",
        border: "2px solid black",
        backgroundColor: "#30ff93",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Below logic is handled by useReducer hook</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {state.count}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={() => dispatch({ type: typesCounterActions.increment })}
        >
          {typesCounterActions.increment}
        </button>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={() => dispatch({ type: typesCounterActions.decrement })}
        >
          {typesCounterActions.decrement}
        </button>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={() => dispatch({ type: typesCounterActions.increaseBy5 })}
        >
          {typesCounterActions.increaseBy5}
        </button>
        <button
          style={{ margin: "20px", padding: "20px" }}
          onClick={() => dispatch({ type: typesCounterActions.decreaseBy5 })}
        >
          {typesCounterActions.decreaseBy5}
        </button>
      </div>
    </div>
  );
}
