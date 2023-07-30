import NavBar from '../../components/Header/NavBar/NavBar';
import Menu from '../../components/Header/Menu/Menu';
import React from 'react';
import CyberContent from '../../components/Content/cyberContent';
import Footer from '../../components/Footer/Footer';
import FooterMob from '../../components/Footer/FooterMob';
import Searchinput from '../../components/Uikit/SearchInput';
import { useDispatch } from 'react-redux';
import { setWindowSize } from '../../redux/reducers/windowSize';

function Home() {
  const dispatch = useDispatch();
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 765;

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [window.innerWidth]);

  React.useEffect(() => {
    if (window.innerWidth > 1346) {
      dispatch(setWindowSize(false));
    }
  }, [window.innerWidth]);

  return (
    <div className="container">
      <header>
        <NavBar />
        <Menu />
        <Searchinput className="searchinput" />
      </header>
      <main>
        <CyberContent />
      </main>
      <footer>
        <div className="choseFooter">{width < breakpoint ? <FooterMob /> : <Footer />}</div>
      </footer>
    </div>
  );
}

export default Home;
