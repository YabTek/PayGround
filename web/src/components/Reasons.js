import React from 'react'
import time from '../assets/time.png'
import rest from '../assets/rest.png'
import papers from '../assets/papers.png'

const Reasons = () => {
  return (
    <div class="bg-[#FAFAEF] py-12 md:py-24 lg:py-32">
      <h1 class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">Why pay with PayGround?</h1>
      <p class="text-center text-lg md:text-2xl sm:mb-2">You have more important things to focus on. Let PayGround take the stress of </p>
      <p class="text-center text-lg md:text-2xl mb-16">managing medical bills off your shoulders.</p>
      <div class="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-24 px-16">
        <div class="flex flex-col text-center items-center">
          <img class="h-24 md:h-32 mb-4" src={time} alt="" />
          <h1 class="text-lg md:text-xl font-semibold mb-2">Save time.</h1>
          <p class="text-base md:text-lg">Pay medical bills from multiple providers in one place and on your time.</p>
        </div>
        <div class="flex flex-col text-center items-center">
          <img class="h-24 md:h-32 mb-4" src={rest} alt="" />
          <h1 class="text-lg md:text-xl font-semibold mb-2">Rest easy.</h1>
          <p class="text-base md:text-lg">View and pay bills with just a few clicks on our simple and secure mobile app. The app is free to use!</p>
        </div>
        <div class="flex flex-col text-center items-center">
          <img class="h-24 md:h-32 mb-4" src={papers} alt="" />
          <h1 class="text-lg md:text-xl font-semibold mb-2">Stress less.</h1>
          <p class="text-base md:text-lg">Schedule payments, view invoices, and track billing history in your digital dashboard.</p>
        </div>
      </div>
    </div>
  )
}

export default Reasons
