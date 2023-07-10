import React from 'react';
import './Footer.scss';
import ItemValuesFooter from './ItemValuesFooter';

const Footer = ({ active }) => {
  function scroll_to_bottom() {
    window.scrollTo(0, document.body.scrollHeight, 'smooth');
  }
  return (
    <div className={active ? 'contentFooter_blur' : 'contentFooter'}>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div tabIndex="0" className="footergap_name" onClick={() => scroll_to_bottom()}>
            CONNECT
          </div>
          <ul className="footergap_content">
            {ItemValuesFooter.slice(0, 4).map((item) => (
              <li key={item.value}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div tabIndex="0" className="footergap_name" onClick={() => scroll_to_bottom()}>
            CORPORATE INFO
          </div>
          <ul className="footergap_content">
            {ItemValuesFooter.slice(4, 7).map((item) => (
              <li key={item.value}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div tabIndex="0" className="footergap_name" onClick={() => scroll_to_bottom()}>
            HELP
          </div>
          <ul className="footergap_content">
            {ItemValuesFooter.slice(7, 10).map((item) => (
              <li key={item.value}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div tabIndex="0" className="footergap_name" onClick={() => scroll_to_bottom()}>
            BECOME A MEMBER
          </div>
          <ul className="footergap_content">
            {ItemValuesFooter.slice(10, 12).map((item) => (
              <li key={item.value}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </label>
      </div>
    </div>
  );
};

export default Footer;
