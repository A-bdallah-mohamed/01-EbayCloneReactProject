import React from 'react'
import { useProductscontext } from './productsprovider'
export default function Categorybar() {
    const { products } = useProductscontext();
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const firstTenCategories = uniqueCategories.slice(0, 12);
  return (
    <div className='categorybar'>
    {firstTenCategories.map(category => (
        <div key={category} className='categoryncategorybar'>{category}</div>
      ))}
    </div>
  )
}
