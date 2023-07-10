import React from 'react';
import './Menu.scss';

const Menu = ({ items, active, setActive }) => {
  return (
    <div className={active ? 'menu_active' : 'menu'} onClick={() => setActive(false)}>
      <ul className="ul_menu_header" onClick={(e) => e.stopPropagation()}>
        {items.map((item) => (
          <li className="li_menu_header" key={item.value}>
            <a className="a_menu_header" onClick={() => setActive(false)}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
