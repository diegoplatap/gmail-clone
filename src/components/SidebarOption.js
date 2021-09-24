import React from "react";
import "../assets/styles/SidebarOption.css";

function SidebarOption({ Icon, title, number, selected, many }) {
  return (
    <div
      className={`sidebarOption ${selected && "sidebarOption--active"} ${
        many && "sidebarOption--many"
      } `}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
