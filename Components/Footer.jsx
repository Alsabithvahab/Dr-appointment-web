import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
<img className='mb-5 w-40' src={assets.logo} alt="" />
<p className='w-full md:w-2/3 text-gray-600 leading-6 '>With prescripto, you can now make things happen in close to no time. Right away, you select between different homes and mix and match the one you dig with other features and layouts that prescripto has available. And those, by the way, are very many.</p>
            </div>
            <div>
<p className='text-xl font-medium mb-5'>COMPANY</p>
<ul className='flex flex-col gap-2 text-gray-600 '>
<li>Home</li>
<li>About us</li>
<li>Contact us</li>
<li>Privacy policy</li>


</ul>
            </div>
            <div>
<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
<ul className='flex flex-col gap-2 text-gray-600 '>
    <li>+91-1234567890</li>
    <li>prescripto@gmail.com</li>
</ul>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto-All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer