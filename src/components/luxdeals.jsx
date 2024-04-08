import React, { useEffect } from 'react'
import { useProductscontext } from './productsprovider'
import { Link } from 'react-router-dom';
export default function Luxdeals() {
  const { products } = useProductscontext();
  const luxproduct = products[80]
  useEffect(()=> {


  },[luxproduct])

    return (
    <div className='luxdealsbanner flex p-11 items-center mb-[40px]'>
        <div className='flex flex-col mr-[150px]'>
        <div className='text-5xl font-semibold'>Luxury <br /> accessories, <br /> Savings you'll love</div>
        <div className='mt-[25px]'>Save 15%* now on luxuries.</div>
        <button className='luxbutton'>CODELUXDEALS15</button>
        <div className='mt-[25px] underline cursor-pointer hover:no-underline'>*min. spend $300, max discount $100</div>
        </div>
       {luxproduct ? (
        <Link to={`/pages/productpage/${luxproduct.id}`}>
        <div  className='w-[400px] h-[400px] rounded-xl cursor-pointer'  style={{backgroundImage: `url(${luxproduct.thumbnail})` , backgroundSize: 'cover'}}></div>
        </Link>
       ) : (<div>loading</div>)}
  
      
      
<div>
    <div className='flex justify-center flex-col items-center'><div className='text-[100px] font-bold'>-15%*</div><div className='text-[40px] font-bold'>LUXDEALS15</div></div>
    <div className='ml-[30px] mt-[35px] text-xl font-semibold'>Epay money back <br /> Guarantee</div>
</div>
    </div>
  )
}
