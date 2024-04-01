import React from 'react'

export default function Categoryhover({setcatishovered,catishovered}) {
  return (
<div className='absolute w-[1215px] h-[200px] rounded-3xl bg-white drop-shadow-md z-50 top-[-5px] left-[0px] border-2 border-gray-300' onMouseEnter={() =>setcatishovered(true)} onMouseLeave={() =>setcatishovered(false)}>

</div>
  )
}
