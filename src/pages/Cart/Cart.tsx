import React from 'react';
import NavBar from '../../components/Header/NavBar/NavBar';
import Menu from '../../components/Header/Menu/Menu';
import FooterMain from '../../components/Footer/FooterMain';
import Searchinput from '../../components/Uikit/SearchInput';
import CyberCart from '../../components/Content/CyberCart';

const Cart: React.FC = () => {
  return (
    <div className="container">
      <header>
        <NavBar />
        <Menu />
        <Searchinput />
      </header>
      <main>
        <CyberCart />
      </main>
      <footer>
        <div className="choseFooter">
          <FooterMain />
        </div>
      </footer>
    </div>
  );
};

export default Cart;
