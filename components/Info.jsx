import React from "react";

const Info = (props) => {
  return (
    <div className="heading-info">
      <h1>{props.heading}</h1>
      <h3>{props.content}</h3>
    </div>
  );
};

export default Info;
