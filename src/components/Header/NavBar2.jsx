import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavDrop from './NavDrop';

import './NavBar2.scss';

const NavBar2 = ({ items, active, setActive }) => {
  console.log('hanhanhan');
  const [car, setCar] = React.useState({
    new_arrivials: false,
    women: false,
    man: false,
    implants: false,
  });

  const timerRef = React.useRef(null);

  const handleMouseOver1 = () => {
    timerRef.current = setTimeout(() => {
      setCar({ new_arrivials: true });
    }, 600);
  };
  const handleMouseOver2 = () => {
    timerRef.current = setTimeout(() => {
      setCar({ women: true });
    }, 600);
  };
  const handleMouseOver3 = () => {
    timerRef.current = setTimeout(() => {
      setCar({ man: true });
    }, 600);
  };
  const handleMouseOver4 = () => {
    timerRef.current = setTimeout(() => {
      setCar({ implants: true });
    }, 600);
  };

  const handleMouseOut = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCar(false);
  };

  return (
    <>
      <div className="navheader">
        <div className="checknavheader">
          <ul className="leftbox">
            <li onMouseEnter={handleMouseOver1} onMouseLeave={handleMouseOut}>
              <p className="navbar_p">new arrivials</p>
              <div>{car.new_arrivials && <NavDrop />}</div>
            </li>
            <li onMouseEnter={handleMouseOver2} onMouseLeave={handleMouseOut}>
              <p className="navbar_p">women</p>
              <div className="navdrophover">{car.women && <NavDrop women={car.women} />}</div>
            </li>
            <li onMouseEnter={handleMouseOver3} onMouseLeave={handleMouseOut}>
              <p className="navbar_p">man</p>
              <div className="navdrophover">{car.man && <NavDrop man={car.man} />}</div>
            </li>
            <li onMouseEnter={handleMouseOver4} onMouseLeave={handleMouseOut}>
              <p className="navbar_p">implants</p>
              <div className="navdrophover">
                {car.implants && <NavDrop implants={car.implants} />}
              </div>
            </li>
          </ul>
          <label htmlFor="check" className="checkbtn" onClick={() => setActive(!active)}>
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
            {items.slice(4, 7).map((item) => (
              <li key={item.value}>
                <p className="navbar_p">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={
          car.new_arrivials || car.man || car.women || car.implants
            ? 'searchbar_backposition'
            : 'searchbar'
        }>
        <svg
          className="logosvg"
          height="32px"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g fill="#929292" id="icon-111-search">
              <path
                d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z"
                id="search"
              />
            </g>
          </g>
        </svg>
        <input type="search" id="site-search" className="searchinput" placeholder="    Search" />
      </div>
    </>
  );
};

export default NavBar2;
