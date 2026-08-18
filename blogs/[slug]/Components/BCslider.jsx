// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import BCard from "../Components/BCard";

// export default function BCSlider({ relatedBlogs }) {
//   return (
//     <>
//       <div className="fix12 py-[70px]">
//         <h2
//           className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-[#092241] mb-10 w-fit"
//           dangerouslySetInnerHTML={{ __html: "Other Blogs" }}
//         />
//         <div className="flex items-center gap-3">
//           <img
//             id="arrowleft"
//             className="cursor-pointer"
//             src="/buttonarrows/arrowleft.svg"
//             alt=""
//           />
//           <img
//             className="cursor-pointer"
//             id="arrowright"
//             src="/buttonarrows/arrowRight.svg"
//             alt=""
//           />
//         </div>
//         {relatedBlogs.length > 0 ? (
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={20}
//             slidesPerView={2}
//             navigation={{ nextEl: "#arrowright", prevEl: "#arrowleft" }}
//             navigation
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               320: { slidesPerView: 1 }, // Show 1 card on small screens
//             }}
//             className="pb-10"
//           >
//             {relatedBlogs.map((relatedBlog) => (
//               <SwiperSlide key={relatedBlog.id}>
//                 <BCard blog={relatedBlog} image={relatedBlog.featuredImage} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         ) : (
//           <p
//             className="text-center"
//             dangerouslySetInnerHTML={{
//               __html: "No related blogs available.",
//             }}
//           />
//         )}
//       </div>
//     </>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import BCard from "../Components/BCard";

// export default function BCSlider({ relatedBlogs }) {
//   useEffect(() => {
//     const swiperInstance = document.querySelector(".swiper").swiper;
//     if (swiperInstance) {
//       swiperInstance.params.navigation.nextEl = "#arrowright";
//       swiperInstance.params.navigation.prevEl = "#arrowleft";
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();
//     }
//   }, []);

//   return (
//     <div className="fix12 py-[70px]">
//       {/* Section Title */}

//       {/* Custom Navigation Arrows */}
//       <div className="flex items-center justify-between gap-3">
//         <h2
//           className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-[#092241] mb-0 w-fit"
//           dangerouslySetInnerHTML={{ __html: "Other Blogs" }}
//         />

//         <span className="flex item-center gap-2">
//           <img
//             id="arrowleft"
//             className="cursor-pointer"
//             src="/buttonarrows/arrowleft.svg"
//             alt="Previous"
//           />
//           <img
//             id="arrowright"
//             className="cursor-pointer"
//             src="/buttonarrows/arrowright.svg"
//             alt="Next"
//           />
//         </span>
//       </div>

//       {/* Swiper Slider */}
//       {relatedBlogs.length > 0 ? (
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={20}
//           slidesPerView={2}
//           navigation={false} // Hide default navigation
//           breakpoints={{
//             1280: { slidesPerView: 2 },
//             768: { slidesPerView: 1.5 },
//             320: { slidesPerView: 1 }, // Show 1 card on small screens
//           }}
//           className="pb-10"
//         >
//           {relatedBlogs.map((relatedBlog) => (
//             <SwiperSlide key={relatedBlog.id}>
//               <BCard blog={relatedBlog} image={relatedBlog.featuredImage} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p
//           className="text-center"
//           dangerouslySetInnerHTML={{ __html: "No related blogs available." }}
//         />
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BCard from "../Components/BCard";

export default function BCSlider({ relatedBlogs }) {
  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper").swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.nextEl = "#arrowright";
      swiperInstance.params.navigation.prevEl = "#arrowleft";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="fix12 py-[70px]">
      {/* Section Title */}

      {/* Custom Navigation Arrows */}
      <div className="flex items-center justify-between gap-3">
        <h2
          className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-[#092241] mb-0 w-fit"
          dangerouslySetInnerHTML={{ __html: "Other Blogs" }}
        />

        <span className="flex item-center gap-2">
          <img
            id="arrowleft"
            className="cursor-pointer"
            src="/buttonarrows/arrowleft.svg"
            alt="Previous"
          />
          <img
            id="arrowright"
            className="cursor-pointer"
            src="/buttonarrows/arrowright.svg"
            alt="Next"
          />
        </span>
      </div>

      {/* Swiper Slider */}
      {relatedBlogs.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={false} // Hide default navigation
          breakpoints={{
            1280: { slidesPerView: 2 },
            768: { slidesPerView: 1.5 },
            320: { slidesPerView: 1 }, // Show 1 card on small screens
          }}
          className="pb-10"
        >
          {relatedBlogs.map((relatedBlog) => (
            <SwiperSlide key={relatedBlog.id}>
              <BCard
                blog={relatedBlog}
                image={relatedBlog.featuredImage}
                categoryPath={relatedBlog.categoryPath} // ✅ pass category path
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p
          className="text-center"
          dangerouslySetInnerHTML={{ __html: "No related blogs available." }}
        />
      )}
    </div>
  );
}
