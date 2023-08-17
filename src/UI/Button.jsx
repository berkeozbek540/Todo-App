import React from "react";

const Button = (props) => {
  const buttonClasses = props.className;
  return (
    <button className={buttonClasses} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
