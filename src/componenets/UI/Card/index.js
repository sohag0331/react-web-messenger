import React from "react";
import "./style.css";

/**
 * @author: Sohag Babu
 * @function Card
 **/

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
