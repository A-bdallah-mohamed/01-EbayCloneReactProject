import React, { useEffect, useState } from 'react'
import { useProductscontext } from './productsprovider'
export default function Categoryhover({setcatishovered,catishovered,selectedcat}) {
const { products } = useProductscontext()
const [currentcatproducts,setcurrentcatproducts] = useState([])
useEffect(()=> {
const cateproducts = products.filter(product => product.category === selectedcat)
setcurrentcatproducts(cateproducts)
console.log(currentcatproducts)
},[products,selectedcat])
  return (

<div className='absolute w-[1215px] h-[200px] rounded-3xl bg-white drop-shadow-md z-50 top-[-6px] left-[0px] border-2 border-gray-300 flex items-center' onMouseEnter={() =>setcatishovered(true)} onMouseLeave={() =>setcatishovered(false)}>
<div className='flex flex-col px-[40px]'>
{currentcatproducts.map((product,indx)=>
<div className='w-[1100px] h-[35px]  flex items-center gap-[20px] hover:bg-slate-100 rounded-2xl hover:underline cursor-pointer' key={indx}>
  <div className='w-[25px] h-[25px] rounded-full bg-black' style={{backgroundImage: `url(${product.thumbnail})` ,backgroundSize: 'cover' }}/>
  <div>{product.title}</div>
  </div>
)}
</div>
</div>
  )
}
