import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="logo-link">
      <span className="span-icon">
        <ion-icon name="glasses-outline" className="logo-icon"></ion-icon>
      </span>
      <span className="span-text">Codingwithmbj</span>
    </Link>
  );
}

export default Logo;
