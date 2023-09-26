import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
   return (
       <nav className="px-[133px]  py-[33px]  w-full flex flex-row z-20">
         <div className="flex w-full px-5 z-20">
            <ul className="flex space-x-7   items-center mr-auto">
               <div className="flex flex-row text-white a justify-center mr-[66px]">
                  <Image  width={51} height={30} className="mr-2 " src="/assets/logo.svg" alt="logo"/>
                  <span className='font-bold'>FinanceFlow</span>
               </div>
               <li className=" text-white font-medium underline">Home</li>
               <li className="text-white font-medium">About</li>
               <li className="text-white font-medium">Pricing</li>
               <li className="text-white font-medium">Tokens</li>
               <li className="text-white font-medium">Blog</li>
               <li className="text-white font-medium">contact us</li>
            </ul>
            <div className=" flex pr-9 ml-auto">
               <Link href="/" className="text-center bg-[#0328EE] text-white font-bold py-[14px] px-[32px] tracking-tighter rounded-full ">DOWNLOAD APP</Link>
            </div>
         </div>

       </nav>
   );
};

export default Nav;