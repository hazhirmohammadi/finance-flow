import React from 'react';
import Image from "next/image";

const Hero = () => {
   return (
       <div className="grid grid-cols-12 gap-2">
          <div className="w-auto col-span-12 md:col-span-6 z-30 pl-[115px] ">
             <div className=" h-[160px] ">
                <h1 className="text-white font-bold text-5xl mt-32 md:text-[33px]">Buy, trade, and hold 350+ cryptocurrencies</h1>
                <p className=" text-white text-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis
                   placerat.</p>
             </div>
          </div>

          <div className=" flex justify-end col-span-12  md:col-span-6 mt-10">
             <Image width={400} height={400} className="w-5/6 z-30" src="/assets/Computers.png" alt="Master Hero"/>
          </div>

       </div>
   );
};

export default Hero;