import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const cardClasses =
    classes.card +
    " py-2 px-12 rounded shadow-xl md:w-[600px] " +
    props.className;

  return <div className={cardClasses}>{props.children}</div>;
};

export default Card;
