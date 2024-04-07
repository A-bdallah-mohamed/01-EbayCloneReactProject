import React, { useState } from 'react'
import { useProductscontext } from './productsprovider'
import whitelogo from '../assets/whitebglogo.PNG'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Search() {

const [searchtext,setsearchtext] = useState("")
const handlesearch = (e) => {
  setsearchtext(e.target.value)
  console.log(e.target.value)
}
const handleEnterPress = (e) => {
  if(e.key === 'Enter'){
    window.location.href = `/pages/searchpage/${searchtext}`;
  }

};

  return (
    <>
<div className='border'></div>
   <div className='searchbar'>
    <Link to="/">
<img src={whitelogo} className='logo'></img>
</Link>
<div className='shopbycaate'>
    Shop by <br /> category <IoIosArrowDown />
</div>
<div className='input'>
    <IoSearchOutline className='searchicon' />
<input placeholder=' Search For anything' className='realinput' value={searchtext}  onChange={(e) => handlesearch(e)} onKeyPress={(e) => handleEnterPress(e)}></input>
</div>

<button className='searchbutton' ><Link to={`/pages/searchpage/${searchtext}`}>Search</Link></button>

   </div>
   </>
  )
}
