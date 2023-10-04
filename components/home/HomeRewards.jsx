import React from 'react';
import Image from "next/image";

const HomeRewards = () => {
   return (
       <div>
          <div className="grid grid-cols-12 text-white gap-2  lg:px-36 sm:p-5 mt-44 flex-col ">
             <div className="lg:col-span-6 max-md:col-span-12 sm:col-span-12 w-full  flex lg:justify-start md:justify-center sm:justify-center order-1 ">
               <div className="flex flex-row justify-center">
                  <Image width={255} height={538} className=" sm:w-1/2 " src="/assets/homeImg/scetion4/iPhones4|2.png" alt="Rewards"/>
                  <Image width={255} height={538} className=" sm:w-1/2 sm:h-max   absolute lg:ml-32 md:ml-44 mt-3" src="/assets/homeImg/scetion4/iPhones4|1.png" alt="Rewards"/>
               </div>

             </div>
             <div className="lg:col-span-6 max-md:col-span-12 sm:col-span-12 w-full order-2 md:justify-center sm:justify-center">
               <div className=" flex-col flex justify-end py-14 lg:pl-24 max-sm:pl-5">

                  <h3 className="text-2xl font-bold ">Earn daily rewards on your idle tokens</h3>
                  <p className="font-light text-xs mt-4">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                     nulla suspendisse tortor aene.
                  </p>

                  <div className="flex flex-row justify-start mt-8 items-center gap-4">
                     <div className="bg-[#0328EE] w-fit p-2 rounded-[13px]">
                        <Image width={32} height={32} src="/assets/homeImg/scetion4/sec4|1.svg" alt=""/>
                     </div>
                     <span className="font-sm text-sm">Lowest fees in market</span>
                  </div>

                  <div className="flex flex-row justify-start mt-8 items-center gap-4">
                     <div className="bg-[#0328EE] w-fit p-2 rounded-[13px]">
                        <Image width={32} height={32} src="/assets/homeImg/scetion4/sec4|2.svg" alt=""/>
                     </div>
                     <span className="font-sm text-sm">Fast and secure transactions</span>
                  </div>

                  <div className="flex flex-row justify-start mt-8 items-center gap-4">
                     <div className="bg-[#0328EE] w-fit px-2  py-1 rounded-[13px]">
                        <Image width={33} height={25} src="/assets/homeImg/scetion4/sec4|3.svg" alt=""/>
                     </div>
                     <span className="font-sm text-sm ">256-bit secure encryption</span>
                  </div>

               </div>
             </div>
          </div>


          <div></div>
       </div>
   );
};

export default HomeRewards;