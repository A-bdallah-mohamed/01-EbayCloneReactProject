import React, { Children, createContext,useContext,useEffect, useState } from 'react';
import { Productsprovider } from './components/productsprovider';
import Header from './components/header';
import Mainbanner from './components/mainbanner';
import './App.css' 
import Explore from './components/explore';
import Todaysdeals from './components/todaysdeals';
import Luxdeals from './components/luxdeals';
import Footer from './components/footer';
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
      <div className='h-[400px] bg-gray-100 w-[full] border-t-2 border-gray-400 flex items-center justify-center '>
        <Footer />
</div>
    </Productsprovider>
  );
}

export default App;
