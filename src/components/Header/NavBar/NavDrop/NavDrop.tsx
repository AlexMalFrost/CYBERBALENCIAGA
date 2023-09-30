import React from 'react';
import './NavDrop.scss';
import dataNav from '../../../../assets/datamNav.json';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { changeNavDropState } from '../../../../redux/reducers/counterSlice';
import { useDispatch } from 'react-redux';

type NavDropProps = {
  prop: string;
};

export const NavDrop: React.FC<NavDropProps> = ({ prop }) => {
  const dispatch = useDispatch();
  const dataNavB: { [key: string]: string[] } = dataNav.datam;
  const dataNavC: string[] = dataNav['iitems'];

  const [slide, setSlide] = React.useState(0);

  const sliderLeft = () => {
    if (slide > 0) {
      setSlide(slide - 5);
    }
  };

  const sliderRight = (val: number) => {
    if (slide + 5 < Object.keys(dataNavB[val]).length) {
      setSlide(slide + 5);
    }
  };

  return (
    <div className="navBarDropBar">
      {Object.keys(dataNavB).map((val: string) => (
        <div
          key={val}
          className={prop === dataNavC[parseInt(val, 10)] ? 'navdrop_show' : 'navdrop_notvisible'}>
          <div>
            <label>
              <ul className="navdrop_content">
                <button type="button" className="arrow-button" onClick={() => sliderLeft()}>
                  <FontAwesomeIcon icon={faPlay} className="arrow-icon_navdrop" rotation={180} />
                </button>
                {dataNavB[val].slice(slide, slide + 5).map((item) => (
                  <li key={item}>
                    <Link to={`/CYBERBALENCIAGA/${item}`}>
                      <p className="navdrop_p" onClick={() => dispatch(changeNavDropState(item))}>
                        {item.replace('_', ' ')}
                      </p>
                    </Link>
                  </li>
                ))}
                <button
                  type="button"
                  className="arrow-button"
                  onClick={() => sliderRight(parseInt(val, 10))}>
                  <FontAwesomeIcon className="arrow-icon_navdrop" icon={faPlay} />
                </button>
              </ul>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NavDrop;
