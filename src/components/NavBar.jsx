import React from "react";
import { navigation } from "../data/navigation";
import { NavLink } from "react-router-dom";

function NavBar({ showMenu, isDesktop }) {
  const navStyle = showMenu ? "opened" : "";

  if (isDesktop) {
    return (
      <nav className={`nav nav-desktop`}>
        <ul className="nav-ul">
          {navigation.map((item) => (
            <li className="nav-li" key={item.id}>
              <NavLink to={item.section} className={"nav-li-a"}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  if (!isDesktop) {
    return (
      <nav className={`nav nav-mobile ${navStyle}`}>
        <ul className="nav-ul">
          {navigation.map((item) => (
            <li className="nav-li" key={item.id}>
              <NavLink to={item.section} className={"nav-li-a"}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
