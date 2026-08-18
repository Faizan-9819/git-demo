"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const InsideSlide = () => {
  const Insidecontent = [
    {
      title: "Global Trade Trends: How New Tariffs",
      img: "/binside/new1.png",
      tag: "Brand",
    },
    {
      title: " Diversity  at its core structured governance mechanism",

      img: "/binside/new2.png",
      tag: "Press Release",
    },
    {
      title: " Diversity  at its core structured governance mechanism",

      img: "/binside/new2.png",
      tag: "Press Release",
    },
  ];

  return (
    <div className="fix12">
      <div className="slideMain lg:py-[75px]  ">
        <div className="head flex items-center justify-between pb-[65px]">
          <h1 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px]">
            Other Blogs
          </h1>

          <div className="flex items-center gap-3">
            <img id="arrowleft" src="/buttonarrows/arrowleft.svg" alt="" />
            <img id="arrowright" src="/buttonarrows/arrowRight.svg" alt="" />
          </div>
        </div>

        {/* swiper */}
        <Swiper
          slidesPerGroup={1}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{ nextEl: "#arrowright", prevEl: "#arrowleft" }}
          speed={500}
          loop={true} // Optional: set loop={false} to test performance if needed
          breakpoints={{
            768: { slidesPerView: 1, spaceBetween: 0 },
            769: { slidesPerView: 2, spaceBetween: 20 },
          }}
        >
          {Insidecontent.map((slide, index) => (
            <SwiperSlide key={slide.tag + index}>
              <div className="bg-[#dddddd]">
                <div className="md:flex">
                  <div className="  w-[290px]">
                    <img src={slide.img} className="w-full " alt="" />
                  </div>
                  <div className="h-[300px] w-[320px]  md:h-[270px] py-8 px-6 flex flex-col justify-between ">
                    <div className="md:space-y-4 space-y-7 ">
                      <p className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]">
                        {slide.tag}
                      </p>
                      <h1 className="fsans-600 text-xl text-[#565656] ">
                        {slide.title}
                      </h1>
                    </div>

                    <div className="flex items-center gap-1">
                      <img src="/binside/blogInGreyBtn.svg" alt="" />
                      <p className="text-lg">Learn More </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InsideSlide;
