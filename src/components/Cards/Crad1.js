import React from "react";

const Crad1 = () => {
  //   const titleStyle = {
  //     position: " absolute",
  //     left: "14px",
  //     width: "336px",
  //     padding: " 5px",
  //     margin: "8px",
  //   };
  return (
    <div className="card-container">
      <div className="card">
        <h4 className="card-title">Structure your Pointers</h4>
        <p className="card-description">
          Description : Write a 300 - 400 word article from your thread .
          Publish your understanding and showcase your understanding to the
          entire world
        </p>
        <form action="" className="title-form" style={{ position: "absolute" }}>
          <span style={{ position: "relative", right: "50px" }}>Title</span>
          <br />
          <input type="text" style={{ position: "relative", left: "21px" }} />
          <span>Content</span>
          <div>
            <ul>
              <li>File</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Crad1;
