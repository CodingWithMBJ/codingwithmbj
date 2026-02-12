import React from "react";
import Logo from "./Logo";
import ActionNav from "./ActionNav";

function Header({ darkTheme, toggleTheme, onScroll, isDesktop }) {
  const headerStyle = onScroll ? "show scrolling" : "hidden";

  return (
    <header className={`header ${headerStyle}`}>
      <Logo onScroll={onScroll} />
      {isDesktop && (
        <ActionNav toggleTheme={toggleTheme} darkTheme={darkTheme} />
      )}
    </header>
  );
}

export default Header;
