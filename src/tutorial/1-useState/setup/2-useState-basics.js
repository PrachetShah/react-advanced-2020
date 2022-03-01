import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("My Random Title");

  const handleClick = () => {
    if (text === "My Random Title") {
      setText("Title Changed XD");
    } else {
      setText("My Random Title");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title Pls
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
