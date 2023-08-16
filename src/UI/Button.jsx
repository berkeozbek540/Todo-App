import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const buttonClasses = classes.button + " " + props.className;
  return (
    <button className={buttonClasses} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
