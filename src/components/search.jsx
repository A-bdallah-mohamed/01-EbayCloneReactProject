import React from 'react'
import { useProductscontext } from './productsprovider'

export default function Search() {
    const { products } = useProductscontext();
  return (
    <div>
    <div>Search</div>
    {products.map((product,id) => (
        <div key={id}>{product.title}</div>
    ))}
    </div>
  )
}
