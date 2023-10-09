import React from 'react';
import Image from "next/image";

const Footer = () => {
   return (
       <div className=" text-white ">
          <footer className="grid grid-cols-12 bg-[#010D50] pt-14 gap-16 ">
             {/*****/}

             <div className="flex  col-span-12 w-full  px-40  justify-between">
               <div className=" flex flex-row items-center gap-2">
                  <Image width={50} height={30} src="/assets/logo.svg" alt="Logo"/>
                  <span className="font-bold">FinanceFlow</span>
               </div>
                <div className=" flex flex-row gap-2">
                   <Image width={36} height={36} src="/assets/footer/footer_1.svg" alt="Media"/>
                   <Image width={36} height={36} src="/assets/footer/footer_2.svg" alt="Media"/>
                   <Image width={36} height={36} src="/assets/footer/footer_3.svg" alt="Media"/>
                </div>
             </div>

             {/*****/}
             <div className="col-span-6 flex justify-start flex-col px-40  pt-14  h-max ">

                <div className=" flex flex-col ">
                  <div className="h-[25px]">
                     <h6 className=" font-bold text-lg items-end">Menu</h6>
                  </div>
                </div>

                <div className="bg-blue-50 mt-8 mb-6 border-b-gray-500 border-[1px] rounded-full opacity-50"></div>

                <div className=" flex flex-row  justify-between  w-full mb-8">

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
             {/*****/}
             <div className="col-span-6 pr-32">
                <div className=" rounded-[40px] py-10 pl-8 pr-16 bg-[#FFFFFF19]  ">
                   <h5 className=" w-fit font-bold text-lg mb-3">Download our Application</h5>
                   <p className=" w-fit text-sm font-light mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer</p>
                   <div className=" flex flex-row w-fit gap-2">
                      <div className="flex flex-row items-center rounded-full  py-3 px-4 bg-[#0328EE]  w-fit">
                         <Image width={13} height={18} className=""
                                src="/assets/homeImg/section9/sec9|1.svg" alt="Download"/>
                         <span>App Store</span>
                      </div>
                      <div className="flex flex-row items-center rounded-full py-3 px-4 bg-[#0328EE]  w-fit">
                         <Image width={13} height={18} className=""
                                src="/assets/homeImg/section9/sec9|3.svg" alt="Download"/>
                         <span>App Store</span>
                      </div>
                   </div>
                </div>
             </div>
             <div className="bg-blue-50 mt-8 mb-6 border-b-gray-500 border-[1px] rounded-full opacity-50 col-span-12 mx-40"></div>
          </footer>

       </div>
   );
};

export default Footer;