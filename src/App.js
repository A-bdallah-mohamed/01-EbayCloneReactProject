import React, { Children, createContext,useContext,useEffect, useState } from 'react';
import { Productsprovider } from './components/productsprovider';
import Header from './components/header';
import Mainbanner from './components/mainbanner';
import './App.css' 
import Explore from './components/explore';
import Todaysdeals from './components/todaysdeals';
import Luxdeals from './components/luxdeals';
function App() {
 
  return (
    <Productsprovider>
      <div className='w-full flex items-center justify-center'>
        <div className='contentwidth'>
        <Header />
        <Mainbanner />
        <Explore />
        <Todaysdeals   />
        <Luxdeals />
        </div>
      </div>
    </Productsprovider>
  );
}

export default App;
