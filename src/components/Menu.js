import "./Menu.scss";

function Menu() {

  const menuItems = ["item1", "item2", "item3"];

  function returnMenuItems() {
    return (
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="menu">
      {returnMenuItems()}
    </div>
  );
}

export default Menu;
