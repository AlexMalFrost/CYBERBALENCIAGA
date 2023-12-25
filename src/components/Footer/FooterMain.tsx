import React from 'react';
import Footer from './Footer';
import FooterMob from './FooterMob';

function FooterMain() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const windowdata = window.innerWidth;
  const breakpoint = 765;
  console.log(width);

  React.useEffect(() => {
    setWidth(windowdata);
  }, [windowdata]);

  return <div className="choseFooter">{width < breakpoint ? <FooterMob /> : <Footer />}</div>;
}

export default FooterMain;
