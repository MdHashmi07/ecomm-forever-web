import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} alt="logo" className='w-32 mb-5' />
        <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius totam et quibusdam! Ullam doloribus, voluptatibus ipsum aliquid nam sit harum corporis tempora facilis repudiandae reiciendis. Consectetur ad laudantium perferendis?
        </p>
        </div>
        <div>
            <p className='text-xl font-meduim mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl fonnt-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-222-346-9540</li>
                <li>connntact@foreveryou.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
