import React from "react";

const ErrorExample = () => {
  let title = "My Random Title";
  const handleClick = () => {
    console.log(title);
    title = "Title Changed Buddy";
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title Pls
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
