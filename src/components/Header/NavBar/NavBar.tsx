import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavDrop from './NavDrop/NavDrop';
import dataNav from '../../../assets/datamNav.json';
import { changeNavDropState } from '../../../redux/reducers/counterSlice';
import { setWindowSize } from '../../../redux/reducers/windowSize';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { winSatte } from '../../../redux/reducers';
import { setSwitcher } from '../../../redux/reducers/searchSwitcher';
import { setLogSwitcher } from '../../../redux/reducers/searchSwitcher';
import { setSearch } from '../../../redux/reducers/searchReducer';
import Login from '../../Uikit/Login';

import './NavBar.scss';

const NavBar = () => {
  const [storeState, setStoreState] = React.useState(false);
  const NavDropSwitcher = useSelector((stat: winSatte) => stat.navdropswitcher.value);
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const loginSwitcher = useSelector((state: winSatte) => state.searchswitcher.logvalue);
  const dispatch = useDispatch();

  const navStoreState = () => {
    dispatch(setWindowSize(!windowSize));
    setStoreState(!storeState);
    dispatch(setLogSwitcher(false));
  };

  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const handleMouseOver = (item: string) => {
    timerRef.current = setTimeout(() => {
      dispatch(changeNavDropState(item));
    }, 600);
  };

  const handleMouseOut = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    dispatch(changeNavDropState(''));
  };

  const searchSwitcherHeader = () => {
    dispatch(setSearch('false'));
    dispatch(setSwitcher(false));
  };

  React.useEffect(() => {
    if (window.innerWidth < 1025) {
      dispatch(changeNavDropState(''));
    }
  }, [window.innerWidth]);

  return (
    <>
      <div className="navheader">
        <div className="checknavheader">
          <ul className="navbox">
            {dataNav['iitems'].slice(0, 4).map((item) => (
              <li
                key={item}
                onMouseEnter={() => handleMouseOver(item)}
                onMouseLeave={handleMouseOut}>
                <p className="navbar_p" onClick={() => handleMouseOver(item)}>
                  {item}
                </p>
                {NavDropSwitcher === item ? <NavDrop prop={item} /> : <></>}
              </li>
            ))}
          </ul>
          <label htmlFor="check" className="checkbtn" onClick={navStoreState}>
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
        <div className="centralbox">
          <Link to="/CYBERBALENCIAGA">
            <title className="logo" title="CYBERBALENCIAGA" onClick={searchSwitcherHeader}>
              CYBERBALENCIAGA
            </title>
          </Link>
        </div>
        <div>
          <ul className="navbox">
            {dataNav['iitems'].slice(4, 6).map((item) => (
              <li key={item}>
                <p className="navbar_p">{item}</p>
              </li>
            ))}
            <li onClick={() => dispatch(setLogSwitcher(!loginSwitcher))}>
              <p className="navbar_p">Login</p>
            </li>
          </ul>
        </div>
      </div>
      <Login />
    </>
  );
};

export default NavBar;
