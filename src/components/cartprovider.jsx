import React, { createContext,useContext, useState } from 'react';
const cartcontext = createContext();

export const Cartprovider = ({children}) => {


  const [cart, setcart] = useState([]);
  const [Uniquecart,setUniquecart] = useState([])

  return (
    <cartcontext.Provider value={{cart , setcart , Uniquecart , setUniquecart}}>
    {children}
   </cartcontext.Provider>
  );
};

export const useCartContext  = () => {
    return useContext(cartcontext)
};
