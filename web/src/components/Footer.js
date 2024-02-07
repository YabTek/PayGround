import React from 'react'
import apple from '../assets/apple.png'
import playstore from '../assets/playstore.png'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-12 xl:gap-0 xl:justify-between bg-[#FAFAEF] p-32">
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-6">Pay with PayGround</h3>
        <p className="text-xl">PayGround is available for free </p>
        <p className="text-xl">on popular mobile app stores.</p>
        <button className="flex text-white bg-black py-2 px-6 rounded-lg items-center mt-4 mb-4 w-full max-w-xs">
          <img className="h-8 w-8 md:h-10 md:w-10 mr-2" src={apple} alt=""/>
          <div>
            <p className="text-sm md:text-base">Download on the</p>
            <h2 className="text-base md:text-2xl font-semibold">App Store</h2>
          </div>
        </button>
        <button className="flex text-white bg-black py-2 px-[34px] px-6 rounded-lg items-center mb-4 w-full max-w-xs">
          <img className="h-8 w-8 md:h-10 md:w-10 mr-2" src={playstore} alt=""/>
          <div>
            <p className="text-sm md:text-base">GET IT ON</p>
            <h2 className="text-base md:text-2xl font-semibold">Google Play</h2>
          </div>
        </button>
        <p className="underline text-xl text-blue-900 font-semibold">Pay with PayGround</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-6">Accept payments</h3>
        <p className="text-xl">Hospitals </p>
        <p className="text-xl">Clinics </p>
        <p className="text-xl">Partners </p>
        <p className="text-xl">Pricing </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-6">About</h3>
        <p className="text-xl">Contact </p>
        <p className="text-xl">Support </p>
        <p className="text-xl">Blog </p>
        <p className="text-xl">Careers </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-6">Company</h3>
        <p className="text-xl">365 E. Germann Rd. </p>
        <p className="text-xl">Suite 280 </p>
        <p className="text-xl">Partners </p>
        <p className="text-xl">Gilbert, AZ 85297</p>
        <p className="text-xl underline">hello@payground.com</p>
        <p className="text-xl">800.385.4556</p>
      </div>
    </div>
  )
}

export default Footer
