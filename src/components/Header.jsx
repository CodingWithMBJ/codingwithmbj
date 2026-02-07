import React from "react";
import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import ThemeBtn from "./ThemeBtn";
import NavBar from "./NavBar";

function Header({ darkTheme, toggleTheme, showMenu, handleToggle }) {
  return (
    <header className="header">
      <MenuBtn showMenu={showMenu} handleToggle={handleToggle} />
      <Logo />
      <NavBar showMenu={showMenu} />
      <ThemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;
