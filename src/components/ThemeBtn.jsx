import React from "react";

function ThemeBtn({ darkTheme, toggleTheme }) {
  const currentTheme = darkTheme ? "dark" : "light";
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      <span className={`theme-indicator ${currentTheme}`}></span>
    </button>
  );
}

export default ThemeBtn;
