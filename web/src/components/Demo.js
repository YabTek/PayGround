import React from 'react';
import doctor from '../assets/doctor.png';

const Demo = () => {
  return (
    <div class="flex flex-col sm:flex-row items-center xl:justify-between bg-[#FAFAEF] p-8 md:p-16 lg:p-16">
      <div class="w-full sm:w-1/2 mb-4 xl:mb-32 xl:mr-8 lg:pt-36">
        <h2 class="text-[#554DB6] text-lg lg:text-3xl font-semibold mb-2 lg:mb-4 mt-12 sm:mt-16 lg:mt-auto">Are you a Medical Provider?</h2>
        <h1 class="text-3xl lg:text-5xl font-semibold lg:mb-2">Accept payments</h1>
        <h1 class="text-3xl lg:text-5xl font-semibold mb-4 lg:mb-6">with PayGround</h1>
        <p class="text-lg lg:text-2xl xl:text-3xl leading-tight mb-8">Improve collections, reduce costs, and boost patient satisfaction with our advanced payment platform.</p>
        <button class="bg-[#261F79] text-white font-semibold text-lg lg:text-xl xl:text-2xl px-6 lg:px-8 py-4 lg:py-6 rounded-lg md:rounded-xl">Demo the Platform</button>
      </div>
      <img class="w-full sm:w-1/2 mt-10 lg:mt-32 sm:ml-4" src={doctor} alt="Doctor" />
    </div>
  );
};

export default Demo;
