"use client";
import React, { useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "@styles/home_swiper.css";

export default function Home_Swiper() {
  useEffect(() => {
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    var swiperSlide2 = document.createElement("SwiperSlide");
    swiperSlide2.className = "swiper-slide";
    swiperSlide2.style.backgroundColor = "#008800";
    swiperWrapper.appendChild(swiperSlide2);
    let image2 =
      "https://plus.unsplash.com/premium_photo-1663100683890-199a14775a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnVyc2luZyUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
    var cardImage = document.createElement("img");
    cardImage.src = image2;
    swiperSlide2.appendChild(cardImage);
    var cardHeading = document.createElement("h2");
    cardHeading.textContent = "THE HISTORY OF NAMSA";
    swiperSlide2.appendChild(cardHeading);
    var cardParagraph = document.createElement("p");
    cardParagraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.";
    swiperSlide2.appendChild(cardParagraph);
    var iconElement2 = document.createElement("i");
    iconElement2.className = "fa-solid fa-chevron-right";
    swiperSlide2.appendChild(iconElement2);

    var swiperSlide = document.createElement("SwiperSlide");
    swiperSlide.className = "swiper-slide";
    swiperSlide.style.backgroundColor = "#E3E725";
    swiperWrapper.appendChild(swiperSlide);
    let image =
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnVyc2luZyUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
    var cardImage = document.createElement("img");
    cardImage.src = image;
    swiperSlide.appendChild(cardImage);
    var cardHeading = document.createElement("h2");
    cardHeading.textContent = "THE HISTORY OF NAMSA";
    cardHeading.style.color = "black";
    swiperSlide.appendChild(cardHeading);
    var cardParagraph = document.createElement("p");
    cardParagraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.";
    cardParagraph.style.color = "black";
    swiperSlide.appendChild(cardParagraph);
    var iconElement = document.createElement("i");
    iconElement.className = "fa-solid fa-chevron-right";
    iconElement.style.color = "black";
    swiperSlide.appendChild(iconElement);

    var swiperSlide3 = document.createElement("SwiperSlide");
    swiperSlide3.className = "swiper-slide";
    swiperSlide3.style.backgroundColor = "#008800";
    swiperWrapper.appendChild(swiperSlide3);
    let image3 =
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG51cnNpbmclMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";
    var cardImage = document.createElement("img");
    cardImage.src = image3;
    swiperSlide3.appendChild(cardImage);
    var cardHeading = document.createElement("h2");
    cardHeading.textContent = "THE HISTORY OF NAMSA";
    swiperSlide3.appendChild(cardHeading);
    var cardParagraph = document.createElement("p");
    cardParagraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.";
    swiperSlide3.appendChild(cardParagraph);
    var iconElement3 = document.createElement("i");
    iconElement3.className = "fa-solid fa-chevron-right";
    swiperSlide3.appendChild(iconElement3);

    var swiperSlide4 = document.createElement("SwiperSlide");
    swiperSlide4.className = "swiper-slide";
    swiperWrapper.appendChild(swiperSlide4);
    let image4 =
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
    var cardImage = document.createElement("img");
    cardImage.src = image4;
    swiperSlide4.appendChild(cardImage);
    var cardHeading = document.createElement("h2");
    cardHeading.textContent = "THE CONSTITUTION OF NAMSA";
    swiperSlide4.appendChild(cardHeading);
    var cardParagraph = document.createElement("p");
    cardParagraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.";
    swiperSlide4.appendChild(cardParagraph);
    var iconElement3 = document.createElement("i");
    iconElement3.className = "fa-solid fa-chevron-right";
    swiperSlide4.appendChild(iconElement3);

    // Event handling for the swiper slide
    const handleSwiperSlideClick = () => {
      const src = "@app/about-us/nursing-history";
      window.open(src);
    };
    document.querySelector(".slide1").onClick = () => {
      handleSwiperSlideClick;
    };
    const handleSwiperSlide2Click = () => {
      const src = "@app/about-us/namsa-history";
      window.open(src);
    };
    swiperSlide2.onClick = () => {
      handleSwiperSlide2Click;
    };
    const handleSwiperSlide4Click = () => {
      const src = "@app/about-us/namsa-contitution";
      window.open(src);
    };
    swiperSlide4.onClick = () => {
      handleSwiperSlide4Click;
    };
  });
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
          depth: 135,
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
