import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Productsprovider , useProductscontext } from './productsprovider';
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Mainbanner() {
  
  const {products} = useProductscontext();
  const [womensjwelrythree , setwomensjwelrythree] = useState([]);
  const [panels , setpanels] = useState([]);
const [mensshirtthree , setmensshirtthree] = useState([]);
const [menshoesthree , setmenshoesthree] = useState([]);
const [skincarethree , setskincarethree] = useState([]); 
const [activepanel, setactivepanel] = useState(null);
const [activePanelIndex, setActivePanelIndex] = useState(0);



  useEffect(() => {
    if(products) {
    const womensjwelry = products.filter(product => product.category === "womens-bags")
    setwomensjwelrythree(womensjwelry.slice(0,3))

    const mensshirt = products.filter(product => product.category === "mens-shirts")
    setmensshirtthree(mensshirt.slice(0,3))


    const menshoes = products.filter(product => product.category === "mens-shoes")
    setmenshoesthree(menshoes.slice(0,3))

    
    const skincare = products.filter(product => product.category === "skincare")
    setskincarethree(skincare.slice(0,3))

    console.log(womensjwelry , mensshirt ,menshoes , skincare)

    }
  },[products])
  useEffect(() => {

  const firstpanel = (

    <div className='h-full w-full'>
<div className='flex items-center px-12 pt-8'>
<div className='flex flex-col justify-between h-[350px]'>
<div>
<div className='text-5xl font-bold mr-10 whitespace '> Your Fvourite <br /> luxury brands for <br/>less</div><div className='text-xl my-3 font-semibold'>Save 15%* with coupon code <br /> LUXDEALS15 on special items for you.</div>
<button className=' w-[170px] h-[50px] border-2 border-black rounded-full mt-6 text-xl flex items-center justify-center font-semibold hover:bg-black hover:text-white transition-all'>Find your favs</button>
</div>
<div>
<div className='bottom-0 underline cursor-pointer'>
*min. spend $300, max discount $100</div></div>
</div>
{womensjwelrythree.length > 0 ? (
<>
<div  className='w-[240px] mr-8 h-[240px]  rounded-xl'  style={{backgroundImage: `url(${womensjwelrythree[0].thumbnail})` , backgroundSize: 'cover'}}></div>
<div  className='w-[240px] mr-8 h-[240px] rounded-xl'  style={{backgroundImage: `url(${womensjwelrythree[1].thumbnail})` , backgroundSize: 'cover'}}></div>
<div  className='w-[240px] mr-8 h-[240px] rounded-xl'  style={{backgroundImage: `url(${womensjwelrythree[2].thumbnail})` , backgroundSize: 'cover'}}></div>
</>
) : (<div>Loading ...</div>)}
</div>
</div>
);


const secondpanel = (


  <div className='h-full w-full'>
  <div className='flex items-center px-12 pt-8'>
  <div className='flex flex-col justify-between h-[350px]'>
    <div>
   <div className='text-5xl font-bold mr-10 whitespace '> Unique Pieces <br /> to trasure  <br/>forever</div><div className='text-xl my-3 font-semibold'>Save 15%* with coupon code <br /> LUXDEALS15 on special items for you.</div>
   <button className=' w-[170px] h-[50px] border-2 border-black rounded-full mt-6 text-xl flex items-center justify-center font-semibold hover:bg-black hover:text-white transition-all'>Shop now</button>
   </div>
   <div>
   <div className='bottom-0 underline cursor-pointer'>
  *min. spend $300, max discount $100</div></div>
  </div>
  {mensshirtthree.length > 0 ? (
  <>
  <div  className='w-[240px] mr-8 h-[240px]  rounded-xl'  style={{backgroundImage: `url(${mensshirtthree[0].thumbnail})` , backgroundSize: 'cover'}}></div>
  <div  className='w-[240px] mr-8 h-[240px] rounded-xl'  style={{backgroundImage: `url(${mensshirtthree[1].thumbnail})` , backgroundSize: 'cover'}}></div>
  <div  className='w-[240px] mr-8 h-[240px] rounded-xl'  style={{backgroundImage: `url(${mensshirtthree[2].thumbnail})` , backgroundSize: 'cover'}}></div>
  </>
  ) : (<div>Loading ...</div>)}
  </div>
  </div>
  
)



const thirdpanel = (


  <div className='h-full w-full'>
  <div className='flex items-center px-12 pt-8'>
  <div className='flex flex-col justify-between h-[350px]'>
    <div>
   <div className='text-5xl font-bold mr-10 whitespace '> On time, and in <br /> style </div><div className='text-xl my-3 font-semibold'>Save 15%* with coupon code <br /> LUXDEALS15 on special items for you.</div>
   <button className=' w-[170px] h-[50px] border-2 border-black rounded-full mt-6 text-xl flex items-center justify-center font-semibold hover:bg-black hover:text-white transition-all'>Shop now</button>
   </div>
   <div>
   <div className='bottom-0 underline cursor-pointer'>
  *min. spend $300, max discount $100</div></div>
  </div>
  {menshoesthree.length > 0 ? (
  <>
  <div  className='w-[240px] mr-8 h-[240px]  rounded-xl'  style={{backgroundImage: `url(${menshoesthree[0].thumbnail})` , backgroundSize: 'cover'}}></div>
  <div  className='w-[240px] mr-8 h-[240px] rounded-xl'  style={{backgroundImage: `url(${menshoesthree[1].thumbnail})` , backgroundSize: 'cover'}}></div>
  <div  className='w-[240px] mr-8 h-[240px] rounded-xl'  style={{backgroundImage: `url(${menshoesthree[2].thumbnail})` , backgroundSize: 'cover'}}></div>
  </>
  ) : (<div>Loading ...</div>)}
  </div>
  </div>
  
)




const fourthpanel = (


  <div className='h-full w-full'>
  <div className='flex items-center px-12 pt-8'>
  <div className='flex flex-col justify-between h-[350px]'>
    <div>
   <div className='text-5xl font-bold mr-10 whitespace '> The ultimate <br /> luxury <br/>accessory</div><div className='text-xl my-3 font-semibold'>Save 15%* with coupon code <br /> LUXDEALS15 on special items for you.</div>
   <button className=' w-[170px] h-[50px] border-2 border-black rounded-full mt-6 text-xl flex items-center justify-center font-semibold hover:bg-black hover:text-white transition-all'>Shop and Save</button>
   </div>
   <div>
   <div className='bottom-0 underline cursor-pointer'>
  *min. spend $300, max discount $100</div></div>
  </div>
  {skincarethree.length > 0 ? (
  <>
  <div  className='w-[240px] mr-8 h-[240px]  rounded-xl'  style={{backgroundImage: `url(${skincarethree[0].thumbnail})` , backgroundSize: 'cover'}}></div>
  <div  className='w-[240px] mr-8 h-[240px] rounded-xl'  style={{backgroundImage: `url(${skincarethree[1].thumbnail})` , backgroundSize: 'cover'}}></div>
  <div  className='w-[240px] mr-8 h-[240px] rounded-xl'  style={{backgroundImage: `url(${skincarethree[2].thumbnail})` , backgroundSize: 'cover'}}></div>
  </>
  ) : (<div>Loading ...</div>)}
  </div>
  </div>
  
)

const bannerpanels = [firstpanel,secondpanel,thirdpanel,fourthpanel]
setpanels(bannerpanels)

},[products]);


useEffect(() => {
  if (panels.length > 0) {
    setactivepanel(panels[0]);
  }
}, [panels]);


const handleNext = () => {
  setActivePanelIndex((prevIndex) => (prevIndex + 1) % panels.length);
};

const handlePrev = () => {
  setActivePanelIndex((prevIndex) =>
    prevIndex === 0 ? panels.length - 1 : prevIndex - 1
  ); 
};
  return (
    <div className='mainbanner'>
<button  onClick={()=> handlePrev()} className='absolute left-[5px] top-[50%] w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center text-3xl drop-shadow-xl cursor-pointer active:translate-y-2 transition-all'><RiArrowLeftSLine /></button>
<div className='absolute flex items-center justify-center left-[44%] gap-[10px] top-[90%] drop-shadow-xl'>
{panels.map((pnl,indx) => 
  <div key={indx} className='w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center'>
    {indx === activePanelIndex ? (<div className='w-[20px] h-[20px] bg-black bg-opacity-80 rounded-full'/>) : (<div></div>)}
  </div>
)}
  </div>

{panels.length > 0 && panels[activePanelIndex]}

<button onClick={()=> handleNext()} className='absolute right-[5px] top-[50%] w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center text-3xl drop-shadow-xl cursor-pointer active:translate-y-2 transition-all'><MdOutlineKeyboardArrowRight /></button>
    </div>
  )
}
