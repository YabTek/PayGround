import React from 'react';
import img from '../assets/img.png';

const Intro = () => {
  return (
    <div className="w-full flex-col xl:flex xl:flex-row xl:justify-between md:mb-0 bg-[#FAFAEF]">
      <div className="py-10 px-8 xl:w-1/2">
        <h2 className="text-[50px] sm:text-[80px] xl:pt-[150px]  font-semibold leading-tight">Finally, a modern way to pay medical bills</h2>
        <p className="text-3xl pt-6 mr-10">PayGround simplifies healthcare payments for everyone. Manage, track, and pay—all in one place.</p>
      </div>
      <img className="w-full xl:w-1/2 mb-10 xl:mb-0 xl:pt-20 px-8" src={img} alt="Introduction" />
    </div>
  );
};

export default Intro;
