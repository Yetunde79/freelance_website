import React from "react";

export default function ProjectItems(props) {
  return (
    <div>
      <img src={props.img} alt="aimient" />
      <h4>{props.name}</h4>
      <p>{props.tagline}</p>
    </div>
  );
}
