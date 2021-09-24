import React from "react";
import "../assets/styles/Section.css";

function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon fontSize="small" />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
