import React from 'react'
import quote1 from '../assets/quote1.png'
import quote2 from '../assets/quote2.png'
import quote3 from '../assets/quote3.png'

const Quotes = () => {
  return (
    <div className="bg-[#FAFAEF] p-4 md:p-8 lg:p-12">
      <h1 className="text-start md:text-center text-3xl md:text-5xl font-semibold md:mb-2">A people-first approach to</h1>
      <h1 className="text-start md:text-center text-3xl md:text-5xl font-semibold mb-8">healthcare payments.</h1>
      <p className="text-start md:text-center text-lg md:text-2xl md:mb-2">Say goodbye to endless paper statements, various patient portals, and long</p>
      <p className="text-start md:text-center text-lg md:text-2xl mb-12">phone waits.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center items-center">
        <img className="shadow-2xl shadow-gray-900 rounded-xl max-w-full h-auto md:max-w-none w-[300px] lg:w-[400px]" src={quote1} alt=""/>
        <img className="shadow-2xl shadow-gray-900 rounded-xl max-w-full h-auto md:max-w-none w-[300px] lg:w-[400px]" src={quote2} alt=""/>
        <img className="shadow-2xl shadow-gray-900 rounded-xl max-w-full h-auto md:max-w-none w-[300px] lg:w-[400px]" src={quote3} alt=""/>
      </div>
    </div>
  )
}

export default Quotes
