import React from "react";
import ThemeBtn from "./ThemeBtn";
import NavBar from "./NavBar";

function ActionNav({ darkTheme, toggleTheme }) {
  return (
    <aside className="action-nav">
      <NavBar />
      <ThemeBtn toggleTheme={toggleTheme} darkTheme={darkTheme} />
      {/* <button className=""></button> */}
    </aside>
  );
}

export default ActionNav;
