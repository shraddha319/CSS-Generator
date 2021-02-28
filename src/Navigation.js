import "./Navigation.css";

export default function Navigation({ navItems, setNavItems }) {
  function selectNavItem(event) {
    let itemClicked = event.target.innerText;
    let [itemSelected] = Object.keys(navItems).filter(
      (item) => navItems[item] === true
    );
    setNavItems({ ...navItems, [itemSelected]: false, [itemClicked]: true });
  }

  return (
    <nav className="nav">
      <ul>
        {Object.keys(navItems).map((navItem) => (
          <li key={navItem} className="nav--item" onClick={selectNavItem}>
            {navItem}
          </li>
        ))}
      </ul>
    </nav>
  );
}
