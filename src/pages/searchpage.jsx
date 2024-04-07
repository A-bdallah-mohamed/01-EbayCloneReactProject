import React from 'react'
import Loginbar from '../components/loginbar'
import Search from '../components/search'
export default function Searchpage() {
  return (
    <div className='w-full flex-col flex justify-center items-center'>
    <div className='contentwidth'>
<Loginbar />
<Search />

        </div>
        </div>
  )
}
