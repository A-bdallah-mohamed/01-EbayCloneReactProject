import React, { useEffect, useState } from 'react'
import Loginbar from '../components/loginbar';
import Search from '../components/search';
import { Productsprovider , useProductscontext } from '../components/productsprovider';
import { useParams } from 'react-router-dom'
import Product from '../components/product';
import Similaritems from '../components/similaritems';
import Footer from '../components/footer';
export default function Productpage() {
const [product ,setproduct] = useState();
const { products } = useProductscontext();
    const { id } = useParams();

useEffect(() => {
    setproduct(products.find(p => p.id === parseInt(id)))
  
},[products, id])


  return (
    <>
    <div className='w-full flex-col flex justify-center items-center'>
    <div className='contentwidth'>
<Loginbar />
<Search />
{product && <Product  product={product}/> }
{product && <Similaritems product={product}/>}

</div>

</div>
<div className='h-[400px] bg-gray-100 w-[full] border-t-2 border-gray-400 flex items-center justify-center'>
    <Footer />
    </div>
    </>
  )
}
