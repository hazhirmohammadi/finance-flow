import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
   return (
       <nav className="md:px-0 lg:px-[90px] lg:py-[13px] xl:px-[133px]   w-full flex flex-row z-20 pt-4">
          <div className="flex w-full px-5 z-20">
             <ul className="flex space-x-7   items-center mr-auto">
                <div className="flex flex-row text-white a justify-center lg:mr-[30px] xl:mr-[66px]">
                   <Image width={51} height={30} className="mr-2  md:h-[20px] md:w-[35px]" src="/assets/logo.svg"
                          alt="logo"/>
                   <span className='lg:font-medium font-bold'>FinanceFlow</span>
                </div>
                <li className="md:hidden lg:flex lg:font-light text-white font-medium underline">Home</li>
                <li className="md:hidden lg:flex lg:font-light text-white font-medium">About</li>
                <li className="md:hidden lg:flex lg:font-light text-white font-medium">Pricing</li>
                <li className="md:hidden lg:flex lg:font-light text-white font-medium">Tokens</li>
                <li className="md:hidden lg:flex lg:font-light text-white font-medium">Blog</li>
                <li className="md:hidden lg:flex lg:font-light text-white font-medium">contact us</li>

             </ul>
             <div className=" flex  xl:pr-9 ml-auto">
                <Link href="/"
                      className=" nav_btn  md:py-[7px]  md:px-[17px] xl:py-[14px] xl:px-[32px]  md:text-[10px] ">DOWNLOAD
                   APP</Link>
             </div>
          </div>

       </nav>
   );
};

export default Nav;