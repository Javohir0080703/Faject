import React, { useRef, useState } from "react";
import smile from "../img/HomeSmile.svg";
import plus from "../img/Plus.svg";
import minus from "../img/minus.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeReviewsData } from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const HomeReviews = ({ language, setLanguage }) => {
  const titleLang = [
    {
      title: "Последние отзывы",
      allLink:"Читать все",
      lang: "ru",
    },
    {
      title: "Latest reviews",
      allLink:"Read all",
      lang: "eng",
    },
    {
      title: "Eng so'nggi sharhlar",
      allLink:"Hammasini o'qing",
      lang: "uzb",
    },
  ];
  return (
    <section className="py-16 bg-#040D12 select-none">
      <div className="containerb">
        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <h2
                key={index}
                className="font-semibold 860px:text-64px 531px:text-5xl text-3xl 860px:leading-78px 531px:leading-10 leading-8 text-white mb-8"
              >
                {lan.title}
              </h2>
            );
          }
        })}
        <div>
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              850: {
                slidesPerView: 2,
                // centeredSlides: true,
              },
            }}
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination]}
            className="mySwiper pb-14 relative"
          >
            {HomeReviewsData.map((lan, index) => {
              if (language === lan.lang) {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full 440px:max-w-780px max-w-440px py-4 px-7 border-white border rounded-20px"
                  >
                    <div className="flex items-center mb-2.5">
                      <img className="max-531px:w-[46px]" src={smile} alt="Smile" />
                      <h3 className="text-white font-bold 531px:text-29px text-[20px]  leading-8 tracking-[-1%] ml-5">
                        {lan.title}
                      </h3>
                    </div>
                    <div>
                      <div className="flex items-center ">
                        <img className="max-531px:w-[16px]" src={plus} alt="Plus" />
                        <p className="font-medium 531px:text-base text-xs leading-8 tracking-[-1%] text-#CBC6FD ml-2.5">
                          {lan.plus}
                        </p>
                      </div>
                      <p className="text-white 531px:text-base text-xs leading-5 tracking-[-1%] pl-[34px]">
                        {lan.text}
                        <span
                          className={`${
                            lan.text.length > 0 ? "hidden" : "block"
                          }`}
                        >
                          {lan.default}
                        </span>
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center ">
                        <img className="max-531px:w-[16px] " src={minus} alt="minus" />
                        <p className="font-medium 531px:text-base text-xs leading-8 tracking-[-1%] text-#CBC6FD ml-2.5">
                          {lan.minus}
                        </p>
                      </div>
                      <p className="text-white 531px:text-base text-xs leading-5 tracking-[-1%] pl-[34px]">
                        {lan.negativeText}
                        <span
                          className={`${
                            lan.negativeText.length > 0 ? "hidden" : "block"
                          }`}
                        >
                          {lan.default}
                        </span>
                      </p>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
        <div className="flex justify-end">
          {
            titleLang.map((lan, index)=>{
              if(language === lan.lang){
                return(
                  <Link to="/reviews" key={index} className={`py-1.5 px-4 border-2 border-white rounded-3xl text-white `}>{lan.allLink}</Link>
                )
              }
            })
          }
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
