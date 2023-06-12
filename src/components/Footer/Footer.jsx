import React from 'react';
import './Footer.scss';

const Footer = ({ active }) => {
  return (
    <div className={active ? 'contentFooter_blur' : 'contentFooter'}>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div tabIndex="0" className="footergap_name">
            CONNECT
          </div>
          <ul className="footergap_content">
            <li onClick={() => console.log('mymymy')}>
              <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                Tiktok
              </a>
            </li>
          </ul>
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div tabIndex="0" className="footergap_name">
            CORPORATE INFO
          </div>
          <ul className="footergap_content">
            <li>
              <a
                href="https://kering.wd3.myworkdayjobs.com/Balenciaga"
                target="_blank"
                rel="noopener noreferrer">
                Career at CyberBalenciaga
              </a>
            </li>
            <li>
              <a href="https://hmgroup.com/about-us/" target="_blank" rel="noopener noreferrer">
                About CyberBalenciaga group
              </a>
            </li>
            <li>
              <a href="https://about.hm.com/" target="_blank" rel="noopener noreferrer">
                Press
              </a>
            </li>
          </ul>
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div tabIndex="0" className="footergap_name">
            HELP
          </div>
          <ul className="footergap_content">
            <li>
              <a
                href="https://www2.hm.com/en_us/customer-service.html"
                target="_blank"
                rel="noopener noreferrer">
                Customer Service
              </a>
            </li>
            <li>
              <a
                href="https://services.chanel.com/es_ES/privacy"
                target="_blank"
                rel="noopener noreferrer">
                Legal & Privacy
              </a>
            </li>
            <li>
              <a
                href="https://www2.hm.com/en_us/customer-service/legal-and-privacy/cookie-notice.html"
                target="_blank"
                rel="noopener noreferrer">
                Cookie Notice
              </a>
            </li>
          </ul>
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div tabIndex="0" className="footergap_name">
            BECOME A MEMBER
          </div>
          <ul className="footergap_content">
            <li>
              <a
                href="https://www2.hm.com/en_us/member/info.html"
                target="_blank"
                rel="noopener noreferrer">
                Join now and get 10% off your next purchase!
              </a>
            </li>
            <li>
              <a
                href="https://creativejobs.balenciaga.com/en/"
                target="_blank"
                rel="noopener noreferrer">
                Collaborate with us
              </a>
            </li>
          </ul>
        </label>
      </div>
    </div>
  );
};

export default Footer;
