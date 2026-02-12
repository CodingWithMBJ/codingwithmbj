import React from "react";
import { navigation } from "../data/navigation";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        {navigation.map((item) => (
          <li className="nav-li" key={item.id}>
            <NavLink to={`/${item.path}`} className={`nav-li-a`}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
