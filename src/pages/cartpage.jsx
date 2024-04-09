import React, { useEffect } from 'react'
import Loginbar from '../components/loginbar';
import Search from '../components/search';
import Footer from '../components/footer'
import { useCartContext } from '../components/cartprovider'

export default function Cartpage() {
  const {cart , setcart , Uniquecart , setUniquecart,totalprice} = useCartContext();
useEffect(()=> {

console.log(cart)
},[])
  return (
    <>
    <div className='w-full flex-col flex justify-center items-center '>
    <div className='contentwidth'> 
<Loginbar />
<Search />
<div className='text-4xl font-bold mb-12 mt-2'>Shopping Cart</div>



<div className='flex relative'>






<div className='h-[2000px] flex flex-col gap-[20px] mb-[55px] '>
{Uniquecart.map((product,id) => (
  <div className='w-[800px] h-[200px] border-2 border-gray-300' key={id}></div>
))}

</div>





<div className='h-[2000px] bg-slate-300 w-[200px]'>
<div className='top-0 w-[100px] bg-red-300 h-[100px] sticky'></div>
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
