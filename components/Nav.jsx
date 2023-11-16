import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
   return (
       <nav className="lg:px-[90px] lg:py-[33px] xl:px-[133px]   w-full flex flex-row z-20 pt-4">
          <div className="flex w-full px-5 z-20">
             <ul className="flex space-x-7   items-center mr-auto">
                <div className="flex flex-row text-white a justify-center lg:mr-[30px] xl:mr-[66px]">
                   <Image width={51} height={30} className="mr-2  max-md:h-[15px] max-md:w-[30px] max-lg:w-[40px] max-lg:h-[20px]" src="/assets/logo.svg"
                          alt="logo"/>
                   <span className='lg:font-medium font-bold md:font-extralight'>FinanceFlow</span>
                </div>
                <Link href="" className=" nav_Link md:text-xs lg:text-sm underline">Home</Link>
                <Link href="/about/" className=" nav_Link md:text-xs lg:text-sm">About</Link>
                <Link href="" className=" nav_Link md:text-xs lg:text-sm">Pricing</Link>
                <Link href="" className=" nav_Link md:text-xs lg:text-sm">Tokens</Link>
                <Link href="" className=" nav_Link md:text-xs lg:text-sm">Blog</Link>
                <Link href="" className=" nav_Link md:text-xs lg:text-sm">contact us</Link>

             </ul>
             <div className=" flex  xl:pr-9 ml-auto">
                <Link href="/"
                      className="
                      nav_btn  md:py-[7px]  md:px-[17px] xl:py-[14px] xl:px-[32px] lg:text-[12px] md:text-xs
                       max-md:hidden
                      "
                >DOWNLOAD APP</Link>
                <Image src="/assets/Berger.png" alt={"menu"} width={40} height={40} className="max-sm:flex md:hidden"
                />
             </div>
          </div>

       </nav>
   );
};

export default Nav;