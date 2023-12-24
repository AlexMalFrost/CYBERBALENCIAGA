import NavBar from '../../components/Header/NavBar/NavBar';
import Menu from '../../components/Header/Menu/Menu';
import FooterMain from '../../components/Footer/FooterMain';
import Searchinput from '../../components/Uikit/SearchInput';
import CyberGoods from '../../components/Content/cyberGoods';

function Goods() {
  return (
    <div className="container">
      <header>
        <NavBar />
        <Menu />
        <Searchinput />
      </header>
      <main>
        <CyberGoods />
      </main>
      <footer>
        <div className="choseFooter">
          <FooterMain />
        </div>
      </footer>
    </div>
  );
}

export default Goods;
