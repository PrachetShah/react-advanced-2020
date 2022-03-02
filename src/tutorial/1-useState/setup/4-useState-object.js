import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    msg: "Help Me Peter Parker",
  });

  const changeMessage = () => {
    // Here we use spread operator to copy the rest of values and only change message in this case so whole object is not deleted
    setPerson({ ...person, msg: "hello world" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Message: {person.msg}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
