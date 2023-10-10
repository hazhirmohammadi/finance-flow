import React from 'react';
import Image from "next/image";

const Footer = () => {
   return (
       <div className=" text-white ">
          <footer className="grid grid-cols-12 bg-[#010D50] pt-14 gap-16 max-sm:gap-4 max-sm:px-5">
             {/**1***/}
             <div className="order-1 flex  col-span-12 w-full lg:px-40 md:px-5 sm:px-5
              justify-between  max-sm:flex-col ">

               <div className=" flex flex-row items-center gap-2 max-sm:mx-auto max-sm:mb-2">
                  <Image width={50} height={30} src="/assets/logo.svg" alt="Logo"/>
                  <span className="font-bold">FinanceFlow</span>
               </div>
                <div className=" flex flex-row gap-2 max-sm:mx-auto">
                   <Image width={36} height={36} src="/assets/footer/footer_1.svg" alt="Media"/>
                   <Image width={36} height={36} src="/assets/footer/footer_2.svg" alt="Media"/>
                   <Image width={36} height={36} src="/assets/footer/footer_3.svg" alt="Media"/>
                </div>
             </div>

             {/***2**/}
             <div className=" order-2 col-span-6 max-sm:col-span-12 flex justify-start flex-col lg:px-40 md:px-5 sm:px-5   pt-14  h-max ">

                <div className=" flex flex-col ">
                  <div className="h-[25px]">
                     <h6 className=" font-bold text-lg items-end">Menu</h6>
                  </div>
                </div>

                <div className="bg-blue-50 mt-8 mb-6 border-b-gray-500 border-[1px] rounded-full opacity-50"></div>

                <div className=" flex flex-row  justify-between  w-full mb-8 max-sm:pr-32">

                   <div className="flex flex-col gap-4 ">
                      <span className=" text-sm font-light">Home</span>
                      <span className=" text-sm font-light">About</span>
                      <span className=" text-sm font-light">Pricing</span>
                   </div>
                   <div className=" flex flex-col gap-4 ">
                      <span className=" text-sm font-light">Tokens</span>
                      <span className=" text-sm font-light">Blog</span>
                      <span className=" text-sm font-light">contact us</span>
                   </div>

                </div>
             </div>
             {/**3***/}
             <div className="order-3 col-span-6 max-sm:col-span-12 lg:pr-32 md:pr-5 sm:px-5 ">
                <div className=" max-sm:flex max-sm:flex-col rounded-[40px] lg:py-10 lg:pl-8 lg:pr-16 md:py-10 md:pl-4 md:pr-8 max-sm:py-5  max-sm:px-5 bg-[#FFFFFF19]">
                   <h5 className=" w-fit font-bold text-lg mb-3">Download our Application</h5>
                   <p className=" w-fit text-sm font-light mb-6 max-sm:text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer</p>

                   <div className=" flex flex-row  w-fit max-sm:w-full gap-2 max-sm:flex-col max-sm:justify-center">
                      <div className="flex flex-row  items-center rounded-full py-3 px-4 bg-[#0328EE] mb-10 max-sm:mb-4 w-fit max-sm:w-full max-sm:justify-center">
                         <Image width={13} height={18} className=""
                                src="/assets/homeImg/section9/sec9|1.svg" alt="Download"/>
                         <span className=" md:text-[10px] ">App Store</span>
                      </div>
                      <div className="flex flex-row items-center rounded-full py-3 px-4 bg-[#0328EE] mb-10 max-sm:mb-4 w-fit max-sm:w-full max-sm:justify-center">
                         <Image width={13} height={18} className=""
                                src="/assets/homeImg/section9/sec9|3.svg" alt="Download"/>
                         <span className=" md:text-[10px] ">App Store</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="order-4 bg-blue-50 mt-8 mb-6 border-b-gray-500 border-[1px] rounded-full opacity-50 col-span-12 lg:mx-40 md:mr-5 sm:mx-5 "></div>

          </footer>

       </div>
   );
};

export default Footer;