import React, { useState , useEffect} from 'react'
import { useProductscontext } from './productsprovider'
import whitelogo from '../assets/whitebglogo.PNG'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default function Search() {
const [searchtext,setsearchtext] = useState("")
const handlesearch = (e) => {
  setsearchtext(e.target.value)
}
useEffect(() => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      document.getElementById('myButton').click();
    }
  };
  document.addEventListener('keydown', handleKeyPress);
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
}, []);
  return (
    <>
<div className='border'></div>
   <div className='searchbar'>

      <Link to=''>
<img src={whitelogo} className='logo'></img>
</Link>
<div className='shopbycaate'>
    Shop by <br /> category <IoIosArrowDown />
</div>
<div className='input'>
    <IoSearchOutline className='searchicon' />
<input placeholder=' Search For anything' className='realinput' value={searchtext}  onChange={(e) => handlesearch(e)} ></input>
</div>
<Link to={`/pages/searchpage/${searchtext}`}>
<button className='searchbutton' id='myButton'>Search</button></Link>
   </div>
   </>
  )
}
