import React from 'react';
import img from '../assets/img.png';

const Intro = () => {
  return (
    <div class="w-full flex-col sm:flex sm:flex-row sm:justify-between bg-[#FAFAEF]">
      <div class="py-10 px-8 sm:w-1/2">
        <h2 class="text-[30px] md:text-[46px] lg:text-[80px] md:pt-20 lg:pt-[150px]  font-semibold leading-tight">Finally, a modern way to pay medical bills</h2>
        <p class="sm:text-sm md:text-xl lg:text-3xl pt-6 mr-10">PayGround simplifies healthcare payments for everyone. Manage, track, and pay—all in one place.</p>
      </div>
      <img class="w-full sm:w-1/2 mb-10 xl:mb-0 sm:mt-8 md:pt-20 px-8" src={img} alt="Introduction" />
    </div>
  );
};

export default Intro;