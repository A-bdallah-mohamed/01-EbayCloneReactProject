import React from 'react'
import Header from '../components/header';
import Mainbanner from '../components/mainbanner';
import Explore from '../components/explore';
import Todaysdeals from '../components/todaysdeals';
import Luxdeals from '../components/luxdeals';
import Footer from '../components/footer';
import '../App.css';
import Categorybar from '../components/categorybar';
import Loginbar from '../components/loginbar';
import Search from '../components/search';
export default function Homepage() {
  return (
    <>
    <div className='w-full flex-col flex justify-center items-center'>
    <div className='contentwidth'>
    <Loginbar />
       <Search />
       <Categorybar />
    <Mainbanner />
    <Explore />
    <Todaysdeals   />
    <Luxdeals />
    </div>
  
    </div>
    <div className='h-[400px] bg-gray-100 w-[full] border-t-2 border-gray-400 flex items-center justify-center'>
    <Footer />
    </div>
    </>
  )
}
