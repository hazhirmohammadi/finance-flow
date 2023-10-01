import Image from "next/image";

const Companys = () => {
   return (
       <div className="grid col-span-12    max-lg:px-40 max-md:px-36 max-sm:px-0 flex-col mt-44 mb-8 w-full ">
          <div className="flex justify-center mb-8">
             <h3 className="text-white  font-medium text-lg">Finance flow has been featured on</h3>
          </div>
          <div className="flex md:flex-wrap max-sm:flex-wrap justify-center gap-10">
             <Image width={140} height={28} className="max-md:w-[150px] max-md:h-[20px]" src="/assets/homeImg/company/company1.svg" alt="company"/>
             <Image width={140} height={28} className="max-md:w-[150px] max-md:h-[20px]" src="/assets/homeImg/company/company2.svg" alt="company"/>
             <Image width={140} height={28} className="max-md:w-[150px] max-md:h-[20px]" src="/assets/homeImg/company/company3.svg" alt="company"/>
             <Image width={140} height={28} className="max-md:w-[150px] max-md:h-[20px]" src="/assets/homeImg/company/company4.svg" alt="company"/>
             <Image width={140} height={28} className="max-md:w-[150px] max-md:h-[20px]" src="/assets/homeImg/company/company5.svg" alt="company"/>
          </div>
       </div>
   );
};

export default Companys;