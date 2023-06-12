import NavBar2 from './components/Header/NavBar2';
import Menu from './components/Header/Menu';
import { useState } from 'react';
import React from 'react';
import CyberContent from './components/Content/cyberContent';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: 'new arrivials', href: '/#' },
    { value: 'women', href: '/#' },
    { value: 'men', href: '/#' },
    { value: 'implants', href: '/#' },
    { value: 'basket', href: '/#' },
    { value: 'prosthesis repair', href: '/#' },
    { value: 'login', href: '/#' },
  ];
  return (
    <div className="container">
      <header>
        <NavBar2 items={items} active={menuActive} setActive={setMenuActive} />
      </header>
      <main>
        <Menu active={menuActive} setActive={setMenuActive} items={items} />
        <CyberContent active={menuActive} />
      </main>
      <footer>
        <Footer active={menuActive} />
      </footer>
    </div>
  );
}

export default App;
