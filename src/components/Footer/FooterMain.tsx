import React from 'react';
import Footer from './Footer';
import FooterMob from './FooterMob';

function FooterMain() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 765;

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [window.innerWidth]);

  return <div className="choseFooter">{width < breakpoint ? <FooterMob /> : <Footer />}</div>;
}

export default FooterMain;
