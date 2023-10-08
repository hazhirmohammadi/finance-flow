"use client"
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination} from "swiper/modules";


// const swiper = new Swiper('.swiper', {
//    slidesPerView: 1,
//    spaceBetween: 10,
//    // using "ratio" endpoints
//    breakpoints: {
//       '@0.75': {
//          slidesPerView: 2,
//          spaceBetween: 20,
//       },
//       '@1.00': {
//          slidesPerView: 3,
//          spaceBetween: 40,
//       },
//       '@1.50': {
//          slidesPerView: 4,
//          spaceBetween: 50,
//       },
//    }
// });

const Comment = () => {
   return (
       <div className="mb-20">
          <div className="flex flex-row text-white justify-between px-44 max-sm:px-5 mb-9 items-center max-sm:justify-center max-sm:flex-col">
             <h5 className="text-2xl font-bold  max-sm:mb-5 ">What our users say?</h5>
             <button className="bg-[#0328EE] uppercase font-bold py-4  text-white w-fit max-sm:w-full justify-center  px-8 rounded-[80px] flex">Download App</button>
          </div>

          <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                 clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper "
              breakpoints={{
                 375:{
                    slidesPerView: 1,
                    spaceBetween: 10,
                 },
                 425:{
                    slidesPerView: 1,
                    spaceBetween: 10,
                 },
                 640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                 },
                 768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                 },
                 1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                 },
              }}
          >
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>
             <SwiperSlide  className="comment_body">
                <p className="  ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et
                   pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>

                <div className="comment_avatar_body">
                   <div className="comment_avatar"></div><span>Hazhir  1</span>
                </div>
             </SwiperSlide>



          </Swiper>
       </div>
   );
};

export default Comment;