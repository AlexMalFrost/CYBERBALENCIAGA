import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setWindowSize } from './redux/reducers/windowSize';
import { lazy, Suspense } from 'react';

function App() {
  const dispatch = useDispatch();
  const [width, setWidth] = React.useState(window.innerWidth);
  const Goods = lazy(() => import('./pages/Goods/Goods'));

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
        path="/CYBERBALENCIAGA/dresses"
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
