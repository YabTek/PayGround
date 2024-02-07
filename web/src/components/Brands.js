import React from 'react'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'

const Brands = () => {
  return (
    <div className="flex flex-col bg-[#FAFAEF] p-4 md:p-8 lg:p-12 items-center">
    <h1 className="text-center text-2xl md:text-5xl font-semibold mb-10 md:mb-24">Brands that trust PayGround</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 justify-center items-center">
      <img className="max-w-full h-auto md:max-w-none w-[300px] xl:w-[400px]" src={brand1} alt=""/>
      <img className="max-w-full h-auto md:max-w-none w-[300px] xl:w-[400px]" src={brand2} alt=""/>
      <img className="max-w-full h-auto md:max-w-none w-[300px] xl:w-[400px]" src={brand3} alt=""/>
    </div>
  </div>
  )
}

export default Brands
