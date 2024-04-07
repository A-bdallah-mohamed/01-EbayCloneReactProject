import React, { useState } from 'react'
import { useProductscontext } from './productsprovider'
import Categoryhover from './categoryhover';
import { Link } from 'react-router-dom';
export default function Categorybar() {
    const { products } = useProductscontext();
    const [catishovered, setcatishovered] = useState(false)
    const [selectedcat,setselectedcat] = useState("")
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const firstTenCategories = uniqueCategories.slice(0, 12);
  return (
    <>
    <div className='categorybar relative'>
    {firstTenCategories.map(category => (
        <>
        <Link to={`/pages/categorypage/${category}`} key={category}>
        <div  className='categoryncategorybar px-[10px]' onMouseEnter={() =>{setselectedcat(category);console.log(category);setcatishovered(true)}} onMouseLeave={() =>{setcatishovered(false)}}>{category}</div>
        </Link>
        </>
      ))}
     
    </div>
      <div className='absolute'>
      {catishovered ?    ( <Categoryhover catishovered={catishovered} setcatishovered={setcatishovered} selectedcat={selectedcat}/>) : (<div></div>) }
      </div>
      </>
  )
}
