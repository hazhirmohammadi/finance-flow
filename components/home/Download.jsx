import React from 'react';
import Image from "next/image";

const Download = () => {
   return (
       <section className='text-white mb-36'>

          <div className="flex flex-row justify-between max-sm:flex-col col-span-12 items-center  lg:px-44 md:px-5 max-sm:px-5 mb-12">
             <h3 className="text-3xl font-bold max-sm:mb-4 ">Download our app</h3>
             <p className="text-sm w-1/3 max-sm:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .</p>
          </div>

          <div className="grid grid-cols-12  gap-16 max-sm:gap-4  lg:px-40 md:px-5 max-sm:px-5">
             {/***1***/}
             <div className="col-span-6 max-sm:col-span-12 flex flex-col px-12 max-sm:px-6 pt-12 rounded-[40px] bg-[#010D50] order-1 ">
                <h3 className="text-2xl max-sm:text-lg font-bold mb-4 w-fit">Download for iOS</h3>
                <p className="text-sm font-light mb-8 w-fit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque
                   tortor semper elementum. Felis.</p>
                <div className="flex flex-row items-center rounded-full py-3 px-4 bg-[#0328EE] mb-10 w-fit">
                   <Image width={23} height={28} className=""
                          src="/assets/homeImg/section9/sec9|1.svg" alt="Download"/>
                   <span>App Store</span>
                </div>
                <Image width={458} height={935} className="w-2/2"
                       src="/assets/homeImg/section9/sec9|2.png" alt="profile"/>
             </div>
             {/***2***/}
              <div className="col-span-6  max-sm:col-span-12 flex flex-col  px-12 max-sm:px-6 pt-12 rounded-[40px] bg-[#010D50] order-2">
                <h3 className="text-2xl font-bold mb-4 w-fit">Download for iOS</h3>
                <p className="text-sm font-light mb-8 w-fit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque
                   tortor semper elementum. Felis.</p>
                <div className="flex flex-row items-center rounded-full py-3 px-4 bg-[#0328EE] mb-10 w-fit">
                   <Image width={23} height={28} className=""
                          src="/assets/homeImg/section9/sec9|3.svg" alt="Download"/>
                   <span>App Store</span>
                </div>
                <Image width={450} height={935} className="w-2/2"
                       src="/assets/homeImg/section9/sec9|4.png" alt="profile"/>
             </div>
          </div>
       </section>
   );
};

export default Download;