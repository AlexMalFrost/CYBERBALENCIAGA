import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { setWindowSize } from './redux/reducers/windowSize';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [width, setWidth] = React.useState(window.innerWidth);
  const Goods = lazy(() => import('./pages/Goods/Goods'));
  const Item = lazy(() => import('./pages/Item/Item'));
  const Cart = lazy(() => import('./pages/Cart/Cart'));

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    if (window.innerWidth > 1025) {
      dispatch(setWindowSize(false));
    }
  }, [dispatch, width]);
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/CYBERBALENCIAGA" element={<Home />} />
      </Route>
      <Route
        path="/CYBERBALENCIAGA/content/:contentpage"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Goods />
          </Suspense>
        }
      />
      <Route
        path="/CYBERBALENCIAGA/:itempage"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Item />
          </Suspense>
        }
      />
      <Route
        path="/CYBERBALENCIAGA/CART"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Cart />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
