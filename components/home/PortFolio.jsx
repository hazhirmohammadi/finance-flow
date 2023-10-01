import React from 'react';
import Image from "next/image";

const PortFolio = () => {
   return (
       <div className="grid grid-cols-3 gap-4 px-40 text-white mb-8">
          <div className="">
             <div className="p-6 w-[325px] h-[295px] rounded-[40px] bg-[#010D50]">
                <div className="bg-[#0328EE] w-fit py-3 px-2 rounded-[20px]">
                   <Image width={42} height={41} src="/assets/homeImg/portfolio/section_3|1.svg" alt="s"/>
                </div>
                <h4 className="mt-5 text-lg font-bold uppercase">Send & Receive</h4>
                <p className="mt-2 text-sm">Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit.
                   Feugiat nulla suspendisse tortor aene.
                </p>
             </div>
             <div className="p-6 w-[325px] h-[295px] rounded-[40px] bg-[#010D50] mt-4">

                <div className="bg-[#0328EE] w-fit py-3 px-2 rounded-[20px]">
                   <Image width={42} height={41} src="/assets/homeImg/portfolio/section_3|2.svg" alt="s"/>
                </div>
                <h4 className="mt-5 text-lg font-bold uppercase">100% Secure Wallet</h4>
                <p className="mt-2 text-sm">Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit.
                   Feugiat nulla suspendisse tortor aene.
                </p>

             </div>
          </div>

          <div className="bg-[#0328EE] rounded-[40px] pt-10 px-8">
             <h3 className="text-lg font-bold uppercase mb-5">iOS & Android App</h3>
             <p className="text-sm h-12 mb-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque.</p>
             <Image width={354} height={723} src="/assets/homeImg/portfolio/iPhone3.png" alt="s"/>
          </div>

          <div className="">
             <div className="p-6 w-[325px] h-[295px] rounded-[40px] bg-[#010D50]">
                <div className="bg-[#0328EE] w-fit py-3 px-2 rounded-[20px]">
                   <Image width={42} height={41} src="/assets/homeImg/portfolio/section_3|3.svg" alt="s"/>
                </div>
                <h4 className="mt-5 text-lg font-bold uppercase">Trading Charts</h4>
                <p className="mt-2 text-sm">Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit.
                   Feugiat nulla suspendisse tortor aene.
                </p>
             </div>
             <div className="p-6 w-[325px] h-[295px] rounded-[40px] bg-[#010D50] mt-4">
                <div className="bg-[#0328EE] w-fit py-3 px-2 rounded-[20px]">
                   <Image width={42} height={41} src="/assets/homeImg/portfolio/section_3|4.svg" alt="s"/>
                </div>
                <h4 className="mt-5 text-lg font-bold uppercase">Real Time Trading</h4>
                <p className="mt-2 text-sm">Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit.
                   Feugiat nulla suspendisse tortor aene.
                </p>
             </div>
          </div>
       </div>
   );
};

export default PortFolio;