import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { setWindowSize } from './redux/reducers/windowSize';
import { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { winSatte } from './redux/reducers';
import { setSearch } from './redux/reducers/searchReducer';

function App() {
  const dispatch = useDispatch();
  const [width, setWidth] = React.useState(window.innerWidth);
  const [searchParams, setSearchParams] = useSearchParams();
  const Goods = lazy(() => import('./pages/Goods/Goods'));
  const searchGoods = useSelector((state: winSatte) => state.searchslice.value);

  React.useEffect(() => {
    if (window.location.search && searchGoods !== searchParams.get('searchGoods')) {
      dispatch(setSearch(searchParams.get('searchGoods')));
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    if (window.innerWidth > 1025) {
      dispatch(setWindowSize(false));
    }
  }, [width]);
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/CYBERBALENCIAGA" element={<Home />} />
      </Route>
      <Route
        path="/CYBERBALENCIAGA/content"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Goods />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
