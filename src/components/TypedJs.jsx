import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import autoprefixer from "autoprefixer";
const TypedJs = ({ language, setLanguage }) => {
  const TypedLang = [
    // ru
    {
      title: "Разработка бота",
      lang: "ru",
    },
    {
      title: "SMM",
      lang: "ru",
    },
    {
      title: "SEO",
      lang: "ru",
    },
    {
      title: "Мобильная разработка",
      lang: "ru",
    },
    {
      title: "Разработка бота",
      lang: "ru",
    },
    {
      title: "Мобильная разработка",
      lang: "ru",
    },
    // eng
    {
      title: "Bot development",
      lang: "eng",
    },
    {
      title: "SMM",
      lang: "eng",
    },
    {
      title: "SEO",
      lang: "eng",
    },
    {
      title: "Mobile development",
      lang: "eng",
    },
    {
      title: "Bot development",
      lang: "eng",
    },
    {
      title: "Mobile development",
      lang: "eng",
    },
    // uzb
    {
      title: "Botni rivojlantirish",
      lang: "uzb",
    },
    {
      title: "SMM",
      lang: "uzb",
    },
    {
      title: "SEO",
      lang: "uzb",
    },
    {
      title: "Mobil rivojlanish",
      lang: "uzb",
    },
    {
      title: "Botni rivojlantirish",
      lang: "uzb",
    },
    {
      title: "Mobil rivojlanish",
      lang: "uzb",
    },
  ];
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes myAnimation {
        0% { right: -${document.querySelector(".text").offsetWidth + 10}px; }
        100% { right: 100%; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const style = {
    position: "absolute",
    right: "-100px", // initial position
    animation: "myAnimation 24s linear infinite",
  };

  return (
    <section className="h-[80px] bg-#040D12">
      <div className=" relative">
        <div className="group" style={style}>
          <div
            className={`text flex items-center space-x-5 sm:space-x-[66px] font-[900] text-2xl sm:text-[64px] leading-7 sm:leading-[78px] whitespace-nowrap `}
          >
            {TypedLang.map((lan, index) => {
              if (language === lan.lang) {
                return (
                  <p
                  key={index}
                    className={`${
                      index % 2 === 0 ? "text-white" : "text-#9F95FF"
                    }`}
                  >
                    {lan.title}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypedJs;
