import './Footer.scss';
import dataNav from '../../assets/datamNav.json';
import { useSelector } from 'react-redux';
import { winSatte } from '../../redux/reducers';

const Footer = () => {
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  function scroll_to_bottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  return (
    <div className={windowSize ? 'contentFooter_blur' : 'contentFooter'}>
      {dataNav.ItemValuesFooter.map((item) => (
        <div className="footergap" key={item.field}>
          <label>
            <input type="checkbox" className="checkinput" />
            <div tabIndex={0} className="footergap_name" onClick={() => scroll_to_bottom()}>
              <div className="footergap_value">{item.field}</div>
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
