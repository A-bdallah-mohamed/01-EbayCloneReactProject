import React, { useEffect, useState } from 'react'
import { useCartContext } from './cartprovider'
import { CiTrash } from "react-icons/ci";
import { Link } from 'react-router-dom';
export default function Carthover({hovered,sethovered}) {
    const {cart,setcart ,Uniquecart , setUniquecart,totalprice} = useCartContext()

useEffect(() => {
    console.log('total is',totalprice)
},[totalprice])

const removeitem = (product) => {
const newarray = Uniquecart.filter(p => p !== product)
const newcartarray = cart.filter(p => p.title !== product.title)
setUniquecart(newarray)
setcart(newcartarray)
}
  return (
    <div className='w-[300px] h-auto  border-2 border-gray-300 bg-white p-5 flex flex-col ' 
    onMouseEnter={()=>sethovered(true)}
    onMouseLeave={()=>sethovered(false)}
    >
        {Uniquecart.length > 0 ? (
         <>
         <div className={`flex flex-col relative ${cart.length > 0 ? ' mb-[50px]' : ' mb-[80px]'}`}>
             <div className='text-xl font-bold'>Shopping cart</div>
             <div className='mt-[20px] overflow-y-auto h-auto max-h-[300px] mb-8 gap-[20px] flex flex-col'>
               {Uniquecart.map((product , id) => (
                <div key={id} className='min-h-[100px] max-h-[100px] flex flex-col relative'>
                    <div className='flex'>
<div className='min-w-[90px] max-w-[90px] min-h-full max-h-full flex items-center justify-center bg-slate-200'><img src={product.thumbnail} className='max-h-[100px]'></img></div>
<div className='flex flex-col'>
<div className='text-[15px] px-2'>{product.title}</div>
<div className='text-[18px] font-bold px-2'>$USD {product.price}</div>
<div>Quantity: {product.count}</div>
</div>
                    </div>
                    <div className='absolute right-2 bottom-2 cursor-pointer' ><CiTrash onClick={()=>removeitem(product)} /></div>
                </div>
               ))}
             </div>
         </div>
      
         <div className='flex flex-col gap-[10px]'>
     
            <div className='absolute bottom-[120px] w-full bg-slate-100 left-0 px-5 h-[40px] flex items-center border-2 border-gray-300 text-xl justify-between'>
                <div className='font-semibold'>Total</div>
                <div className='text-[18px] font-bold px-2'>$ {totalprice}</div>
                </div>
            
         </div>
         
<div className='flex flex-col gap-2'>
    <button disabled={cart.length === 0} className='w-full h-[40px] flex items-center justify-center bg-gray-300 text-white'>Checkout</button>
    <Link to='/pages/cartpage'>
    <button disabled={cart.length === 0} className='w-full h-[40px] flex items-center justify-center bg-gray-300 text-blue-500'>View cart</button></Link>

</div>
         </>
        ) : (
            <>
<div className='flex flex-col mb-[40px]'>
    <div className='text-xl font-bold'>Your cart is empty</div>
    <div className='text-sm font-semibold'>Time to start shopping!</div>
</div>

<div className='flex flex-col gap-2'>
    <button disabled={cart.length === 0} className='w-full h-[40px] flex items-center justify-center bg-gray-300 text-white'>Checkout</button>
    <Link to='/pages/cartpage'>
    <button disabled={cart.length === 0} className='w-full h-[40px] flex items-center justify-center bg-gray-300 text-blue-500'>View cart</button></Link>

</div>
</>
)}
    </div>
  )
}
