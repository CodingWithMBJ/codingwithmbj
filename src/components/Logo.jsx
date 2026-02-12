import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  // const linkStyle = onScroll ? "show" : "hidden";
  return (
    <Link to={"/"} className={`logo-link`}>
      <span className={`icon-span`}>
        <ion-icon name="glasses-outline" className={`icon-logo`}></ion-icon>
      </span>
      <span className="icon-text">Codingwithmbj</span>
    </Link>
  );
}

export default Logo;
