import React from 'react';
import './App.css';
import Home from '../src/pages/Home/Home'
import Actions from '../src/pages/Actions/Actions'
import Sobre from '../src/pages/Sobre/Sobre'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acoes" element={<Actions />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
