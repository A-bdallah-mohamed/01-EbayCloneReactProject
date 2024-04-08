import React, { useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useCartContext } from '../components/cartprovider'
export default function Cartpage() {
  const {cart , setcart} = useCartContext();
useEffect(()=> {
setcart([5,6,7])
console.log(cart)
},[])
  return (
    <>
    <div className='w-full flex-col flex justify-center items-center'>
    <div className='contentwidth'> 
      <Header />
</div>

   </div>
   <div className='h-[400px] bg-gray-100 w-[full] border-t-2 border-gray-400 flex items-center justify-center'>
   <Footer />
   </div>
   </>
  )
}
