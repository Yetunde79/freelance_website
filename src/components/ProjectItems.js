import React from "react";

export default function ProjectItems(props) {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.img} alt="aimient" />
        <h4>{props.name}</h4>
        <p>{props.tagline}</p>
      </a>
    </div>
  );
}
