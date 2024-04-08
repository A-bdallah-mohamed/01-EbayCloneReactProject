import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Productsprovider , useProductscontext } from './productsprovider';
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Mainbanner() {


  const {products} = useProductscontext();
  const [womensjwelrythree , setwomensjwelrythree] = useState([]);
  const [panels , setpanels] = useState([]);
const [mensshirtthree , setmensshirtthree] = useState([]);
const [menshoesthree , setmenshoesthree] = useState([]);
const [skincarethree , setskincarethree] = useState([]); 
const [activepanel, setactivepanel] = useState(null);
const [activePanelIndex, setActivePanelIndex] = useState(0);
const [delayy,setdelay] = useState(2000);

const navigate = useNavigate();

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

   

    }
  },[products])
  useEffect(() => {

  const firstpanel = (

    <div className='h-full w-full'>
<div className='flex items-center px-12 pt-8'>
<div className='flex flex-col justify-between h-[350px]'>
<div>
<div className='text-5xl font-bold mr-10 whitespace  hover:cursor-pointer w-[400px]'> Your Fvourite <br /> luxury brands for <br/>less</div><div className='text-xl my-3 font-semibold'>Save 15%* with coupon code <br /> LUXDEALS15 on special items for you.</div>
<Link to={`/pages/categorypage/womens-bags`}>
<button className=' w-[170px] h-[50px] border-2 border-black rounded-full mt-6 text-xl flex items-center justify-center font-semibold hover:bg-black hover:text-white transition-all'>Find your favs</button>
</Link>
</div>
<div>
<div className='bottom-0 underline cursor-pointer hover:no-underline'>
*min. spend $300, max discount $100</div></div>
</div>
{womensjwelrythree.length > 0 ? (
<>
  <Link to={`/pages/Productpage/${womensjwelrythree[0].id}`} className='max-w-[200px] mr-4'>
    <div  className='w-[200px] h-[200px]  rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${womensjwelrythree[0].thumbnail})` , backgroundSize: 'cover'}}></div>
  </Link>

  <Link to={`/pages/Productpage/${womensjwelrythree[1].id}`} className='max-w-[200px] mr-4'><div  className='w-[200px]  h-[200px] rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${womensjwelrythree[1].thumbnail})` , backgroundSize: 'cover'}}></div></Link>

  <Link to={`/pages/Productpage/${womensjwelrythree[2].id}`} className='max-w-[200px] mr-4'><div  className='w-[200px]  h-[200px] rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${womensjwelrythree[2].thumbnail})` , backgroundSize: 'cover'}}></div></Link>


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
   <div className='text-5xl font-bold mr-10 whitespace hover:cursor-pointer w-[400px]'> Unique Pieces <br /> to trasure  <br/>forever</div><div className='text-xl my-3 font-semibold'>Save 15%* with coupon code <br /> LUXDEALS15 on special items for you.</div>
   <Link to={`/pages/categorypage/mens-shirts`}>
   <button className=' w-[170px] h-[50px] border-2 border-black rounded-full mt-6 text-xl flex items-center justify-center font-semibold hover:bg-black hover:text-white transition-all'>Shop now</button>
   </Link>
   </div>
   <div>
   <div className='bottom-0 underline cursor-pointer hover:no-underline'>
  *min. spend $300, max discount $100</div></div>
  </div>
  {mensshirtthree.length > 0 ? (
  <>
  <Link to={`/pages/Productpage/${mensshirtthree[0].id}`} className='mr-4 max-w-[200px]'>
  <div  className='w-[200px]  h-[200px]  rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${mensshirtthree[0].thumbnail})` , backgroundSize: 'cover'}}></div>
  </Link>
  <Link to={`/pages/Productpage/${mensshirtthree[1].id}`} className='mr-4 max-w-[200px]'>
  <div  className='w-[200px]  h-[200px] rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${mensshirtthree[1].thumbnail})` , backgroundSize: 'cover'}}></div>
  </Link>
  <Link to={`/pages/Productpage/${mensshirtthree[2].id}`} className='mr-4 max-w-[200px]'>
  <div  className='w-[200px] h-[200px] rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${mensshirtthree[2].thumbnail})` , backgroundSize: 'cover'}}></div>
  </Link>
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
   
  <div className='text-5xl font-bold mr-10 whitespace  hover:cursor-pointer w-[400px]'> On time, and in <br /> style </div><div className='text-xl my-3 font-semibold'>Save 15%* with coupon code <br /> LUXDEALS15 on special items for you.</div>
  <Link to={`/pages/categorypage/mens-shoes`}>
   <button className=' w-[170px] h-[50px] border-2 border-black rounded-full mt-6 text-xl flex items-center justify-center font-semibold hover:bg-black hover:text-white transition-all'>Shop now</button>
  </Link>
   </div>
   <div>
   <div className='bottom-0 underline cursor-pointer hover:no-underline'>
  *min. spend $300, max discount $100</div></div>
  </div>
  {menshoesthree.length > 0 ? (
  <>
  
  <Link to={`/pages/Productpage/${menshoesthree[0].id}`} className='mr-4 max-w-[200px]'> <div  className='w-[200px]  h-[200px]  rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${menshoesthree[0].thumbnail})` , backgroundSize: 'cover'}}></div></Link>
  <Link to={`/pages/Productpage/${menshoesthree[1].id}`} className='mr-4 max-w-[200px]'>  <div  className='w-[200px]  h-[200px] rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${menshoesthree[1].thumbnail})` , backgroundSize: 'cover'}}></div></Link>
  <Link to={`/pages/Productpage/${menshoesthree[2].id}`} className='mr-4 max-w-[200px]'> <div  className='w-[200px]  h-[200px] rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${menshoesthree[2].thumbnail})` , backgroundSize: 'cover'}}></div></Link>
 
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
   <div className='text-5xl font-bold mr-10 whitespace  hover:cursor-pointer w-[400px]'> The ultimate <br /> luxury <br/>accessory</div><div className='text-xl my-3 font-semibold'>Save 15%* with coupon code <br /> LUXDEALS15 on special items for you.</div>
   <Link to={`/pages/categorypage/skincare`}>
   <button className=' w-[170px] h-[50px] border-2 border-black rounded-full mt-6 text-xl flex items-center justify-center font-semibold hover:bg-black hover:text-white transition-all'>Shop and Save</button>
   </Link>
   </div>
   <div>
   <div className='bottom-0 underline cursor-pointer hover:no-underline'>
  *min. spend $300, max discount $100</div></div>
  </div>
  {skincarethree.length > 0 ? (
  <>
   <Link to={`/pages/Productpage/${skincarethree[0].id}`} className='mr-4 max-w-[200px]'> <div  className='w-[200px]  h-[200px]  rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${skincarethree[0].thumbnail})` , backgroundSize: 'cover'}}></div></Link>
    <Link to={`/pages/Productpage/${skincarethree[1].id}`} className='mr-4 max-w-[200px]'> <div  className='w-[200px]  h-[200px] rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${skincarethree[1].thumbnail})` , backgroundSize: 'cover'}}></div></Link>
    <Link to={`/pages/Productpage/${skincarethree[2].id}`} className='mr-4 max-w-[200px]'><div  className='w-[200px]  h-[200px] rounded-xl hover:cursor-pointer'  style={{backgroundImage: `url(${skincarethree[2].thumbnail})` , backgroundSize: 'cover'}}></div> </Link>
  
  
  </>
  ) : (<div>Loading ...</div>)}
  </div>
  </div>
  
)

const bannerpanels = [firstpanel,secondpanel,thirdpanel,fourthpanel]
setpanels(bannerpanels)

},[skincarethree]);


useEffect(() => {
  if (panels.length > 0) {
    setactivepanel(panels[0]);
  }
}, [panels,navigate]);


const handleNext = () => {
  setActivePanelIndex((prevIndex) => (prevIndex + 1) % panels.length);
  setdelay(4000);
  setTimeout(() => {
    setdelay(2000)
  }, 4000);
};

const handlePrev = () => {
  setActivePanelIndex((prevIndex) =>
    prevIndex === 0 ? panels.length - 1 : prevIndex - 1
  ); 
setdelay(4000);
setTimeout(() => {
  setdelay(2000)
}, 4000);
};


useEffect(() => {
  const intervalId = setInterval(() => {
    setActivePanelIndex((prevIndex) => (prevIndex + 1) % panels.length);

  }, delayy);

  return () => clearInterval(intervalId);


},[panels,navigate,delayy])



  return (
    <div className='mainbanner'>
<button  onClick={()=> handlePrev()} className='absolute left-[5px] top-[50%] w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center text-3xl drop-shadow-xl cursor-pointer active:translate-y-2 transition-all'><RiArrowLeftSLine /></button>
<div className='absolute flex items-center justify-center left-[44%] gap-[10px] top-[90%] drop-shadow-xl'>
{panels.map((pnl,indx) => 
  <div key={indx} className='w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center cursor-pointer' onClick={() => setActivePanelIndex(indx)}>
    {indx === activePanelIndex ? (<div className='w-[20px] h-[20px] bg-black bg-opacity-80 rounded-full'/>) : (<div></div>)}
  </div>
)}
  </div>

{panels.length > 0 && panels[activePanelIndex]}

<button onClick={()=> handleNext()} className='absolute right-[5px] top-[50%] w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center text-3xl drop-shadow-xl cursor-pointer active:translate-y-2 transition-all'><MdOutlineKeyboardArrowRight /></button>
    </div>
  )
}
