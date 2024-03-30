import React from 'react'
import { useContext } from 'react';
import { Productsprovider, useProductscontext } from './productsprovider'
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Todaysdeals() {
    const {products} = useProductscontext();
    const topeightproducts = products.slice(0,8)
    console.log(topeightproducts)
  return (
    <>

    <div className='absolute translate-y-[500%] translate-x-[10px] z-50 w-[40px] h-[40px] bg-white rounded-full   hover:bg-opacity-40 flex items-center justify-center text-black cursor-pointer text-3xl transition-all active:translate-y-1'><RiArrowLeftSLine /></div>
<div className='todaysdeals mt-[40px] relative'>
   
  

<div className='maindealcontainer'>
<div className='maindeal'>
<div className='text-white text-3xl font-semibold'>Today's Deals</div>
<div className='text-white text-md pt-[10px] font-semibold'>All With Free Shipping</div>
<button className='w-[110px] h-[40px] bg-white rounded-full font-semibold mt-[20px] hover:bg-opacity-70'>Shop Now</button>
</div>
<div className='w-[300px] h-[80px] px-[10px]'></div>
</div>
{topeightproducts.map((product,id) => (
  <div className='maindealcontainer' key={id}>
    <div className='maindeal' style={{backgroundImage:`url(${product.thumbnail})`, backgroundSize: 'cover'}}>
    </div>
    <div className='w-[300px] h-[80px] px-[10px]'>
    <div className='h-[30px] mt-[5px]'>{product.title}</div>
    <div className='h-[25px]  flex'>
    <div className='font-bold pr-[5px]'>$ {product.price} </div>
    <div className='text-sm mt-auto text-slate-500'> %{product.discountPercentage}</div>
    </div>
    </div>
  </div>
))}


</div>
<div className='absolute translate-y-[-530%]  translate-x-[1280px] z-50 w-[40px] h-[40px] bg-white rounded-full mr-2  hover:bg-opacity-40 flex items-center justify-center text-black cursor-pointer text-3xl transition-all active:translate-y-1'><MdOutlineKeyboardArrowRight /></div>

</>
  )
}
