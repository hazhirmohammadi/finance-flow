import React from 'react';
import Image from "next/image";

const GetStart = () => {
   return (
       <section className="mt-40 mb-40 text-white">
          <div className="grid grid-cols-12 lg:px-36 md:px-5 max-sm:px-5">
             <div className="col-span-5 max-sm:col-span-12">

                <h5 className="font-semibold text-3xl mb-6">Get started today</h5>
                <p className=" font-light text-sm mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>

                <div>

                   <div className=" flex flex-row items-center mb-4 gap-4">
                      <div className="p-2 bg-[#0328EE] w-fit rounded-[13px]">
                         <Image width={29} height={27} src="/assets/homeImg/section7/sec7|1.svg" alt=""/>
                      </div>
                      <span>Download app</span>
                   </div>
                   <div className=" flex flex-row items-center mb-4 gap-4">
                      <div className="py-2 px-[11px] bg-[#0328EE] w-fit rounded-[13px]">
                         <Image width={24} height={31} src="/assets/homeImg/section7/sec7|2.svg" alt=""/>
                      </div>
                      <span>Download app</span>
                   </div>
                   <div className=" flex flex-row items-center mb-4 gap-4">
                      <div className="py-3 px-[6px] bg-[#0328EE] w-fit rounded-[13px] ">
                         <Image width={34} height={23} src="/assets/homeImg/section7/sec7|3.svg" alt=""/>
                      </div>
                      <span>Download app</span>
                   </div>


                </div>

             </div>
             <div className="col-span-7 max-sm:col-span-12">
                <div className="   rounded-[40px] h-[400px] bg-[#010D50] flex justify-center items-center">
                   <Image width={100} height={100} src="/assets/homeImg/section7/play.svg" alt="play"/>
                </div>
             </div>
          </div>
       </section>
   );
};

export default GetStart;