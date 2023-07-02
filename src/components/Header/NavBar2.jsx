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
  React.useEffect(() => {
    if (window.innerWidth < 1346) {
      setCar(false);
    }
  }, [window.innerWidth]);

  React.useEffect(() => {
    if (window.innerWidth > 1346) {
      setActive(false);
    }
  }, [window.innerWidth]);

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
            <li
              onMouseEnter={handleMouseOver1}
              onMouseLeave={handleMouseOut}
              onClick={handleMouseOver1}>
              <p className="navbar_p">new arrivials</p>
              <div>{car.new_arrivials && <NavDrop />}</div>
            </li>
            <li
              onMouseEnter={handleMouseOver2}
              onMouseLeave={handleMouseOut}
              onClick={handleMouseOver2}>
              <p className="navbar_p">women</p>
              <div className="navdrophover">{car.women && <NavDrop women={car.women} />}</div>
            </li>
            <li
              onMouseEnter={handleMouseOver3}
              onMouseLeave={handleMouseOut}
              onClick={handleMouseOver3}>
              <p className="navbar_p">man</p>
              <div className="navdrophover">{car.man && <NavDrop man={car.man} />}</div>
            </li>
            <li
              onMouseEnter={handleMouseOver4}
              onMouseLeave={handleMouseOut}
              onClick={handleMouseOver4}>
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
