import React from "react";

const Container = ({ children, className = "", center = false }) => {
  return (
    <div
      className={`container ${className} ${center ? "flex items-center" : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
