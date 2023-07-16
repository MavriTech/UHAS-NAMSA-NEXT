"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@styles/home_swiper.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Home_Swiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 130,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper mySwiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide slide1">
            <img src="\images\akwaba_img\WhatsApp Image 2023-06-02 at 11.53.31 PM (1).jpeg" />
            <h2>THE HISTORY OF NURSING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
            <i className="fa-solid fa-chevron-right"></i>
          </SwiperSlide>
        </div>
        `
        <div className="swiper-wrapper">
          <SwiperSlide>
            <img src="\images\akwaba_img\WhatsApp Image 2023-06-02 at 11.53.31 PM (1).jpeg" />
            <h2>THE HISTORY OF NURSING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
            <i className="fa-solid fa-chevron-right"></i>
          </SwiperSlide>
        </div>
        `
        <div className="swiper-wrapper">
          <SwiperSlide>
            <img src="\images\akwaba_img\WhatsApp Image 2023-06-02 at 11.53.28 PM.jpeg" />
            <h2>THE HISTORY OF NURSING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
            <i className="fa-solid fa-chevron-right"></i>
          </SwiperSlide>
        </div>
        <div className="swiper-wrapper">
          <SwiperSlide>
            <img src="\images\akwaba_img\WhatsApp Image 2023-06-02 at 11.53.28 PM (1).jpeg" />
            <h2>THE HISTORY OF NURSING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
            <i className="fa-solid fa-chevron-right"></i>
          </SwiperSlide>
        </div>
        <div className="swiper-wrapper">
          <SwiperSlide>
            <img src="\images\akwaba_img\WhatsApp Image 2023-06-02 at 11.53.29 PM.jpeg" />
            <h2>THE HISTORY OF NURSING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
            <i className="fa-solid fa-chevron-right"></i>
          </SwiperSlide>
        </div>
        <div className="swiper-button-next">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
