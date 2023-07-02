import NavBar2 from './components/Header/NavBar2';
import Menu from './components/Header/Menu';
import { useState } from 'react';
import React from 'react';
import CyberContent from './components/Content/cyberContent';
import './App.css';
import Footer from './components/Footer/Footer';
import FooterMob from './components/Footer/FooterMob';
import Searchinput from './components/Uikit/SearchInput';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: 'new arrivials', href: '/' },
    { value: 'women', href: '/' },
    { value: 'men', href: '/' },
    { value: 'implants', href: '/' },
    { value: 'basket', href: '/' },
    { value: 'prosthesis repair', href: '/' },
    { value: 'login', href: '/' },
  ];
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 765;

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  return (
    <div className="container">
      <header>
        <NavBar2 items={items} active={menuActive} setActive={setMenuActive} />
        <Menu active={menuActive} setActive={setMenuActive} items={items} />
        <Searchinput active={menuActive} className="searchinput" />
      </header>
      <main>
        <CyberContent active={menuActive} />
      </main>
      <footer>
        <div className="choseFooter">
          {width < breakpoint ? <FooterMob active={menuActive} /> : <Footer active={menuActive} />}
        </div>
      </footer>
    </div>
  );
}

export default App;
