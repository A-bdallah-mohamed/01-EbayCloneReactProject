import React, { useEffect, useState } from 'react'
import furniturlogo from '../assets/furniturecategory.PNG'
import { CiHeart } from "react-icons/ci";
import Similaritems from './similaritems';

export default function Product({product}) {
    const  [stars,setstars] = useState([])
  
    useEffect(() => {
        if (product?.rating) { 
          const fullStars = Math.floor(product.rating);
          const starElements = [];
      
          for (let i = 0; i < fullStars; i++) {
            starElements.push(<span key={i}>&#9733;</span>);
          }
      
          if (product.rating % 1 !== 0) {
            starElements.push(<span key="half">&#9734;</span>);
          }
      
          const remainingStars = 5 - Math.ceil(product.rating);
          for (let i = 0; i < remainingStars; i++) {
            starElements.push(<span key={`empty${i}`}>&#9734;</span>);
          }
      
          setstars(starElements);
        }
      }, [product]);
      



const [productimages,setproductimages] = useState([])
const [mainimg,setmainimg] = useState()
const [hovoredimg,sethovoredimg] = useState();
useEffect(() => {
if(product && product.images){
 setproductimages(product.images)

setmainimg(productimages[0])
 }
},[product])

const handlemouseenter = (img) => {
    sethovoredimg(img)

}
const handlemouseleave = () => {
sethovoredimg(null)
}
const setnewimg = (img) => {
    setmainimg(img)
}
  return (  
      <div className='w-full flex-col flex justify-center items-center'>
  <div className='contentwidth'>
    <div className='flex w-full mt-[30px]'>

{/*---------------1-----------------*/}

<div className='flex'>

 <div className='max-h-[450px] overflow-y-auto hide-scrollbar'>
    {productimages.length > 0 ? (
        <div className='flex flex-col gap-[20px] w-[110px] items-center justify-center py-[5px]'>
{productimages.map((image,index) => (
    <div key={index} className={mainimg === image ? `rounded-2xl outline outline-[3px] overflow-hidden w-[100px] h-[100px] flex items-center justify-center bg-slate-100` : 'rounded-2xl hover:outline hover:outline-[1px] overflow-hidden w-[100px] h-[100px] flex items-center justify-center bg-slate-100'} onMouseEnter={()=>handlemouseenter(image)} onMouseLeave={()=>handlemouseleave()} onClick={()=>setnewimg(image)} >
    <div className='text-white w-[100px] cursor-pointer '>
        <img src={image} key={index} className=' max-h-full min-w-full'></img>
    </div>
    </div>
))}
</div>  ) : (<div>Loading ...</div>)}
 </div>
 <div>
  <div className='ml-[15px] h-[450px] overflow-hidden w-[600px] bg-slate-100 flex items-center justify-center rounded-2xl'>
    {mainimg ?
     (
         hovoredimg ? (<img className='w-auto max-h-full ' src={hovoredimg}></img>) : (<img className='w-auto max-h-full ' src={mainimg}></img>)

         ) 
     : 
     (<div>Loading ...</div>)
    }
   
  </div>
</div>


</div>

{/*---------------/1-------2----------*/}
<div className='ml-[15px] flex flex-col gap-[20px]'>
    {product ? (
    <><div className=' font-bold text-3xl'>
{product.title} 
</div>
{product.rating ? (<div className='text-xl'>{stars}</div>) : (<div>Loading rating...</div>)}
<div className='text-3xl font-bold'>US ${product.price}</div>
<div className='text-md font-semibold   '>brand : {product.brand}</div>
<div className='text-md'>description : {product.description}</div>
<div className='flex flex-col gap-[15px]'>
    <button className='w-full h-[50px] rounded-full bg-blue-800 text-whiet font-bold text-white hover:bg-indigo-800'>Buy it Now</button>
    <button className='w-full h-[50px] rounded-full bg-cyan-500 text-whiet font-bold text-white hover:bg-indigo-800'>Add to cart</button>
    <button className='w-full h-[50px] rounded-full border-2 border-blue-800 text-whiet font-bold text-blue-800  flex items-center justify-center'><CiHeart />Add to watchlist</button>
</div></>) : (<div>Loading data...</div>)}


</div>

{/*----------------/2----------------*/}
</div>

  </div>
  
  </div>
  )
}
