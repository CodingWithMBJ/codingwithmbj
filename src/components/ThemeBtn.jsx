import React from "react";

function ThemeBtn({ darkTheme, toggleTheme }) {
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      <ion-icon
        name={`${darkTheme ? "moon-outline" : "sunny-outline"}`}
      ></ion-icon>
    </button>
  );
}

export default ThemeBtn;
