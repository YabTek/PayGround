import React from 'react'
import paid from '../assets/paid.png'

const Payment = () => {
  return (
    <div class="flex flex-col w-full bg-[#524BA7] text-white rounded-lg items-center ">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold pb-5 py-24 text-center">Healthcare payments made easy.</h1>
        <p class="text-lg lg:text-2xl pb-12 text-center">A secure way to manage, track, and pay–so you can focus on the good stuff.</p>
        <button class="px-10 py-6 mb-24 bg-[#FFFEED] hover:bg-[#E7E261] text-[#524BA7] text-2xl rounded-xl font-semibold">Get PayGround</button>
        <img src={paid} alt=""/>
    </div>
  )
}

export default Payment
