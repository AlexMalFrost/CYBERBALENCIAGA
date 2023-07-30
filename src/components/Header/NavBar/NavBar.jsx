import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavDrop from './NavDrop/NavDrop';
import dataNav from '../../../assets/datamNav.json';
import { incrementByAmount, selectCount } from '../../../redux/reducers/counterSlice';
import { setWindowSize, selectWindowSize } from '../../../redux/reducers/windowSize';
import { useSelector, useDispatch } from 'react-redux';

import './NavBar.scss';

const NavBar = () => {
  const count = useSelector(selectCount);
  const windowSize = useSelector(selectWindowSize);
  const dispatch = useDispatch();

  const timerRef = React.useRef(null);
  const handleMouseOver = (item) => {
    timerRef.current = setTimeout(() => {
      dispatch(incrementByAmount(item));
    }, 600);
  };

  const handleMouseOut = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    dispatch(incrementByAmount(false));
  };

  React.useEffect(() => {
    if (window.innerWidth < 1346) {
      dispatch(incrementByAmount(false));
    }
  }, [window.innerWidth]);

  return (
    <>
      <div className="navheader">
        <div className="checknavheader">
          <ul className="leftbox">
            {dataNav['iitems'].slice(0, 4).map((item) => (
              <li
                key={item}
                onMouseEnter={() => handleMouseOver(item)}
                onMouseLeave={handleMouseOut}
                onClick={() => handleMouseOver(item)}>
                <p className="navbar_p">{item}</p>
                {count === item ? <NavDrop prop={item} /> : <></>}
              </li>
            ))}
          </ul>
          <label
            htmlFor="check"
            className="checkbtn"
            onClick={() => dispatch(setWindowSize(!windowSize))}>
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
        <div className="centralbox">
          <title className="logo" title="CYBERBALENCIAGA">
            CYBERBALENCIAGA
          </title>
        </div>
        <div>
          <ul className="rightbox">
            {dataNav['iitems'].slice(4, 7).map((item) => (
              <li key={item}>
                <p className="navbar_p">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
