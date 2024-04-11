import React, { useEffect } from 'react'
import Loginbar from '../components/loginbar';
import Search from '../components/search';
import Footer from '../components/footer'
import { useCartContext } from '../components/cartprovider'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Cartpage() {
  const {cart , setcart , Uniquecart , setUniquecart,totalprice} = useCartContext();
useEffect(()=> {

console.log(cart)
},[])
const onchangeselect = (e, product) => {
  const newarray = Uniquecart.map(p => {
      if (p.title === product.title) {
          return {
              ...p,
              count: e.target.value,
              price: product.price * e.target.value
          };
      }
      return p;
  });
  setUniquecart(newarray);
};

useEffect(()=> {
  console.log('onchange count',Uniquecart)
},[Uniquecart])
const removeitem = (product) => {
  const newarray = Uniquecart.filter(p => p !== product)
  const newcartarray = cart.filter(p => p.title !== product.title)
  setUniquecart(newarray)
  setcart(newcartarray)
  }
  return (
    <>
    <div className='w-full flex-col flex justify-center items-center '>
    <div className='contentwidth'> 
<Loginbar />
<Search />
<div className='text-4xl font-bold mb-12 mt-2'>Shopping Cart</div>


{Uniquecart.length > 0 ? (


<>


<div className='flex relative gap-[25px]'>


<div className='h-auto flex flex-col gap-[20px] mb-[55px] '>
{Uniquecart.map((product,id) => (
  <div className='w-[800px] h-[230px] border-2 border-gray-300 py-5 px-8 flex  gap-[20px]' key={id}>
<div className='min-w-[180px] min-h-[180px] max-w-[180px] max-h-[180px] flex items-center justify-center bg-slate-100'>
  <img src={product.thumbnail} className='w-auto max-h-[180px]'></img>
</div>
<div className='justify-between flex w-full'>
  <div className='font-semibold underline hover:text-gray-500 cursor-pointer'>{product.title}</div>
  <div className='flex h-[40px] items-center gap-2'><div>Qty</div>
  <select className='h-[40px] w-[60px] bg-slate-200 rounded-lg border-[1px] border-slate-500 px-2 focus:border-[3px] focus:border-black'
  onChange={(e)=>onchangeselect(e,product)}>
    <option>{product.count}</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  </div>
  <div className='text-xl font-semibold flex flex-col text-right justify-between'>
    <div>
    <div>USD$ {product.price}</div>
    <div className='text-sm text-slate-400'>Discount made : %{product.discountPercentage}</div>
    </div>

      <div className='text-sm font-bold underline cursor-pointer'
      onClick={()=>removeitem(product)}
      >Remove</div>

  </div>
</div>
  </div>
))}

</div>





<div className='h-auto flex justify-center w-[375px]'>
<div className=' w-[375px] bg-slate-100 h-[230px] sticky rounded-xl top-[20px] flex flex-col p-3 '>
  <div className='flex flex-col cartprices gap-1 mb-[25px]'>
<div className='w-full flex justify-between'>
  <div>Items({Uniquecart.length})</div>
  <div>US ${totalprice}</div>
</div>


<div className='w-full flex justify-between'>
  <div className='flex items-center gap-1'>Shipping <IoIosInformationCircleOutline /></div>
  <div>US $10</div>
</div>

</div>


<div className='w-full flex justify-between font-semibold text-2xl'>
  <div className='flex items-center gap-1'>Subtotal</div>
  <div>US ${totalprice + 10}</div>
</div>
<div className='w-full flex items-center justify-center mt-5'>
<button className='h-[50px] w-[90%] bg-blue-500 rounded-full text-white font-bold hover:bg-blue-600'>Go to checkout</button>
</div>
<div className='text-sm flex items-center mt-[2px]' ><BiSolidPurchaseTag />Purchase protected by <div className='ml-[3px] font-bold underline cursor-pointer hover:text-blue-500'>Epay Money Back Guarantee</div></div>
</div>
</div>
</div>
</>

): (
<div className='w-full h-[500px] flex items-center justify-center flex-col gap-[20px] mb-[40px]'>
  <div className='text-2xl font-semibold'>You don't have any items in your cart.</div>
  <div className='text-lg'>Have an account? Sign in to see your items.</div>
  <div className='flex gap-[20px]'>
<Link to='/'>
    <button className='w-[320px] h-[60px] border-[2px] border-blue-500 rounded-full text-2xl font-semibold text-blue-500 hover:bg-slate-100'>Start shopping</button>
    </Link>
    <button className='w-[320px] h-[60px] bg-blue-500 rounded-full text-2xl font-semibold text-white hover:bg-blue-600'>Sign in</button>
  </div>
</div>
)
}







</div>

   </div>
   <div className='h-[400px] bg-gray-100 w-[full] border-t-2 border-gray-400 flex items-center justify-center'>
   <Footer />
   </div>
   </>
  )
}
