import React from 'react'
import whitelogo from '../assets/whitebglogo.PNG'
import { IoIosArrowDown } from "react-icons/io";
import Smallfooter from '../components/smallfooter';
import { Link } from 'react-router-dom';
export default function Signinpage() {
  return (
<>
<div className='flex flex-col w-full  hihi justify-between'>
  <div>
<div className=' ml-[10px] flex justify-between'>
  <Link to='/'>
  <img src={whitelogo} className='w-[180px] h-auto mt-[30px]'></img></Link>
<div className='mt-[5px] mr-[8px] hover:underline cursor-pointer visited:text-purple-900'>Tell us what you think</div>
</div>
<div className='w-full flex-col flex justify-center items-center '>
    <div className='signinwidth'>

<div className='flex flex-col items-center gap-[22px]'>
    <div className='font-bold text-3xl'>Hello</div>
    <div className='text-sm'>Sign in to Epay or
    <Link to='/pages/registerpage'>
    <span className='ml-[3px]'>create an account</span></Link>
    </div>
    <input placeholder='Email or username' className='w-[100%] h-[40px] bg-slate-100 border-[1px] border-gray-400 rounded-lg
     placeholder-black placeholder:pl-[10px] px-1
     focus:placeholder-gray-500 focus:placeholder:text-[10px] focus:placeholder:translate-y-[-100%] focus:placeholder:pl-[10px] focus:bg-white
     placeholdertransition' ></input>
    <button className='w-[100%] h-[45px] bg-blue-500 rounded-3xl text-white font-bold hover:bg-blue-600'>Continue</button>
    <div className='signinor text-[12px]'>or</div>
    <button className='w-[100%] h-[45px] bg-facebook rounded-3xl text-white font-bold hover:bg-blue-800 flex items-center px-2'>
      <div>
        <img className='h-[40px] min-w-[40px]' src='https://static.vecteezy.com/system/resources/previews/023/986/999/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png'></img>
        </div>
        <div className='w-full'>Continue with Facebook</div>
        </button>
    <button className='w-[100%] h-[45px] border-[1px] border-black rounded-3xl text-gray-700 font-bold hover:bg-slate-300 flex items-center  px-2'>
        <img className='h-[35px] min-w-[35px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'></img>
        <div className='w-full'>Continue with Google</div>
        </button>
    <button className='w-[100%] h-[45px] border-[1px] border-black rounded-3xl text-gray-700 font-bold hover:bg-slate-300 flex items-center  px-3'>
         <img className='h-[35px] min-w-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png'></img>
        <div className='w-full'>Continue with Apple</div>
        </button>
        <div className='flex flex-col items-center gap-2'>
    <div className='flex gap-2'>
        <input type='checkbox'></input>
        <div>stay signed in</div>
    </div>
    <div>
    <div>Using a public or shared device?</div>
    <div>Uncheck to protect your account.</div>
    </div>
    <div><span className='flex items-center justify-center gap-2'>Learn more <IoIosArrowDown /></span></div>
    </div>
</div>
    </div>
    </div>
</div><Smallfooter /></div>
    </>
  )
}
