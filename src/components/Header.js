import Menu from "./Menu.js";
import { isMobile } from "react-device-detect";
import './Header.scss';

function Header() {
  const name = "NAME";
  return (
    <div className={`header ${isMobile ? "mobile" : ""}`}>
      <div className="name-section">{name}</div>
      <div className="menu-section">
        <Menu></Menu>
      </div>
    </div>
  );
}

export default Header;
