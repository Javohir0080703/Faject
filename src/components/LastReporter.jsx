import React from "react";
import { lastReporterData } from "../data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const LastReporter = ({ language, setLanguage }) => {
  const titleLang = [
    {
      title: "Последние новости",
      allLink: "Читать все",
      lang: "ru",
    },
    {
      title: "Last news",
      allLink: "Read all",
      lang: "eng",
    },
    {
      title: "So'ngi yangiliklar",
      allLink: "Hammasini o'qing",
      lang: "uzb",
    },
  ];
  return (
    <section className="py-16 bg-#040D12">
      <div className="containerb">
        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <h2
                key={index}
                className="text-white font-semibold 860px:text-6xl 580px:text-4xl text-3xl 860px:text-left  text-center 580px:leading-78px leading-8 mb-8"
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
              880: {
                slidesPerView: 3,
                // centeredSlides: true,
              },
              590: {
                slidesPerView: 2,
                // centeredSlides: true,
              },
            }}
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination]}
            className="mySwiper mb-8"
          >
            {lastReporterData.map((lan, index) => {
              if (language === lan.lang) {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full max-w-[340px] py-5 px-5 border-white border rounded-20px"
                  >
                    <Link to={`/last_reporter/${lan.id}`}>
                      <img className="mb-4" src={lan.img} alt={lan.title} />
                      <p className="text-white leading-8 text-base font-[300] mb-4">
                        {lan.data}
                      </p>
                      <p className="text-2xl leading-8 font-bold text-#9F95FF mb-1">
                        {lan.title}
                      </p>
                      <p className="font-medium text-base leading-8 text-white">
                        {lan.text.slice(0, 85)}...
                      </p>
                    </Link>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
        <div className="flex justify-end">
          {titleLang.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <Link
                to="/blog"
                  key={index}
                  className="py-1.5 px-4 border-2 border-white rounded-3xl text-white"
                >
                  {lan.allLink}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default LastReporter;
