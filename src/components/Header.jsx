import React from "react";
import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import NavBar from "./NavBar";
import ThemeBtn from "./ThemeBtn";

function Header({ showMenu, handleToggle, isDesktop, darkTheme, toggleTheme }) {
  return (
    <header className="header">
      <Logo />
      {!isDesktop && <NavBar showMenu={showMenu} isDesktop={isDesktop} />}

      {!isDesktop && (
        <MenuBtn showMenu={showMenu} handleToggle={handleToggle} />
      )}
      <ThemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;
