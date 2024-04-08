import React, { useEffect, useState } from 'react'
import { useCartContext } from './cartprovider'
import { CiTrash } from "react-icons/ci";

export default function Carthover({hovered,sethovered}) {
    const {cart,setcart ,Uniquecart , setUniquecart} = useCartContext()

 
useEffect(()=>{
    if(cart.length > 0){
        const newarray = [...new Set(cart.map(product => product))];
        const newarraywithcount = newarray.map(product  => ({
            brand: product.brand,
            category: product.category,
            description: product.description,
            discountPercentage: product.discountPercentage,
            id: product.id,
            images: product.images,
            price: product.price,
            rating: product.rating,
            thumbnail: product.thumbnail,
            stock: product.stock,
            title: product.title,
            count: cart.filter(p => p === product).length
        }))
        setUniquecart(newarraywithcount)
        console.log(Uniquecart)
    }
},[])
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
                <div key={id} className='min-h-[100px] flex flex-col relative'>
                    <div className='flex'>
<div className='min-w-[90px] max-w-[90px] min-h-full max-h-full flex items-center justify-center bg-slate-200'><img src={product.thumbnail}></img></div>
<div className='flex flex-col'>
<div className='text-[15px] px-2'>{product.title}</div>
<div className='text-[18px] font-bold px-2'>$USD {product.price}</div>
<div>Quantity: {product.count}</div>
</div>
                    </div>
                    <div className='absolute right-2 bottom-2 cursor-pointer'><CiTrash /></div>
                </div>
               ))}
             </div>
         </div>
      
         <div className='flex flex-col gap-[10px]'>
     
            <div className='absolute bottom-[120px] w-full bg-slate-100 left-0 px-5 h-[40px] flex items-center border-2 border-gray-300 text-xl justify-between'>
                <div className='font-semibold'>Total</div>
                <div>$100</div>
                </div>
             <button disabled={cart.length === 0} className='w-full h-[40px] flex items-center justify-center bg-gray-300 text-white'>Checkout</button>
             <button disabled={cart.length === 0} className='w-full h-[40px] flex items-center justify-center bg-gray-300 text-blue-500'>View cart</button>
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
    <button disabled={cart.length === 0} className='w-full h-[40px] flex items-center justify-center bg-gray-300 text-blue-500'>View cart</button>
</div>
</>
)}
    </div>
  )
}
