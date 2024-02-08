import React from 'react'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'

const Brands = () => {
  return (
    <div class="flex flex-col bg-[#FAFAEF] p-4 md:p-8 lg:p-12 items-center">
    <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 md:mb-16 lg:mb-20">Brands that trust PayGround</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 justify-center items-center">
      <img class="max-w-full h-auto md:max-w-none w-[300px] xl:w-[400px]" src={brand1} alt=""/>
      <img class="max-w-full h-auto md:max-w-none w-[300px] xl:w-[400px]" src={brand2} alt=""/>
      <img class="max-w-full h-auto md:max-w-none w-[300px] xl:w-[400px]" src={brand3} alt=""/>
    </div>
  </div>
  )
}

export default Brands
