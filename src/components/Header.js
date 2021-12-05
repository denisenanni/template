import Menu from './Menu.js';

function Header() {
  const name = "NAME";
  return(
    <div>
      <div className="name-section">{name}</div>
      <div className="menu-section">
        <Menu></Menu>
      </div>
    </div>
  );
}

export default Header;
