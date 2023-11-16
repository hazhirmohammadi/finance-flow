import Image from "next/image";

const News = () => {
   return (
       <section className="text-white mb-36">
          <div className="flex flex-row justify-between max-sm:flex-col col-span-12  lg:px-44 md:px-5 max-sm:px-5 mb-12">
             <h3 className="text-3xl font-bold">Browse our latest news</h3>
             <p className="text-sm w-1/3 max-sm:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .</p>
          </div>

          <section className="text-white  grid grid-cols-12 lg:px-40 md:px-5 max-sm:px-5 gap-4 relative">

             {/***/}
             <div className="col-span-4 max-sm:col-span-12 flex flex-col  rounded-[40px]  w-full">
                <div className="rounded-t-[40px] w-full">
                   <Image width={382} height={215} className="rounded-t-[40px] w-full"
                          src="/assets/homeImg/section8/sec8|1.png" alt=""/>

                   <div className="absolute w-fit bg-[#0328EE] py-2 px-3 rounded-full top-1/3 ml-6 hidden xl:flex">Products</div>
                </div>
                <div className="flex flex-col bg-[#010D50] px-6 lg:pt-14  md:pt-7 pb-8 rounded-b-[40px]">
                   <div>
                      <h5 className="xl:text-2xl lg:text-lg font-bold mb-4">The Basics about Cryptocurrency</h5>
                      <p className="font-light text-sm max-md:text-[10px]">Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec
                         diammeo.</p>
                   </div>
                   <div className="bg-blue-50 mt-8 mb-6 border-b-gray-500 border-[1px] rounded-full opacity-50"></div>
                   <div className="flex flex-row gap-4">
                      <div className="rounded-full">
                         <Image width={50} height={50} className="rounded-[40px]"
                                src="/assets/homeImg/section8/sec8|2.png" alt="profile"/>

                      </div>
                      <div>
                         <span>Alex Turner</span>
                         <p>August 2, 2021</p>
                      </div>
                   </div>
                </div>
             </div>
             {/***/}
             <div className="col-span-4 max-sm:col-span-12 flex flex-col  rounded-[40px]  w-full">
                <div className="rounded-t-[40px] w-full">
                   <Image width={382} height={215} className="rounded-t-[40px] w-full"
                          src="/assets/homeImg/section8/sec8|1.png" alt=""/>

                   <div className="absolute w-fit bg-[#0328EE] py-2 px-3 rounded-full top-1/3 ml-6 hidden xl:flex">Products</div>
                </div>
                <div className="flex flex-col bg-[#010D50] px-6 lg:pt-14 md:pt-7 pb-8 rounded-b-[40px]">
                   <div>
                      <h5 className="xl:text-2xl lg:text-lg font-bold mb-4">The Basics about Cryptocurrency</h5>
                      <p className="font-light text-sm max-md:text-[10px]">Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec
                         diammeo.</p>
                   </div>
                   <div className="bg-blue-50 mt-8 mb-6 border-b-gray-500 border-[1px] rounded-full opacity-50"></div>
                   <div className="flex flex-row gap-4">
                      <div className="rounded-full">
                         <Image width={50} height={50} className="rounded-[40px]"
                                src="/assets/homeImg/section8/sec8|2.png" alt="profile"/>

                      </div>
                      <div>
                         <span>Alex Turner</span>
                         <p>August 2, 2021</p>
                      </div>
                   </div>
                </div>
             </div>
             {/***/}
             <div className="col-span-4 max-sm:col-span-12 flex flex-col  rounded-[40px]  w-full">
                <div className="rounded-t-[40px] w-full">
                   <Image width={382} height={215} className="rounded-t-[40px] w-full"
                          src="/assets/homeImg/section8/sec8|1.png" alt=""/>

                   <div className="absolute w-fit bg-[#0328EE] py-2 px-3 rounded-full top-1/3 ml-6 hidden xl:flex">Products</div>
                </div>
                <div className="flex flex-col bg-[#010D50] px-6 lg:pt-14 md:pt-7 pb-8 rounded-b-[40px]">
                   <div>
                      <h5 className="xl:text-2xl lg:text-lg font-bold mb-4">The Basics about Cryptocurrency</h5>
                      <p className="font-light text-sm max-md:text-[10px]">Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec
                         diammeo.</p>
                   </div>
                   <div className="bg-blue-50 mt-8 mb-6 border-b-gray-500 border-[1px] rounded-full opacity-50"></div>
                   <div className="flex flex-row gap-4">
                      <div className="rounded-full">
                         <Image width={50} height={50} className="rounded-[40px]"
                                src="/assets/homeImg/section8/sec8|2.png" alt="profile"/>

                      </div>
                      <div>
                         <span>Alex Turner</span>
                         <p>August 2, 2021</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>
          <div className="col-span-12 w-full flex justify-center mt-10">
             <button className="py-3 px-4 bg-gray-600 text-white  rounded-full">View All Articles</button>
          </div>
       </section>
   );
};

export default News;