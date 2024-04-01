import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

export default function Footer() {
  return (
    <div className='w-[1360px] h-full grid grid-cols-5 px-[150px] py-[40px]'>
<div className='flex flex-col text-gray-500 text-sm gap-[5px]'>
    <p className='font-bold text-black'>Buy</p>
    <p className=''>Registration</p>
    <p>Epay Money Back Guarantee</p>
    <p>Bidding & buying help</p>
    <p>Stores</p>
</div>
<div className='flex flex-col text-gray-500 text-sm gap-[40px]'>
<div className='flex flex-col text-gray-500 text-sm gap-[5px]'>

    <p className='font-bold text-black'>Sell</p>
    <p>Start selling</p>
    <p>Learn to sell</p>
    <p>Affiliates</p>
</div>
    <div className='flex flex-col text-gray-500 text-sm gap-[5px]'>

    <p className='font-bold text-black'>Tools & apps</p>
    <p>Developers</p>
    <p>Security center</p>
    <p>Site map</p>
</div>
</div>
<div className='flex flex-col text-gray-500 text-sm gap-[5px]'>
    <p className='font-bold text-black'>Stay connected</p>
    <p>Epay's Blogs</p>
    <p  className='flex items-center gap-[5px]'><FaFacebookSquare /> Facebook</p>
    <p  className='flex items-center gap-[5px]'><IoLogoTwitter />Twitter</p>

</div>

<div className='flex flex-col text-gray-500 text-sm gap-[5px]'>
    <p className='font-bold text-black'>About Epay</p>
    <p>Epay's Blogs</p>
    <p>Company info</p>
    <p>News</p>
    <p>Investors</p>
    <p>Careers</p>
    <p>Government relations</p>
    <p>Advertise with us</p>
    <p>Policies</p>
    <p>Verified Rights Owner (VeRO) Program</p>
</div>

<div className='flex flex-col text-gray-500 text-sm gap-[40px]'>
<div className='flex flex-col text-gray-500 text-sm gap-[5px]'>

    <p className='font-bold text-black'>Help & Contact</p>
    <p>Seller Information Center</p>
    <p>Contact us</p>
</div>
    <div className='flex flex-col text-gray-500 text-sm gap-[5px]'>

    <p className='font-bold text-black'>Community</p>
    <p>Announcements</p>
    <p>Discussion boards</p>
    <p>eBay Giving Works</p>
</div>
<div className='flex flex-col text-gray-500 text-sm gap-[5px]'>

<p className='font-bold text-black'>Epay Sites</p>
<select>
    <option>Uninted States</option>
    <option>Argentina</option>
    <option>Australia</option>
    <option>Belgium</option>
    <option>Brazil</option>
    <option>France</option>
    <option>Germany</option>
    <option>Japan</option>
    <option>South Korea</option>
</select>
</div>
</div>
    </div>
  )
}
