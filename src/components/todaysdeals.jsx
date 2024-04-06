import React, { useRef } from 'react'
import { useContext } from 'react';
import { Productsprovider, useProductscontext } from './productsprovider'
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Todaysdeals() {
  const scrolldiv = useRef(null);

    const {products} = useProductscontext();
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
  return (
    <>

<div className='todaysdeals' ref={scrolldiv}>
   
  
<button className='arrow-left' onClick={scrollleft}><RiArrowLeftSLine /></button>

<div className='maindealcontainer left-0'>
<div className='maindeal'>
<div className='text-white text-3xl font-semibold'>Today's Deals</div>
<div className='text-white text-md pt-[10px] font-semibold'>All With Free Shipping</div>
<button className='w-[110px] h-[40px] bg-white rounded-full font-semibold mt-[20px] hover:bg-opacity-70 cursor-pointer'>Shop Now</button>
</div>
<div className='w-[300px] h-[80px] px-[10px]'></div>
</div>
{topeightproducts.map((product,id) => (
  <Link to={`/pages/Productpage/${product.id}`} target='_blank'>
  <div className='maindealcontainer cursor-pointer' key={id}>
    <div className='maindeal ' style={{backgroundImage:`url(${product.thumbnail})`, backgroundSize: 'cover'}}>
    </div>
    <div className='w-[300px] h-[80px] px-[10px]'>
    <div className='h-[30px] mt-[5px]  hover:underline'>{product.title}</div>
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

</>
  )
}
