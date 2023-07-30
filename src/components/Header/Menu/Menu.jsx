import React from 'react';
import './Menu.scss';
import dataNav from '../../../assets/datamNav.json';
import { useSelector, useDispatch } from 'react-redux';
import { setWindowSize, selectWindowSize } from '../../../redux/reducers/windowSize';

const Menu = () => {
  const windowSize = useSelector(selectWindowSize);
  const dispatch = useDispatch();
  return (
    <div
      className={windowSize ? 'menu_active' : 'menu'}
      onClick={() => dispatch(setWindowSize(false))}>
      <ul className="ul_menu_header" onClick={(e) => e.stopPropagation()}>
        {dataNav['iitems'].map((item) => (
          <li className="li_menu_header" key={item}>
            <a className="a_menu_header" onClick={() => dispatch(setWindowSize(false))}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
