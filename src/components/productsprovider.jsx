import React, { createContext,useContext,useEffect, useState } from 'react';
const productscontext = createContext();

export const Productsprovider = ({children}) => {


  const [products, setProducts] = useState([]);
  const [total,settotal] = useState(0)
const [luxproduct,setluxproduct] = useState([]);
  useEffect(() => {
    async function fetchData() {

try {
          const response = await fetch(`https://dummyjson.com/products?limit=${total}`);

          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
 
          setProducts(data.products)
          settotal(data.total)
          setluxproduct(products[80])
      } catch (error){
        console.log('Error fetching products:', error)
      }
    }
    fetchData();
 
  }, []);

  return (
    <productscontext.Provider value={{products , luxproduct}}>
    {children}
   </productscontext.Provider>
  );
};

export const useProductscontext = () => {
    return useContext(productscontext)
};
