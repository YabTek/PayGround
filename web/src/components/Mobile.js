import React from 'react'
import phone from '../assets/phone.png'
import apple from '../assets/apple.png'
import playstore from '../assets/playstore.png'

const Mobile = () => {
  return (
    <div class="w-full flex-col xl:flex xl:flex-row xl:justify-around md:mb-0 bg-[#FAFAEF] p-4 md:p-8 lg:p-8">
      <img class="h-auto md:h-[480px] lg:h-[600px] xl:h-[760px] mx-auto md:mx-0 md:mr-8 lg:ml-12 lg:mr-12 my-2 md:my-4" src={phone} alt=""/>
      <div class="flex flex-col justify-center xl:ml-12">
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-4 md:mb-8 lg:mb-12">Pay bills on your time with one simple login</h1>
        <p class="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 lg:mb-12">Easily manage payments to multiple providers and reduce stress around medical bills.</p>
        <div class="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
          <button class="flex text-white bg-black py-2 px-6 rounded-lg items-center">
            <img class="h-8 w-8 md:h-10 md:w-10 mr-2" src={apple} alt=""/>
            <div>
              <p class="text-sm md:text-base">Download on the</p>
              <h2 class="text-base md:text-2xl font-semibold">App Store</h2>
            </div>
          </button>
          <button class="flex text-white bg-black py-2 px-[34px] px-6 rounded-lg items-center">
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
