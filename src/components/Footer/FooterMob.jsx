import React from 'react';
import './Footer.scss';
import ItemValuesFooter from './ItemValuesFooter';

const FooterMob = ({ active }) => {
  const [footer, setFooter] = React.useState({
    connect: false,
    corporate: false,
    help: false,
    member: false,
  });

  const handleFooter = (props) => {
    setFooter(props);
  };

  function scroll_to_bottom() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0);
  }
  return (
    <div className={active ? 'contentFooter_blur' : 'contentFooter'}>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div
            tabIndex="0"
            className="footergap_name"
            onClick={() => {
              handleFooter({ connect: !footer.connect });
              scroll_to_bottom();
            }}>
            CONNECT
          </div>
          {footer.connect && (
            <ul className="footergap_content">
              {ItemValuesFooter.slice(0, 4).map((item) => (
                <li key={item.value}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div
            tabIndex="0"
            className="footergap_name"
            onClick={() => {
              handleFooter({ corporate: !footer.corporate });
              scroll_to_bottom();
            }}>
            CORPORATE INFO
          </div>
          {footer.corporate && (
            <ul className="footergap_content">
              {ItemValuesFooter.slice(4, 7).map((item) => (
                <li key={item.value}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div
            tabIndex="0"
            className="footergap_name"
            onClick={() => {
              handleFooter({ help: !footer.help });
              scroll_to_bottom();
            }}>
            HELP
          </div>
          {footer.help && (
            <ul className="footergap_content">
              {ItemValuesFooter.slice(7, 10).map((item) => (
                <li key={item.value}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </label>
      </div>
      <div className="footergap">
        <label>
          <input type="checkbox" className="checkinput" />
          <div
            tabIndex="0"
            className="footergap_name"
            onClick={() => {
              handleFooter({ member: !footer.member });
              scroll_to_bottom();
            }}>
            BECOME A MEMBER
          </div>
          {footer.member && (
            <ul className="footergap_content">
              {ItemValuesFooter.slice(10, 12).map((item) => (
                <li key={item.value}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </label>
      </div>
    </div>
  );
};

export default FooterMob;
