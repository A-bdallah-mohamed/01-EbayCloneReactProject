import React from 'react'
import { useProductscontext } from './productsprovider'

export default function Search() {
    const { products } = useProductscontext();
  return (
   <div className='searchbar'>
Searchbar
   </div>
  )
}
