import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavDrop from './NavDrop/NavDrop';

import './NavBar2.scss';

const NavBar2 = ({ items, active, setActive }) => {
  console.log('hanhanhan');
  const [car, setCar] = React.useState({
    new_arrivials: false,
    women: false,
    men: false,
    implants: false,
  });

  React.useEffect(() => {
    if (window.innerWidth > 1346) {
      setActive(false);
    } else {
      setCar(false);
    }
  }, [window.innerWidth]);

  const timerRef = React.useRef(null);

  const handleMouseOver = (props) => {
    timerRef.current = setTimeout(() => {
      setCar(props);
    }, 600);
  };

  const handleMouseOut = () => {
    console.log('nunun');
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
            <li
              onMouseEnter={() => handleMouseOver({ new_arrivials: true })}
              onMouseLeave={handleMouseOut}
              onClick={() => handleMouseOver({ new_arrivials: true })}>
              <p className="navbar_p">new arrivials</p>
              <div>{car.new_arrivials && <NavDrop />}</div>
            </li>
            <li
              onMouseEnter={() => handleMouseOver({ women: true })}
              onMouseLeave={handleMouseOut}
              onClick={() => handleMouseOver({ women: true })}>
              <p className="navbar_p">women</p>
              <div className="navdrophover">{car.women && <NavDrop women={car.women} />}</div>
            </li>
            <li
              onMouseEnter={() => handleMouseOver({ men: true })}
              onMouseLeave={handleMouseOut}
              onClick={() => handleMouseOver({ men: true })}>
              <p className="navbar_p">men</p>
              <div className="navdrophover">{car.men && <NavDrop men={car.men} />}</div>
            </li>
            <li
              onMouseEnter={() => handleMouseOver({ implants: true })}
              onMouseLeave={handleMouseOut}
              onClick={() => handleMouseOver({ implants: true })}>
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
    </>
  );
};

export default NavBar2;
