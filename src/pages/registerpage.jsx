import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Smallfooter from '../components/smallfooter'
import whitelogo from '../assets/whitebglogo.PNG'
export default function Registerpage() {
    const [bussinessactive,setbussinessactive] = useState(false)
    const [personalactive,setpersonalactive] = useState(true)
  return (
    <>
<div className='flex flex-col w-full  hihi justify-between'>
  <div>
<div className=' flex justify-between items-center px-[10px] mt-[15px]'>
  <Link to='/'>
  <img src={whitelogo} className='w-[180px] h-auto'></img></Link>
<div className='flex gap-2'><div className='text-gray-500'>Already have an account?</div>
<Link to='/pages/signinpage'>
<div className='underline cursor-pointer'> Sign in</div></Link>
</div>
</div>
<div className='w-full flex-col flex justify-center items-center '>
    <div className='regwidth'>
<div className='flex flex-col  gap-[22px]'>
    <div className='font-bold text-3xl'>Create an account</div>
   <div className='w-full border-[1px] border-black h-[40px] rounded-full flex items-center px-[5px] gap-1'>
<div className={`w-[50%]  rounded-full  h-[90%] flex items-center justify-center cursor-pointer ${personalactive ? 'bg-black text-white' : ''}`} 
onClick={()=>{setpersonalactive(true);setbussinessactive(false)}}
>Personal</div>
<div className={`w-[50%]  rounded-full  h-[90%] flex items-center justify-center cursor-pointer ${bussinessactive ? 'bg-black text-white' : ''}`}
onClick={()=>{setpersonalactive(false);setbussinessactive(true)}}
>Business</div>
   </div>
{personalactive ? ( <>  
<div className='gird grid-cols-2 grid-rows-3 gap-2'>
    <div className='flex flex-col gap-[20px]'>
    <div className='flex gap-[10px]'>
 <input placeholder='First name' className='w-[240px] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
     placeholder-black placeholder:pl-[10px] px-1
     focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
     placeholdertransition' ></input>
     <input placeholder='Last name' className='w-[240px] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
     placeholder-black placeholder:pl-[10px] px-1
     focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
     placeholdertransition' ></input>
     </div>
     <input placeholder='Email' className=' w-[100%] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
     placeholder-black placeholder:pl-[10px] px-1
     focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
     placeholdertransition' ></input>
     <input placeholder='Password' className=' w-[100%] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
     placeholder-black placeholder:pl-[10px] px-1
     focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
     placeholdertransition' ></input>
     </div>
     <div className='text-sm mt-[25px] text-gray-500'>By selecting<b> Create personal account</b>, you agree to our <u  className='cursor-pointer'>User Agreement</u> and acknowledge reading our <u className='cursor-pointer'>User Privacy Notice.</u></div>
    </div>
    <button className='w-[100%] h-[45px] bg-blue-500 rounded-3xl text-white font-bold hover:bg-blue-600'>Create personal account</button>
    <div className='signinor text-[12px]'>or continue with</div>
    <div className='flex gap-[0.5%]'>
    <button className='w-[33%] h-[45px] border-[1px] border-black rounded-3xl text-gray-700 font-bold hover:bg-blue-800 flex items-center px-2'>
      <div>
        <img className='h-[40px] min-w-[40px]' src='https://static.vecteezy.com/system/resources/previews/023/986/999/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png'></img>
        </div>
        <div className='w-full'>Facebook</div>
        </button>
    <button className='w-[33%] h-[45px] border-[1px] border-black rounded-3xl text-gray-700 font-bold hover:bg-slate-300 flex items-center  px-2'>
        <img className='h-[35px] min-w-[35px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'></img>
        <div className='w-full'>Google</div>
        </button>
    <button className='w-[33%] h-[45px] border-[1px] border-black rounded-3xl text-gray-700 font-bold hover:bg-slate-300 flex items-center  px-3'>
         <img className='h-[35px] min-w-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png'></img>
        <div className='w-full'>Apple</div>
        </button>
        </div></>) : (<>  
        <div>Continue to register as a<b> business or nonprofit</b>, or if you plan to sell a large number of goods.</div>
        <div className='gird grid-rows-4 gap-2'>
            <div className='flex flex-col gap-[20px]'>
       
         <input placeholder='Business name' className='w-[100%] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
             placeholder-black placeholder:pl-[10px] px-1
             focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
             placeholdertransition' ></input>
                <input placeholder='Business Email' className=' w-[100%] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
             placeholder-black placeholder:pl-[10px] px-1
             focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
             placeholdertransition' ></input>
        <input placeholder='Password' className='w-[100%] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
             placeholder-black placeholder:pl-[10px] px-1
             focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
             placeholdertransition' ></input>
             <input placeholder='Where is your business registered?' className=' w-[100%] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
             placeholder-black placeholder:pl-[10px] px-1
             focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
             placeholdertransition' ></input>
             </div>
             <div className='text-sm mt-[25px] flex gap-3'>
                <input type='checkbox'></input><div>I’m only interested in buying on Epay for now</div>
             </div>
             <div className='text-sm mt-[25px] text-gray-500'>By selecting<b> Create personal account</b>, you agree to our <u  className='cursor-pointer'>User Agreement</u> and acknowledge reading our <u className='cursor-pointer'>User Privacy Notice.</u></div>
            </div>
            <button className='w-[100%] h-[55px] bg-blue-500 rounded-3xl text-white font-bold hover:bg-blue-600'>Create business account</button>
         </>)}
</div>
    </div>
    </div>
    </div><Smallfooter /></div>
    </>
  )
}
