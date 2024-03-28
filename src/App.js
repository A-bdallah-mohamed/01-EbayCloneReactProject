import React, { Children, createContext,useContext,useEffect, useState } from 'react';
import { Productsprovider } from './components/productsprovider';
import Search from './components/search';

function App() {
 
  return (
    <Productsprovider>
      <div>
        <h1>Hello to my ebay clone</h1>
        <Search />
      </div>
    </Productsprovider>
  );
}

export default App;
