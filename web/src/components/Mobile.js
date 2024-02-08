import React from 'react'
import phone from '../assets/phone.png'
import apple from '../assets/apple.png'
import playstore from '../assets/playstore.png'

const Mobile = () => {
  return (
    <div class="w-full flex-col sm:flex sm:flex-row sm:justify-around md:mb-0 bg-[#FAFAEF] md:p-4 lg:p-8">
      <img class="h-auto sm:h-[450px] md:h-[600px] lg:h-[600px] xl:h-[760px] mx-auto md:mx-0 md:mr-8 lg:ml-12 lg:mr-12 my-2 md:my-4" src={phone} alt=""/>
      <div class="flex flex-col justify-center items-center sm:items-start xl:ml-12">
        <h1 class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-start font-semibold leading-tight mb-4 md:mb-8 lg:mb-12">Pay bills on your time with one simple login</h1>
        <p class="text-md md:text-xl lg:text-2xl text-center sm:text-start mb-4 md:mb-8 lg:mb-12">Easily manage payments to multiple providers and reduce stress around medical bills.</p>
        <div class="flex flex-col lg:flex-row items-center justify-center md:items-center gap-2 md:gap-4">
  <button class="flex text-white bg-black py-2 px-6 md:px-8 rounded-lg items-center w-full md:w-auto">
    <img class="h-8 w-8 md:h-10 md:w-10 mr-2" src={apple} alt=""/>
    <div>
      <p class="text-sm md:text-base">Download on the</p>
      <h2 class="text-base md:text-2xl font-semibold">App Store</h2>
    </div>
  </button>
  <button class="flex text-white bg-black py-2 px-6 md:px-8 rounded-lg items-center w-full md:w-auto mt-2 md:mt-0">
    <img class="h-8 w-8 md:h-10 md:w-10 mr-2" src={playstore} alt=""/>
    <div>
      <p class="text-sm md:text-base">GET IT ON</p>
      <h2 class="text-base md:text-2xl font-semibold">Google Play</h2>
    </div>
  </button>
</div>

      </div>
    </div>
  )
}

export default Mobile
