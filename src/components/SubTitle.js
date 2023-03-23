import React from "react";

const SubTitle = () => {
  const containerStyle = {
    position: "absolute",
    width: "1066px",
    height: "135px",
    left: "67px",
    top: "165px",
    background: "#E9ECEF",
    borderRadius: "5px",
  };
  return (
    <div style={containerStyle}>
      <h4 style={{ textAlign: "left", paddingLeft: "25px" }}>
        Explore the world of managemant
      </h4>
      <p style={{ textAlign: "left", paddingLeft: "25px" }}>
        As a project manager, you play an important reole in leading a project
        through initiation, planning, execution, monitoring, controlling and
        completion. How? Do you want to manage each and every step of your life?
      </p>
    </div>
  );
};

export default SubTitle;
