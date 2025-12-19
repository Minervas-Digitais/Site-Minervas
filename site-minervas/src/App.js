import React from 'react';
import './App.css';
import Home from '../src/pages/Home/Home'
import Actions from '../src/pages/Actions/Actions'
import Sobre from '../src/pages/Sobre/Sobre'
import { Routes, Route, HashRouter } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acoes" element={<Actions />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
