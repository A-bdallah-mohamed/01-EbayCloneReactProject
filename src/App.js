import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import { Productsprovider } from './components/productsprovider';
import Categorypage from './pages/categorypage';
import Cartpage from './pages/cartpage';
import './App.css';
import Productpage from './pages/productpage';
import Searchpage from './pages/searchpage';
import { Cartprovider } from './components/cartprovider';
import Signinpage from './pages/signinpage';
import Registerpage from './pages/registerpage';
function App() {
  return (
    <Cartprovider>
    <Productsprovider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/pages/categorypage/:category" element={<Categorypage />} />
          <Route path="/pages/cartpage" element={<Cartpage />} />
          <Route path="/pages/Productpage/:id" element={<Productpage />} />
          <Route path="/pages/searchpage/:searchtext" element={<Searchpage />} />
          <Route path="/pages/signinpage" element={<Signinpage />} />
          <Route path="/pages/registerpage" element={<Registerpage />} />
        </Routes>
      </Router>
    </Productsprovider>
    </Cartprovider>
  );
}

export default App;
