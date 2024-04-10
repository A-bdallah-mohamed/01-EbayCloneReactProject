import React, { createContext,useContext, useState , useEffect} from 'react';
const cartcontext = createContext();

export const Cartprovider = ({children}) => {


  const [cart, setcart] = useState([]);
  const [Uniquecart,setUniquecart] = useState([])
  const [cartlength,setcartlength] = useState(null)
  useEffect(()=> {
const newlength = Uniquecart.length 
setcartlength(newlength)
  },[Uniquecart])
let totalprice = 0 
Uniquecart.forEach(p => {p.price += 0 ; 
  totalprice += p.price})
  
 
useEffect(()=>{
  if(cart.length > 0){
      const newarray = [...new Set(cart.map(product => product))];
      const newarraywithcount = newarray.map(product  => ({...product,
          count: cart.filter(p => p === product).length,
          price: product.price * cart.filter(p => p === product).length
      }))
      setUniquecart(newarraywithcount)

  }
},[cart])
  return (
    <cartcontext.Provider value={{cart , setcart , Uniquecart , setUniquecart,totalprice,cartlength,setcartlength}}>
    {children}
   </cartcontext.Provider>
  );
};

export const useCartContext  = () => {
    return useContext(cartcontext)
};
