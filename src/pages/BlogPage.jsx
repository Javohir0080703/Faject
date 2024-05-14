import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { lastReporterData } from "../data";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const BlogPage = ({ language, setLanguage }) => {
  const titleLang = [
    { title: "Блог", lang: "ru" },
    { title: "Blog", lang: "eng" },
    { title: "Blog", lang: "uzb" },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="py-16 bg-#040D12 select-none">
      <div className="containerb">
        {titleLang.map((e, index) => {
          if (language === e.lang) {
            return (
              <h2
                key={index}
                className="text-white 531px:text-64px text-5xl 531px:leading-78px leading-10 max-531px:text-center font-semibold tracking-[-4%] mb-8"
              >
                {e.title}
              </h2>
            );
          }
          return null; 
        })}

        <div className="">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              880: { slidesPerView: 3 },
              590: { slidesPerView: 2 },
            }}
            pagination={pagination}
            className="mySwiper relative  pb-[65px]"
          >
            {lastReporterData.map((e, index) => {
              if (language === e.lang) {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full 580px:max-w-[340px]  py-5 px-5 border-white border rounded-20px "
                  >
                    <Link to={`/last_reporter/${e.id}`}>
                      <img
                        className="mb-4 max-580px:w-full "
                        src={e.img}
                        alt={e.title}
                      />
                      <p className="text-white leading-8 text-base font-[300] mb-4">
                        {e.data}
                      </p>
                      <p className="text-2xl leading-8 font-bold text-#9F95FF mb-1">
                        {e.title}
                      </p>
                      <p className="font-medium text-base leading-8 text-white">
                        {e.text.slice(0, 85)}...
                      </p>
                    </Link>
                  </SwiperSlide>
                );
              }
              return null; 
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;