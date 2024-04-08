import React, { useEffect, useState } from 'react'
import Loginbar from '../components/loginbar'
import Search from '../components/search'
import { useParams } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { Productsprovider , useProductscontext } from '../components/productsprovider'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
export default function Searchpage() {
  const scrolltotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
const {searchtext} = useParams();
const {products} = useProductscontext();
const [searcheditems,setsearcheditems] = useState([]);
const [brands , setbrands] = useState([])
const [categories , setcategories] = useState([])
const [selectedbrand,setselectedbrand] =useState()
const [selectedcategory,setselectedcategory] =useState()
const [pressed,setpressed] = useState(false)
useEffect(() => {
  const searched = products.filter(
    p =>
      (p.category && p.category.toLowerCase().includes(searchtext.toLowerCase())) ||
      (p.title && p.title.replace(/\s|-/g, '').toLowerCase().includes(searchtext.toLowerCase().replace(/\s|-/g, '')))  ||
      (p.brand && p.brand.toLowerCase().includes(searchtext.toLowerCase()))  || 
      (p.description && p.description.toLowerCase().includes(searchtext.toLowerCase())) )
  setsearcheditems(searched); // searched items
  const brand = [...new Set(products.map(p => p.brand))] 
  setbrands(brand); // brands
  const uniqueCategories = [...new Set(products.map(product => product.category))];
  setcategories(uniqueCategories) //categories
},[products,searchtext])
function showallproducts() {
  setsearcheditems(products)
  setselectedbrand(null)
  setselectedcategory(null)
  setpressed(true)}
useEffect(()=>{
  let newsearched = []
  if (selectedbrand && selectedcategory){
    newsearched = searcheditems.filter(p => p.brand === selectedbrand)
    const newnewsearched = newsearched.filter(p => p.category === selectedcategory)
    setsearcheditems(newnewsearched)}
if(selectedbrand && !selectedcategory){
  newsearched = products.filter(p => p.brand === selectedbrand)
  setsearcheditems(newsearched)}
if(selectedcategory && !selectedbrand){
  newsearched = products.filter(p => p.category === selectedcategory)
  setsearcheditems(newsearched)}
if (!selectedbrand && !selectedcategory){
  setsearcheditems(products)}
scrolltotop()
},[selectedbrand,selectedcategory])  
  return (<>
    <div className='w-full flex-col flex justify-center items-center'>
    <div className='contentwidth'> 
<Loginbar />
<Search />
<div className='flex w-full mt-8'>   {/* main div */}
<div className='w-[180px] h-auto  '> {/* filter div */}
<div className='w-full flex  justify-center text-3xl font-bold mb-8'>Filters</div>
<button className='w-full bg-blue-500 text-white font-bold h-12 rounded-md mb-5 hover:bg-blue-200' onClick={()=>showallproducts()}>Show all products</button>
<div>
</div>
<div className='ml-5 font-bold text-3xl mb-2 mt-3'>Brands</div>
<div className='flex flex-col ml-8 gap-2 text-blue-600 font-semibold'>
{brands.length > 0  ? (
brands.map((brand,indx) => (
  <div key={indx} className='cursor-pointer hover:underline' onClick={()=>setselectedbrand(brand)}>{brand}</div>))
) : (<div> Loading Brands ...</div>)}</div>
<div className='ml-5 font-bold text-3xl mb-2 mt-3'> Categories</div>
<div className='flex flex-col ml-8 gap-2 text-blue-600 font-semibold'>
{categories.length > 0  ? (
categories.map((categ,indx) => (
  <div key={indx} className='cursor-pointer hover:underline' onClick={()=>setselectedcategory(categ)}>{categ}</div>))
) : (<div> Loading Brands ...</div>)}</div></div>
<div className='ml-8'>    {/* products div */}
<div className='flex gap-2 mt-2 mb-12'>    {/* results count div */}
<div className='font-bold'>{searcheditems.length}</div> Results for <div className='font-bold'>
 {searcheditems === products || pressed ? (<div>All products</div>) : (<div> {searchtext}</div>)}</div> </div>
<div className='mb-5 flex gap-5'>{selectedbrand ? 
(<div className=' px-5 py-2 bg-slate-200 flex items-center justify-between rounded-full gap-5'>
  <div  className='w-auto'>{selectedbrand}</div> 
  <div className='w-[25px] rounded-full flex items-center justify-center h-[25px] bg-white cursor-pointer hover:bg-slate-300'
  onClick={()=>setselectedbrand (null)}>X</div></div>) :(<div></div>)}
 {selectedcategory ? 
(<div className=' px-5 py-2 bg-slate-200 flex items-center justify-between rounded-full gap-5'>
  <div  >{selectedcategory}</div> 
  <div className='w-[25px] rounded-full flex items-center justify-center h-[25px] bg-white cursor-pointer hover:bg-slate-300' 
onClick={()=>setselectedcategory(null)}
>X</div></div>):(<div></div>)}</div>
<div className='flex flex-wrap gap-[25px]'>
{searcheditems ?  (searcheditems.map((product,id) => (
  <div key={id} className='flex flex-col max-w-[300px]'>
  <div  className='w-[300px] h-[300px]  bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center'>
  <Link to={`/pages/Productpage/${product.id}`} target="_blank" rel="noopener noreferrer">
    <img src={product.thumbnail} className='cursor-pointer'></img>
    </Link>
    </div>
    <Link to={`/pages/Productpage/${product.id}`} target="_blank" rel="noopener noreferrer">
    <div className='cursor-pointer hover:underline ml-1 mt-2 mb-3 flex-wrap'>{product.title}</div>
    </Link>
    <div className='font-semibold text-xl'>${product.price}</div>
    <div className='text-slate-400'>%{product.discountPercentage}</div>
    <div className='text-sm'>In stock : {product.stock}</div>
  </div>
)) ) : (<div>Loading ...</div>)}</div></div></div>
        </div>
        </div>
         <div className='h-[400px] bg-gray-100 w-[full] border-t-2 border-gray-400 flex items-center justify-center mt-12'>
         <Footer />
         </div>
         </>)}