import React from 'react';
import quote1 from '../assets/quote1.png';
import quote2 from '../assets/quote2.png';
import quote3 from '../assets/quote3.png';

const Quotes = () => {
  return (
    <div class="bg-[#FAFAEF] p-8 lg:p-12">
      <h1 class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold md:mb-2">A people-first approach to</h1>
      <h1 class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">healthcare payments.</h1>
      <p class="text-center text-lg md:text-2xl md:mb-2">Say goodbye to endless paper statements, various patient portals, and long</p>
      <p class="text-center text-lg md:text-2xl mb-12">phone waits.</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 justify-center items-center">
        <img class="shadow-2xl shadow-gray-900 w-[65%] rounded-xl max-w-full h-auto mx-auto md:max-w-full sm:w-[90%] lg:w-full" src={quote1} alt=""/>
        <img class="shadow-2xl shadow-gray-900 w-[65%] rounded-xl max-w-full h-auto mx-auto md:max-w-full sm:w-[90%] lg:w-full" src={quote2} alt=""/>
        <img class="shadow-2xl shadow-gray-900 w-[65%] rounded-xl max-w-full h-auto mx-auto md:max-w-full sm:w-[90%] lg:w-full" src={quote3} alt=""/>
      </div>
    </div>
  );
};

export default Quotes;
