import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav class="flex justify-between  text-2xl font-semibold p-6 bg-[#FAFAEF]">
        <div class="flex gap-20">
          <div class="flex gap-2">
            <img class="h-14 w-14" src={logo} alt=""/> 
          <h1 class="text-[50px]">payground</h1>
          </div>
          <button class="hover:text-[#1306AC] hidden xl:block">I'm a patient</button>
          <button class="hover:text-[#1306AC] hidden xl:block">I'm a medical provider</button>
          <button class="hover:text-[#1306AC] hidden 2xl:block">More</button>
        </div>
        <div class="flex">
          <button class="px-6 py-4 text-md text-[#0E28AC] mr-10 border border-[#0E28AC] rounded-xl hover:bg-[#DDF8F7] hidden sm:block">Log in</button>
          <button class="px-6 py-4 bg-[#0A1A6F] rounded-xl text-white hover:bg-[#001817] hidden lg:block">Get PayGround</button>
        </div> 
      
    </nav>
  )
}

export default Navbar
