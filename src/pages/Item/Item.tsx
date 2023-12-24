import NavBar from '../../components/Header/NavBar/NavBar';
import Menu from '../../components/Header/Menu/Menu';
import CyberItem from '../../components/Content/CyberItem';
import FooterMain from '../../components/Footer/FooterMain';
import Searchinput from '../../components/Uikit/SearchInput';

function Home() {
  return (
    <div className="container">
      <header>
        <NavBar />
        <Menu />
        <Searchinput />
      </header>
      <main>
        <CyberItem />
      </main>
      <footer>
        <div className="choseFooter">
          <FooterMain />
        </div>
      </footer>
    </div>
  );
}

export default Home;
