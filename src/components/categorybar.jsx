import React, { useState } from 'react'
import { useProductscontext } from './productsprovider'
import Categoryhover from './categoryhover';
export default function Categorybar() {
    const { products } = useProductscontext();
    const [catishovered, setcatishovered] = useState(false)
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const firstTenCategories = uniqueCategories.slice(0, 12);
  return (
    <>
    <div className='categorybar relative'>
    {firstTenCategories.map(category => (
        <>
        <div key={category} className='categoryncategorybar' onMouseEnter={() =>setcatishovered(true)} onMouseLeave={() =>setcatishovered(false)}>{category}</div>
        </>
      ))}
     
    </div>
      <div className='absolute'>
      {catishovered ?    ( <Categoryhover catishovered={catishovered} setcatishovered={setcatishovered} />) : (<div></div>) }
      </div>
      </>
  )
}
