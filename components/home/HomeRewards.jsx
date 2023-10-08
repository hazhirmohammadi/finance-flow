import React from 'react';
import Image from "next/image";
import {Candal} from "next/dist/compiled/@next/font/dist/google";

const HomeRewards = () => {
   return (
       <div>
          {/*First Section*/}
          <div className="grid grid-cols-12 text-white gap-2  lg:px-36 sm:p-5 mt-44 max-sm:mt-10  flex-col ">
             <div
                 className="col-span-12 md:col-span-6 w-full  flex lg:justify-start md:justify-center max-sm:justify-center order-1 ">
                <div className="flex flex-row justify-center">

                   <Image width={255} height={538} className="  max-sm:w-3/4 h-max max-sm:rotate-[5.5deg]"
                          src="/assets/homeImg/scetion4/iPhones4|2.png" alt="Rewards"/>
                   <Image width={255} height={538}
                          className=" max-sm:w-1/2 h-max lg:w-[300px] absolute xl:ml-52 md:flex max-sm:hidden sm:px-5 lg:ml-44 md:ml-32 mt-3"
                          src="/assets/homeImg/scetion4/iPhones4|1.png" alt="Rewards"/>

                </div>
             </div>
             <div className="col-span-12 md:col-span-6 w-full order-2 md:justify-center sm:justify-center">
                <div className=" flex-col flex justify-end py-14 lg:pl-24  max-sm:pl-5">

                   <h3 className="text-2xl font-bold  max-sm:mx-1">Earn daily rewards on your idle tokens</h3>
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
          <Image
              width={600}
              height={600}
              className="  absolute z-10 blur-3xl left-1/3 max-sm:w-1/3 md:w-1/3"
              src="/assets/homeImg/scetion5/Vector.png" alt="Vector"
          />
          {/*Last Section*/}
          <div className="w-full ">
             <div className="grid grid-cols-12 text-white gap-2  lg:pl-36   mt-40 max-sm:mt-10  md:pl-5 ">
                <div
                    className="lg:col-span-6 md:col-span-6 max-sm:col-span-12 w-full z-30 md:justify-center sm:justify-center">
                   <div className="  flex-col flex justify-start py-14 lg:pl-6  max-sm:pl-5">

                      <h3 className="text-2xl max-md:text-1xl font-bold max-sm:mx-1">Earn daily rewards on your idle
                         tokens</h3>
                      <p className="font-light text-xs mt-4">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                         nulla suspendisse tortor aene.
                      </p>

                      <div className="flex flex-row  mt-8 items-center gap-4">
                         <div className="bg-[#0328EE] w-fit p-2 rounded-[13px]">
                            <Image width={32} height={32} src="/assets/homeImg/scetion5/photo5|2.svg" alt=""/>
                         </div>
                         <span className="font-sm text-sm">100% Private data</span>
                      </div>

                      <div className="flex flex-row  mt-8 items-center gap-4">
                         <div className="bg-[#0328EE] w-fit p-2 rounded-[13px]">
                            <Image width={32} height={32} src="/assets/homeImg/scetion5/photo5|3.svg" alt=""/>
                         </div>
                         <span className="font-sm text-sm">99.99% Uptime guarantee</span>
                      </div>

                      <div className="flex flex-row  mt-8 items-center gap-4">
                         <div className="bg-[#0328EE] w-fit px-2  py-1 rounded-[13px]">
                            <Image width={32} height={32} src="/assets/homeImg/scetion5/photo5|4.svg" alt=""/>
                         </div>
                         <span className="font-sm text-sm ">24/7 Dedicated support</span>
                      </div>

                   </div>
                </div>
                <div
                    className="lg:col-span-6 md:col-span-6 max-sm:col-span-12 w-full  flex lg:justify-end md:justify-center sm:justify-center  ">
                   <div className="flex  justify-end max-sm:justify-center p-0 max-sm:px-5">
                      <Image width={971} height={971} src="/assets/homeImg/scetion5/Apple5|1.png" alt="Rewards"
                             className="z-30 max-md:w-2/4 flex max-sm:hidden"
                      />
                      <Image width={971} height={971} src="/assets/homeImg/scetion5/AppleSm5|2.png" alt="Rewards"
                             className="z-30  hidden  max-sm:flex   sm:justify-center"
                      />

                   </div>
                </div>

             </div>
          </div>


          {/*6 Section */}
          <div className=" mt-40 mb-20 text-white grid grid-cols-12 bg-[#0328EE] ">
             <div className="col-span-6 max-sm:col-span-12 flex flex-col justify-start  pt-20 z-30
               max-sm:text-center lg:pl-44 md:px-5 sm:px-5">

                <h2 className="font-bold text-2xl mb-4 max-sm:mx-6">Explore endless possibilities with FinanceFlow</h2>

                <p className="mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse
                   tortor aene.</p>

                <button className="uppercase font-bold py-4 text-[#0328EE] bg-white w-fit max-sm:w-full justify-center  px-8 rounded-[80px] flex ">Download app</button>
             </div>
             <div className="col-span-6 max-sm:col-span-12 flex justify-center  ">
                <Image

                    width={400}
                    height={500  }
                    className=""
                    src="/assets/homeImg/scetion6/apple6|1.png"
                    alt="Search "
                />
             </div>
          </div>
       </div>
   );
};

export default HomeRewards;