import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { Productsprovider, useProductscontext } from './productsprovider'
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Similaritems({product}) {
    const [similars,setsimilars] = useState([])
  const scrolldiv = useRef(null);

  const {products} = useProductscontext();

useEffect(() => {
    const similaritems = products.filter(p => p.brand === product.brand || p.category === product.category) 
setsimilars(similaritems)

},[product])


  
    const topeightproducts = products.slice(0,9)


    const scrollleft = () =>{
      if(scrolldiv.current) {
        scrolldiv.current.scrollLeft  -= 1050;
      }
    }

    
    const scrollright = () =>{
      if(scrolldiv.current) {
        scrolldiv.current.scrollLeft += 1050;
      }
    }
    const scrolltotop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    }
  return (
    <>
<div className='flex flex-col mt-[20px]'>
    <div className='flex flex-col ml-[65px]'>
        <div className='text-3xl font-bold'>Explore Similar items</div>
        <div className='text-xl font-semibold text-slate-500'>Sponsered</div>
    </div>
<div className='todaysdealss' ref={scrolldiv}>
   
  
<button className='arrow-left' onClick={scrollleft}><RiArrowLeftSLine /></button>


{similars.map((product,id) => (
      <Link to={`/pages/Productpage/${product.id}`}key={id}>
  <div className='maindealcontainer cursor-pointer'>
    <div className='maindeal ' style={{backgroundImage:`url(${product.thumbnail})`, backgroundSize: 'cover'}}>
    </div>
    <div className='w-[300px] h-[80px] px-[10px]'>
    <div className='h-[30px] mt-[5px]  hover:underline font-semibold'>{product.title}</div>
    <div className='h-[25px]  flex'>
    <div className='font-bold pr-[5px]'>$ {product.price} </div>
    <div className='text-sm mt-auto text-slate-500'> %{product.discountPercentage}</div>
    </div>
    </div>
  </div>
  </Link>
))}

<button className='arrow-right' onClick={scrollright}><MdOutlineKeyboardArrowRight /></button>

</div>
</div>
</>
  )
}
