import React from 'react'
import Loginbar from '../components/loginbar'
import Search from '../components/search'
import Categorybar from '../components/categorybar'
import Header from '../components/header'
import Footer from '../components/footer'
import Mainbanner from '../components/mainbanner'
import Luxdeals from '../components/luxdeals'
export default function Categorypage() {
  return (
    <>
    <div className='w-full flex-col flex justify-center items-center'>
    <div className='contentwidth'>
    <Loginbar />
       <Search />
       <Categorybar />
    </div>
  
    </div>
    <div className='h-[400px] bg-gray-100 w-[full] border-t-2 border-gray-400 flex items-center justify-center'>
    <Footer />
    </div>
    </>
  )
}
