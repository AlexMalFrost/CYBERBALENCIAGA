import React from 'react';
import './Footer.scss';
import dataNav from '../../assets/datamNav.json';
import { useSelector } from 'react-redux';
import { winSatte } from '../../redux/reducers';

const FooterMob = () => {
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const [footer, setFooter] = React.useState('none');

  type ItemValuesFooterType = {
    details: { link: string; href: string }[];
    field: string;
  };
  type ItemValuesFooterTypeS = ItemValuesFooterType[];

  const dataNavb: ItemValuesFooterTypeS = dataNav.ItemValuesFooter;

  const handleFooter = (props: string) => {
    if (footer === 'none') {
      setFooter(props);
    } else if (footer === props) {
      setFooter('none');
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
      {dataNavb.map((item) => (
        <div className="footergap" key={item.field}>
          <label>
            <input type="checkbox" className="checkinput" />
            <div
              tabIndex={0}
              className={footer === item.field ? 'footergap_name_blue' : 'footergap_name'}
              onClick={() => {
                handleFooter(item.field);
                scroll_to_bottom();
              }}>
              {item.field}
            </div>
          </label>
          {footer === item.field && (
            <ul className="footergap_content">
              {item.details.map((item: { link: string; href: string }) => (
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
