import React from 'react'
import { useProductscontext } from './productsprovider'
import whitelogo from '../assets/whitebglogo.PNG'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";


export default function Search() {


  return (
    <>
<div className='border'></div>
   <div className='searchbar'>
<img src={whitelogo} className='logo'></img>
<div className='shopbycaate'>
    Shop by <br /> category <IoIosArrowDown />
</div>
<div className='input'>
    <IoSearchOutline className='searchicon' />
<input placeholder=' Search For anything' className='realinput'></input>
</div>
<button className='searchbutton'>Search</button>
   </div>
   </>
  )
}
