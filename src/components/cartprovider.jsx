import React, { createContext,useContext, useState } from 'react';
const cartcontext = createContext();

export const Cartprovider = ({children}) => {


  const [cart, setcart] = useState([]);
  const [Uniquecart,setUniquecart] = useState([])
let totalprice = 0 
Uniquecart.forEach(p => {p.price += 0 ; 
  totalprice += p.price})
  
  return (
    <cartcontext.Provider value={{cart , setcart , Uniquecart , setUniquecart,totalprice}}>
    {children}
   </cartcontext.Provider>
  );
};

export const useCartContext  = () => {
    return useContext(cartcontext)
};
