import React from 'react';
import './Footer.scss';
import { useSelector } from 'react-redux';
import { selectWindowSize } from '../../redux/reducers/windowSize';
import dataNav from '../../assets/datamNav.json';

const Footer = () => {
  const windowSize = useSelector(selectWindowSize);
  function scroll_to_bottom() {
    window.scrollTo(0, document.body.scrollHeight, 'smooth');
  }
  return (
    <div className={windowSize ? 'contentFooter_blur' : 'contentFooter'}>
      {dataNav.ItemValuesFooter.map((item) => (
        <div className="footergap" key={item.field}>
          <label>
            <input type="checkbox" className="checkinput" />
            <div tabIndex="0" className="footergap_name" onClick={() => scroll_to_bottom()}>
              {item.field}
            </div>
            <ul className="footergap_content">
              {item.details.map((item) => (
                <li key={item.link}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Footer;
