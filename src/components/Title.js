import React from "react";

const Title = () => {
  return (
    <div>
      <h2 style={titleStyle}>Technical Project Management</h2>
    </div>
  );
};

const titleStyle = {
  position: "absolute",
  width: "466px",
  height: "42px",
  left: "27px",
  top: "84px",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "42px",
  letterSpacing: "0.02em",
  color: "#0029FF",
};

export default Title;
