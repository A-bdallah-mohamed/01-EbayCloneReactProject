import React from 'react'
import { useContext } from 'react';
import { Productsprovider, useProductscontext } from './productsprovider'
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Todaysdeals() {
    const {products} = useProductscontext();
    const topeightproducts = products.slice(0,9)
    console.log(topeightproducts)
  return (
    <>

<div className='todaysdeals'>
   
  
<div className='arrow-left'><RiArrowLeftSLine /></div>

<div className='maindealcontainer left-0'>
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

<div className='arrow-right'><MdOutlineKeyboardArrowRight /></div>

</div>

</>
  )
}
