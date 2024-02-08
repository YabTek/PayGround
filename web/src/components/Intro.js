import React from 'react';
import img from '../assets/img.png';

const Intro = () => {
  return (
    <div className="w-full flex-col sm:flex sm:flex-row sm:justify-between bg-[#FAFAEF]">
      <div className="py-2 px-8 sm:w-1/2">
        <h2 className="text-[30px] md:text-[40px] lg:text-[60px] xl:text-[80px] sm:pt-10 md:pt-24 lg:pt-36 xl:pt-36 font-semibold leading-tight">Finally, a modern</h2>
        <h2 className="text-[30px] md:text-[40px] lg:text-[60px] xl:text-[80px] font-semibold leading-tight -mt-2">way to pay</h2>
        <h2 className="text-[30px] md:text-[40px] lg:text-[60px] xl:text-[80px] font-semibold leading-tight -mt-2">medical bills</h2>
        <p className="text-md md:text-xl lg:text-2xl pt-6 mr-10">PayGround simplifies healthcare payments for everyone. Manage, track, and pay—all in one place.</p>
      </div>
      <img className="w-full sm:w-1/2 mb-10 xl:mb-0 sm:mt-8 md:pt-12 px-8" src={img} alt="Introduction" />
    </div>
  );
};

export default Intro;
