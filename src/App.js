import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import { Productsprovider } from './components/productsprovider';
import Categorypage from './pages/categorypage';
import Cartpage from './pages/cartpage';
import './App.css';

function App() {
  return (
    
    <Productsprovider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/pages/categorypage" element={<Categorypage />} />
          <Route path="/pages/cartpage" element={<Cartpage />} />
        </Routes>
      </Router>
    </Productsprovider>
  );
}

export default App;
