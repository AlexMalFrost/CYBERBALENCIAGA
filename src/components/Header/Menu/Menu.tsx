import React from 'react';
import './Menu.scss';
import dataNav from '../../../assets/datamNav.json';
import { useSelector, useDispatch } from 'react-redux';
import { setWindowSize } from '../../../redux/reducers/windowSize';
import { changeNavDropState } from '../../../redux/reducers/counterSlice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { winSatte } from '../../../redux/reducers';
import { setSearch } from '../../../redux/reducers/searchReducer';
import { setSwitcher } from '../../../redux/reducers/searchSwitcher';

const Menu: React.FC = () => {
  const [see, setNotSee] = React.useState(true);
  const count = useSelector((stat: winSatte) => stat.navdropswitcher.value);
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const dispatch = useDispatch();

  console.log(count);

  const dataNavB: { [key: string]: string[] } = dataNav.datam;

  const dataNavC = dataNav['iitems'];

  const handleMenuOver = (item: string) => {
    dispatch(changeNavDropState(item));
    setNotSee(false);
  };
  const handleMenuOverNow = (e: string) => {
    dispatch(setSwitcher(false));
    dispatch(setSearch(e));
    setNotSee(!see);
    dispatch(changeNavDropState('none'));
    dispatch(setWindowSize(false));
  };

  React.useEffect(() => {
    function handleResize() {
      setNotSee(true);
    }
    window.addEventListener('resize', handleResize);
  });

  const handleClickScrollUp = () => {
    const element = document.getElementById('section-2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className={windowSize ? 'menu_active' : 'menu'} onClick={(e) => e.stopPropagation()}>
        <div className="menu_button_scroll">
          <FontAwesomeIcon
            className="arrow-icon_menu_scroll"
            rotation={270}
            icon={faPlay}
            onClick={handleClickScrollUp}
          />
        </div>
        <ul className="ul_menu_header">
          <>
            {see ? (
              <div>
                <div id="section-2"></div>
                {dataNavC.slice(0, 4).map((item) => (
                  <li className="li_menu_header" key={item}>
                    <a className="menu_p" onClick={() => handleMenuOver(item)}>
                      {item}
                    </a>
                  </li>
                ))}
                {dataNavC.slice(4, 7).map((item) => (
                  <li className="li_menu_header" key={item}>
                    <a className="menu_p">{item}</a>
                  </li>
                ))}
                <div id="section-1"></div>
              </div>
            ) : (
              <>
                <div id="section-2"></div>
                {dataNavC.slice(0, 4).map((item) => (
                  <>
                    {count === item ? (
                      <>
                        {Object.keys(dataNavB).map((val) => (
                          <ul
                            key={val}
                            className={
                              count === dataNavC[parseInt(val, 10)] ? 'ul_menu_header_item' : 'menu'
                            }>
                            {dataNavB[val].map((item: string) => (
                              <li key={item} className="li_menu_header">
                                <Link to={`/CYBERBALENCIAGA/content`}>
                                  <p className="menu_p" onClick={() => handleMenuOverNow(item)}>
                                    {item.replace('_', ' ')}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
                <div id="section-1"></div>
              </>
            )}
          </>
        </ul>

        <div className="menu_button_scroll_down">
          <FontAwesomeIcon
            className="arrow-icon_menu_scroll_down"
            rotation={90}
            icon={faPlay}
            onClick={handleClickScroll}
          />
        </div>
        {see ? (
          <></>
        ) : (
          <div className="menu_button_back" onClick={() => setNotSee(true)}>
            <FontAwesomeIcon className="arrow-icon_menu" rotation={180} icon={faArrowTurnRight} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Menu;
