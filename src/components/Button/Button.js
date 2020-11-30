import React from "react";

const Button = ({ value, onClick, style }) => {
  return (
    <button style={style} className="button-component" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
