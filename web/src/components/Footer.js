import React from 'react';

const Footer = () => {
  return (
    <div >
            <div class="bg-[#B9B44B] h-[0.3px]"></div>

      <div class="flex flex-col sm:flex-row gap-8 md:gap-12 sm:justify-between bg-[#FAFAEF] p-10 md:p-16 xl:py-24 xl:px-32">
        <div class="flex flex-col">
          <h3 class="text-2xl font-semibold mb-2 sm:mb-6">Pay with PayGround</h3>
          <p class="text-xl">PayGround is available for free </p>
          <p class="text-xl">on popular mobile app stores.</p>
          <p class="underline text-xl text-blue-900 font-semibold">Pay with PayGround</p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-2 sm:mb-6">Accept payments</h3>
          <p class="text-xl">Hospitals </p>
          <p class="text-xl">Clinics </p>
          <p class="text-xl">Partners </p>
          <p class="text-xl">Pricing </p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-2 sm:mb-6">About</h3>
          <p class="text-xl">Contact </p>
          <p class="text-xl">Support </p>
          <p class="text-xl">Blog </p>
          <p class="text-xl">Careers </p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-2 sm:mb-6">Company</h3>
          <p class="text-xl">365 E. Germann Rd. </p>
          <p class="text-xl">Suite 280 </p>
          <p class="text-xl">Partners </p>
          <p class="text-xl">Gilbert, AZ 85297</p>
          <p class="text-xl underline">hello@payground.com</p>
          <p class="text-xl">800.385.4556</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
