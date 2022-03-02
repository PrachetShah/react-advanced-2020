import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      {/* {if(){console.log('hello world')}} */}
      <h1>{text || "john doe"}</h1>
      <button
        className="btn"
        style={{ margin: "2rem" }}
        onClick={() => setIsError(!isError)}
      >
        toggle error
      </button>
      {/*Using Short-circuit operator*/}
      {isError && <h1>Error...</h1>}
      {/*Using Ternary operator */}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
          <p>Error Solved</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
