"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    title: "Easy to Use",
    name: "Jenny Wilson",
    role: "Graphic Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    review:
      "You made it so simple. The Phonico app is much faster and easier to understand. I enjoyed the convenient activation process and flexibility.",
    rating: 5,
  },
  {
    id: 2,
    title: "Smooth Connection",
    name: "Alexander",
    role: "Freelance React Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    review:
      "eSIM worked perfectly on my phone. No hassle with setup, and the connection was smooth throughout the trip. I'm super happy with it!",
    rating: 5,
  },
  {
    id: 3,
    title: "Affordable Plans",
    name: "Jacob Jones",
    role: "Digital Marketer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    review:
      "Phonico offers cost-effective plans. It was an excellent experience with Phonico eSIM to enjoy my travel adventure.",
    rating: 5,
  },
  {
    id: 4,
    title: "Excellent Coverage",
    name: "Sarah Jenkins",
    role: "Frequent Traveler",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    review:
      "Absolutely flawless! Used Phonico eSIM during my 3-week road trip across California and Nevada. Fast data activation via QR code.",
    rating: 5,
  },
  {
    id: 5,
    title: "Amazing Service",
    name: "David Miller",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    review:
      "The activation was instant, pricing was fair, and network quality stayed excellent throughout Europe.",
    rating: 5,
  },
];

export default function ReviewsCarousel() {
  return (
    <section className="relative py-24 ">
      {/* Background Image - Height h-44 se badha kar h-[280px] kar di hai */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[420px] max-w-[700px] mx-auto bg-center bg-cover bg-no-repeat pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "url('https://phonico.com/images/reviewBg.svg')",
        }}
      />

      <div className="relative z-10 max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          speed={900}
          grabCursor
          spaceBetween={16}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          /* 
        [&_.swiper-pagination]:bottom-[5px] kiya hai taake badi image ke center/ander 
        ye buttons sahi tarike se adjust ho sakein.
      */
          className="pb-[90px] relative
        [&_.swiper-slide]:h-auto 
        [&_.swiper-pagination]:bottom-[5px]
        [&_.swiper-pagination-bullet]:w-[9px] 
        [&_.swiper-pagination-bullet]:h-[9px] 
        [&_.swiper-pagination-bullet]:opacity-35 
        [&_.swiper-pagination-bullet]:bg-[#7c3aed] 
        [&_.swiper-pagination-bullet]:transition-all 
        [&_.swiper-pagination-bullet]:duration-300 
        [&_.swiper-pagination-bullet-active]:w-[28px] 
        [&_.swiper-pagination-bullet-active]:rounded-full 
        [&_.swiper-pagination-bullet-active]:bg-[#2563eb] 
        [&_.swiper-pagination-bullet-active]:opacity-100"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="pb-6 pt-2">
              <div className="bg-white  border border-gray-100 p-7 h-full flex flex-col justify-between    ">
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-8">
                    "{item.review}"
                  </p>
                </div>

                <div className=" pt-5 flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
