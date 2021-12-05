import "./Menu.scss";
import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Menu() {
  const menuItems = ["item1", "item2", "item3"];
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  function returnMenuItems() {
    return (
      <div className="menu-items-desktop">
        {menuItems.map((item, index) => (
          <Link key={index} to={`/${item}`}>
            {" "}
            <div className="menu-item">{item}</div>
          </Link>
        ))}
      </div>
    );
  }

  function returnMobileMenu() {
    return (
      <div className="menu-container">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#000", width: "25px", height: "25px" }} />
          ) : (
            <RiMenu4Fill
              style={{ color: "#000", width: "25px", height: "25px" }}
            />
          )}
        </button>

        <div
          className={`mobile-menu ${navbarOpen ? "show-menu" : "hide-menu"}`}
        >
          {menuItems.map((item, index) => (
            <Link key={index} to={`/${item}`}>
              <div className="menu-item">{item}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="menu">
      <BrowserView>{returnMenuItems()}</BrowserView>
      <MobileView>{returnMobileMenu()}</MobileView>
    </div>
  );
}

export default Menu;
