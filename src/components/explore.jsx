import React from 'react'
import { useProductscontext } from './productsprovider'
import smartphonescategory from '../assets/smartphonescategory.PNG'
import labtopcategory from '../assets/labtopscategory.PNG'
import fragrancecategory from '../assets/fragrancescategory.PNG'
import groceriescategory from '../assets/groceriescategory.PNG'
import homedecorationcategory from '../assets/homedecorationcategory.PNG'
import furniturecategory from '../assets/furniturecategory.PNG'
import skincatecategory from '../assets/skincarecategory.PNG'

export default function Explore() {

  return (
<div className='explore mt-[45px] pb-[45px]'>
<div className='flex justify-between'><div className='text-xl font-bold'>Explore popular categories</div><div className='underline text-sm cursor-pointer'>See all</div></div>
<div className='flex  gap-[15px] items-center justify-center mt-[55px]'>


    <div className='flex flex-col items-center justify-center hover:bg-slate-100 rounded-xl cursor-pointer'>
    <div className='w-[150px] h-[150px] rounded-full  cateimg' style={{ backgroundImage: `url(${smartphonescategory})`, backgroundSize: 'cover' }}></div>
  <div className='font-semibold  catetext'>SmartPhones</div>
  </div>
  
  <div className='flex flex-col items-center justify-center hover:bg-slate-100 rounded-xl cursor-pointer'>
    <div className='w-[150px] h-[150px] rounded-full  cateimg' style={{ backgroundImage: `url(${labtopcategory})`, backgroundSize: 'cover' }}></div>
  <div className='font-semibold  catetext'> Labtops</div>
  </div>


  <div className='flex flex-col items-center justify-center hover:bg-slate-100 rounded-xl cursor-pointer'>
    <div className='w-[150px] h-[150px] rounded-full  cateimg' style={{ backgroundImage: `url(${fragrancecategory})`, backgroundSize: 'cover' }}></div>
  <div className='font-semibold  catetext'> Fragrance</div>
  </div>
  
  <div className='flex flex-col items-center justify-center hover:bg-slate-100 rounded-xl cursor-pointer'>
    <div className='w-[150px] h-[150px] rounded-full   cateimg' style={{ backgroundImage: `url(${groceriescategory})`, backgroundSize: 'cover' }}></div>
  <div className='font-semibold   catetext'> Groceries</div>
  </div>
  
  <div className='flex flex-col items-center justify-center hover:bg-slate-100 rounded-xl cursor-pointer'>
    <div className='w-[150px] h-[150px] rounded-full  cateimg' style={{ backgroundImage: `url(${homedecorationcategory})`, backgroundSize: 'cover' }}></div>
  <div className='font-semibold  catetext'> Furniture</div>
  </div>
  
  <div className='flex flex-col items-center justify-center hover:bg-slate-100 rounded-xl cursor-pointer'>
    <div className='w-[150px] h-[150px] rounded-full  cateimg' style={{ backgroundImage: `url(${furniturecategory})`, backgroundSize: 'cover' }}></div>
  <div className='font-semibold  catetext'> Home-Decoration</div>
  </div>
  
  <div className='flex flex-col items-center justify-center hover:bg-slate-100 rounded-xl cursor-pointer'>
    <div className='w-[150px] h-[150px] rounded-full  cateimg' style={{ backgroundImage: `url(${skincatecategory})`, backgroundSize: 'cover' }}></div>
  <div className='font-semibold  catetext'>Skin care</div>
  </div>
</div>
</div>
  )
}
