import React, { useEffect, useState } from 'react'
import Loginbar from '../components/loginbar'
import Search from '../components/search'
import Categorybar from '../components/categorybar'
import Header from '../components/header'
import Footer from '../components/footer'
import Mainbanner from '../components/mainbanner'
import Luxdeals from '../components/luxdeals'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Productsprovider , useProductscontext } from '../components/productsprovider'
export default function Categorypage() {
  const {products} = useProductscontext()
  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const { category } = useParams();
  const [productscategory,setproductscategory] = useState();

  useEffect(() => {
const catprod = products.filter(p => p.category === category) 
setproductscategory(catprod)

  },[products,category])

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
},[])
const scrolltotop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}
  return (
    <>
    <div className='w-full flex-col flex justify-center items-center'>
    <div className='contentwidth'>
    <Loginbar />
       <Search />

       <div className='text-6xl font-semibold ml-1 mt-[20px] mb-9'>{category}</div>


       <div className='flex'>
{/*start of (shop by category)*/}

<div className='flex flex-col  mr-[50px] w-[250px]'>
  <div className='font-semibold text-xl mb-5'> Shop by Category</div>
  <div className='flex flex-col gap-1 ml-2'>
    {uniqueCategories.map((category,indx) => (
         <Link to={`/pages/categorypage/${category}`} key={indx} onClick={scrolltotop}>
      <div className='hover:underline cursor-pointer w-full' >{category}</div>
      </Link>
    ))}
  </div>
</div>

{/*end of (shop by category)*/}


<div className='flex flex-col'>
<div className='text-xl font-semibold ml-2 mb-5'>All listings</div>
<div className='flex flex-wrap gap-[25px] mb-[25px]'>
{productscategory ?  (productscategory.map((product,id) => (
  <div key={id} className='flex flex-col max-w-[300px]'>
  <div  className='w-[300px] h-[300px]  bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center'>
  <Link to={`/pages/Productpage/${product.id}`} target="_blank" rel="noopener noreferrer">
    <img src={product.thumbnail} className='cursor-pointer'></img>
    </Link>
    </div>
    <Link to={`/pages/Productpage/${product.id}`} target="_blank" rel="noopener noreferrer">
    <div className='cursor-pointer hover:underline ml-1 mt-2 mb-3 flex-wrap'>{product.title}</div>
    </Link>
    <div className='font-semibold text-xl'>${product.price}</div>
    <div className='text-slate-400'>%{product.discountPercentage}</div>
    <div className='text-sm'>In stock : {product.stock}</div>
  </div>
)) ) : (<div>Loading ...</div>)}
</div>
</div>

       </div>


    </div>
  
    </div>
    <div className='h-[400px] bg-gray-100 w-[full] border-t-2 border-gray-400 flex items-center justify-center'>
    <Footer />
    </div>
    </>
  )
}
