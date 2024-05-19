import React, { useState } from "react";
import ChildComponent from "./childComponent";

export const MyContext = React.createContext();

const Context = () => {
  const [value, setValue] = useState("Enter");
  /* 
  In React, the useContext hook and the Context API are closely related but are not exactly
  the same thing. Here's a detailed explanation of each and how they work together:

  # Context API :- 
    The Context API is a feature in React that allows you to share state and other values
    between components without having to pass props down through multiple levels of the component tree.
    It is particularly useful for global state management, themes, localization, and other shared data.

  # Key Components of the Context API:
  1.Context Creation:
    -> You create a Context object using React.createContext().
  2.Provider Component:
    -> The Context object comes with a Provider component. The Provider component is used to wrap
       parts of your component tree that need access to the shared state.
    -> The Provider component accepts a value prop, which is the value to be passed to the context
       consumers.  
  3.Consumer Component:
    -> Context consumers can access the context value using the Consumer component.
    -> Example :
    <MyContext.Consumer>
     {value => ""}
     </MyContext.Consumer>

    ## useContext Hook
       The useContext hook is a React hook that allows functional components to subscribe to
       context changes.
       It provides a simpler way to access the context value directly within a functional component
       without using a Consumer component.
       exaple as we did inside child component in this folder;
  */
  return (
    <MyContext.Provider value={value}>
      <div
        style={{
          margin: "50px",
          border: "2px solid black",
          backgroundColor: "#30ff93",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Below logic is handled by useContext hook</h2>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <input
            style={{ marginRight: "20px" }}
            type="text"
            placeholder="Enter here!"
            onChange={(e) => setValue(e.target.value)}
          />
          <ChildComponent />
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default Context;
