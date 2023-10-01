import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
   return (
       <div className="grid grid-cols-12 gap-2">
          <div className="w-auto col-span-12 md:col-span-6 z-30 pl-[115px] max-md:px-4 ">
             <div className=" h-fit  max-sm:flex max-sm:justify-start max-sm:flex-col">
                <h1 className="max-sm:text-[33px] md:text-2xl text-white font-bold lg:text-[33px] mt-32 ">Buy, trade, and hold 350+ cryptocurrencies</h1>
                <p className=" md:text-xs text-white text-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis
                   placerat.</p>
             </div>
             <div className="flex flex-row  max-sm:flex-col mt-5">
                <Link href="/" className="justify-center max-sm:w-full md:text-sm  lg:mr-7 md:mr-2 hero_btn bg-[#0328EE] max-sm:mb-2">DOWNLOAD APP</Link>
                <Link href="/" className="justify-center max-sm:w-full md:text-sm  max-sm:mt-2 hero_btn bg-slate-800">view pricing</Link>
             </div>

          </div>

          <div className=" flex justify-end col-span-12  md:col-span-6 mt-10 max-sm:justify-center">
             <Image width={400} height={400} className="w-5/6 z-30 max-md:hidden" src="/assets/Computers.png" alt="Master Hero"/>
             <Image width={680} height={640} className=" w-3/6 z-10 max-md:hidden absolute" src="/assets/vector2.png" alt=""/>
             <Image width={680} height={640} className=" w-5/6 z-10 hidden max-sm:flex" src="/assets/smallComputer.png" alt=""/>

          </div>

       </div>
   );
};

export default Hero;