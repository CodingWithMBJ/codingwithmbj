import React from "react";

function MenuBtn({ handleToggle, showMenu }) {
  const btnStyle = showMenu ? "open" : "close";
  return (
    <button className={`menu-btn ${btnStyle}`} onClick={handleToggle}>
      <span className="first"></span>
      <span className="second"></span>
    </button>
  );
}

export default MenuBtn;
