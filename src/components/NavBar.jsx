import React from "react";
import { navigation } from "../data/navigation";
import { NavLink } from "react-router-dom";

function NavBar({ showMenu }) {
  const navStyle = showMenu ? "opened" : "";
  return (
    <nav className={`nav ${navStyle}`}>
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

export default NavBar;
