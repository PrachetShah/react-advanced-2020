import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //this will run on initial render and anytime value of 'value' changes
  useEffect(() => {
    console.log("Re rendered, useEffect called");
    if (value > 1) {
      document.title = `New Messages(${value})`;
    } else {
      document.title = "React App";
    }
    /* 
    when you pass empty dependency array then it will only run on first rendering and then stop
    to make it run when value is changed all we need to do is add that value as a dependency, and when that dependency value
    int this case 'value' changes useEffect is runned again
    */
  }, [value]);

  // This runs only on initial render
  useEffect(() => {
    console.log("First Render, hello World");
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increment
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  );
};

export default UseEffectBasics;
