import React from 'react'
import '../App.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



export default function Loginbar() {
  return (
<div className=' loginbar smallfont'>
<div className='flexconetnt '>
   <div>Hi! <span>Sign in </span>or <span>register</span></div><div>Daily deals</div><div>Help & Contact</div>
</div>
<div className='flexconetnt'>
   <div>Ship to</div><div>Sell</div>
   <div className='flex items-center justify-center gap-1 cursor-pointer'>Watchlist <IoIosArrowDown /></div><div className='flex items-center justify-center gap-1 cursor-pointer'>My ePAY <IoIosArrowDown /></div><div><IoMdNotificationsOutline className='text-2xl'/></div><div><MdOutlineShoppingCart className='text-2xl'/></div>
</div>
</div>
  )
}
