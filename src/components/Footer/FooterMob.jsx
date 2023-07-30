import React from 'react';
import './Footer.scss';
import { useSelector } from 'react-redux';
import { selectWindowSize } from '../../redux/reducers/windowSize';
import dataNav from '../../assets/datamNav.json';

const FooterMob = ({ active }) => {
  const windowSize = useSelector(selectWindowSize);
  const [footer, setFooter] = React.useState(false);

  const handleFooter = (props) => {
    if (footer === false) {
      setFooter(props);
    } else if (footer === props) {
      setFooter(false);
    } else {
      setFooter(props);
    }
  };

  function scroll_to_bottom() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0);
  }
  return (
    <div className={windowSize ? 'contentFooter_blur' : 'contentFooter'}>
      {dataNav.ItemValuesFooter.map((item) => (
        <div className="footergap" key={item.field}>
          <label>
            <input type="checkbox" className="checkinput" />
            <div
              tabIndex="0"
              className={footer.connect ? 'footergap_name_blue' : 'footergap_name'}
              onClick={() => {
                handleFooter(item.field);
                scroll_to_bottom();
              }}>
              {item.field}
            </div>
          </label>
          {footer === item.field && (
            <ul className="footergap_content">
              {item.details.map((item) => (
                <li key={item.link}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterMob;
