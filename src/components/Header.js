import Menu from "./Menu.js";
import { isMobile } from "react-device-detect";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  const name = "NAME";
  return (
    <div className={`header ${isMobile ? "mobile" : ""}`}>
      <Link to={`/`}>
        <div className="name-section">{name}</div>
      </Link>
      <div className="menu-section">
        <Menu></Menu>
      </div>
    </div>
  );
}

export default Header;
