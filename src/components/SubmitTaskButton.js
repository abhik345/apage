import React from "react";

const SubmitTaskButton = () => {
  const buttonStyle = {
    position: "absolute",
    top: "115px",
    right: "204px",
    width: "99px",
    height: "28px",
    backgroundColor: "rgb(0, 41, 255)",
    borderRadius: "15px",
    color: "white",
    outline: "none",
  };
  return (
    <div>
      <button type="submit" style={buttonStyle}>
        Submit Task
      </button>
    </div>
  );
};

export default SubmitTaskButton;
