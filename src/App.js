import React, { Children, createContext,useContext,useEffect, useState } from 'react';
import { Productsprovider } from './components/productsprovider';
import Header from './components/header';
import Mainbanner from './components/mainbanner';
import './App.css' 
function App() {
 
  return (
    <Productsprovider>
      <div className='container'>
        <div className='contentwidth'>
        <Header />
        <Mainbanner />
        </div>
      </div>
    </Productsprovider>
  );
}

export default App;
