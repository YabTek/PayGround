import React from 'react'
import doctor from '../assets/doctor.png'

const Demo = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:justify-between bg-[#FAFAEF] p-8 md:p-16 lg:p-16">
      <div className="w-full xl:w-1/2 mb-4 xl:mb-32 xl:mr-8 xl:pt-36">
        <h2 className="text-[#554DB6] text-2xl font-semibold mb-4 mt-16 lg:mt-auto">Are you a Medical Provider?</h2>
        <h1 className="text-5xl font-semibold mb-2">Accept payments</h1>
        <h1 className="text-5xl font-semibold mb-6">with PayGround</h1>
        <p className="text-2xl leading-tight mb-8">Improve collections, reduce costs, and boost patient satisfaction with our advanced payment platform.</p>
        <button className="bg-[#261F79] text-white font-semibold text-2xl px-8 py-6 rounded-xl">Demo the Platform</button>
      </div>
      <img className="w-full xl:w-1/2 lg:mt-32" src={doctor} alt="Doctor" />
    </div>
  )
}

export default Demo
