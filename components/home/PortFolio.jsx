import React from 'react';
import Image from "next/image";

const PortFolio = () => {
   return (
       <section className=" text-white flex-col   max-sm:px-4  justify-center">
          {/*title section*/}
          <div className=" flex flex-col justify-center max-sm:justify-start lg:text-center md:text-center">
             <h2 className="text-4xl max-sm:text-2xl font-bold mb-4">Build your crypto portfolio</h2>
             <span className="mx-auto font-medium text-sm w-1/3 max-sm:w-full mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</span>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:px-32 md:px-5 max-sm:px-4 text-white ">

             <div className="lg:col-span-3  md:col-span-6 max-sm:col-span-12">

                {/*Box 1*/}
                <div className="box_Folio box_Folio_md max-sm:order-1 ">
                   <div className="bg-[#0328EE] w-fit p-3 rounded-[20px]">
                      <Image width={40} height={40} className="" src="/assets/homeImg/portfolio/section_3|1.svg"
                             alt="s"/>
                   </div>
                   <h4 className="mt-5 text-[16px] font-bold uppercase box_Folio_md_title">Send & Receive</h4>
                   <p className="mt-2 text-sm box_Folio_md_para">Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                   </p>
                </div>

                {/*Box 2*/}
                <div className="box_Folio mt-4 box_Folio_md max-sm:order-2">
                   <div className="bg-[#0328EE] w-fit p-3 rounded-[20px]">
                      <Image width={40} height={40} className="box_Folio_md_img"
                             src="/assets/homeImg/portfolio/section_3|2.svg" alt="s"/>
                   </div>
                   <h4 className="mt-5 text-[16px] font-bold uppercase box_Folio_md_title">100% Secure Wallet</h4>
                   <p className="mt-2 text-sm box_Folio_md_para">Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                   </p>
                </div>
             </div>

             <div className="lg:col-span-6 md:hidden lg:flex  max-sm:col-span-12    center_Folio">
                {/*Box Center*/}
                <div className="max-sm:order-3">
                   <h3 className="text-lg  font-bold uppercase mb-2 justify-center">iOS & Android App</h3>
                   <p className="text-sm  mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi
                      non at sed neque.</p>
                   <Image
                       width={354}
                       height={723}
                       className=""
                       src="/assets/homeImg/portfolio/iPhone3.png" alt="s"/>
                </div>
             </div>

             <div className="lg:col-span-3  md:col-span-6 max-sm:col-span-12 ">


                {/*Box 3*/}
                <div className="box_Folio  box_Folio_md max-sm:order-4 ">
                   <div className="bg-[#0328EE] w-fit p-3  rounded-[20px]">
                      <Image width={40} height={40} className="box_Folio_md_img"
                             src="/assets/homeImg/portfolio/section_3|3.svg" alt="s"/>
                   </div>
                   <h4 className="mt-5 text-lg font-bold uppercase box_Folio_md_title">Trading Charts</h4>
                   <p className="mt-2 text-sm box_Folio_md_para">Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                   </p>
                </div>

                {/*Box 4*/}
                <div className="box_Folio mt-4 box_Folio_md  max-sm:order-5">
                   <div className="bg-[#0328EE] w-fit p-3 md:p-2 rounded-[20px] md:rounded-[15px]">
                      <Image width={40} height={40} className="box_Folio_md_img"
                             src="/assets/homeImg/portfolio/section_3|4.svg" alt="s"/>
                   </div>
                   <h4 className="mt-5 text-lg font-bold uppercase  box_Folio_md_title">Real Time Trading</h4>
                   <p className="mt-2 text-sm box_Folio_md_para">Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                   </p>
                </div>
             </div>

          </div>
          <div className="w-full flex justify-center h-fit mt-12">
             <button
                 className="uppercase bg-[#0328EE] font-medium py-4 px-7 rounded-[80px]"
             >download app
             </button>
          </div>
       </section>
   );
};

export default PortFolio;