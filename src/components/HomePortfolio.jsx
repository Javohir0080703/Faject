import React, { useEffect, useState, useRef } from "react";
import { HomePortfolioData } from "../data.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const HomePortfolio = ({ language, setLanguage }) => {
  const [activeTab, setActiveTab] = useState();
  const [custom_swiper, set_swiper] = useState({});
  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const prevSlide = () => {
    custom_swiper.slidePrev();
  };

  useEffect(() => {
    setActiveTab("Website development");
  }, []);

  const handleTabClick = (tip) => {
    setActiveTab(tip);
  };

  let count = 0;
  for (let i = 0; i < HomePortfolioData.length; i++) {
    if (HomePortfolioData[i].lang === language) {
      count++;
    }
  }

  let WebsiteDevelopment = 0;
  let BotDevelopment = 0;
  let SMM = 0;
  let SEO = 0;
  let MobileDevelopment = 0;
  let contextualAdvertising = 0;

  for (let i = 0; i < count; i++) {
    if (HomePortfolioData[i].tip === "Website development") {
      WebsiteDevelopment++;
    }
    if (HomePortfolioData[i].tip === "Bot development") {
      BotDevelopment++;
    }
    if (HomePortfolioData[i].tip === "SMM") {
      SMM++;
    }
    if (HomePortfolioData[i].tip === "SEO") {
      SEO++;
    }
    if (HomePortfolioData[i].tip === "Mobile development") {
      MobileDevelopment++;
    }
    if (HomePortfolioData[i].tip === "contextual advertising") {
      contextualAdvertising++;
    }
  }

  return (
    <section className="py-[66px] bg-#040D12">
      <div className="containerb ">
        <div>
          {/* ru */}
          <ul
            className={` ${
              language === "ru" ? "flex" : "hidden"
            }   items-center justify-between scroll-container whitespace-nowrap mb-5 space-x-1 pb-3`}
          >
            <li>
              <button
                onClick={() => handleTabClick("Website development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Website development"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Разработка веб-сайта {WebsiteDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("Bot development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Bot development"
                    ? "bg-#9F95FF"
                    : "border-white border-2 "
                }`}
              >
                Разработка бота {BotDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("SMM")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "SMM" ? "bg-#9F95FF" : "border-white border-2"
                }`}
              >
                SMM {SMM}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("SEO")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "SEO" ? "bg-#9F95FF" : "border-white border-2"
                }`}
              >
                SEO {SEO}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("Mobile development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Mobile development"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Мобильная разработка {MobileDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("contextual advertising")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "contextual advertising"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Контекстная реклама {contextualAdvertising}
              </button>
            </li>
          </ul>
          {/* eng */}
          <ul
            className={`${
              language === "eng" ? "flex" : "hidden"
            }   items-center justify-between scroll-container whitespace-nowrap mb-5 space-x-1 pb-3`}
          >
            <li>
              <button
                onClick={() => handleTabClick("Website development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Website development"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Разработка веб-сайта {WebsiteDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("Bot development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Bot development"
                    ? "bg-#9F95FF"
                    : "border-white border-2 "
                }`}
              >
                Разработка бота {BotDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("SMM")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "SMM" ? "bg-#9F95FF" : "border-white border-2"
                }`}
              >
                SMM {SMM}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("SEO")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "SEO" ? "bg-#9F95FF" : "border-white border-2"
                }`}
              >
                SEO {SEO}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("Mobile development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Mobile development"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Мобильная разработка {MobileDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("contextual advertising")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "contextual advertising"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Контекстная реклама {contextualAdvertising}
              </button>
            </li>
          </ul>
          {/* uzb */}
          <ul
            className={` ${
              language === "uzb" ? "flex" : "hidden"
            }   items-center justify-between scroll-container whitespace-nowrap mb-5 space-x-1 pb-3`}
          >
            <li>
              <button
                onClick={() => handleTabClick("Website development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Website development"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Разработка веб-сайта {WebsiteDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("Bot development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Bot development"
                    ? "bg-#9F95FF"
                    : "border-white border-2 "
                }`}
              >
                Разработка бота {BotDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("SMM")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "SMM" ? "bg-#9F95FF" : "border-white border-2"
                }`}
              >
                SMM {SMM}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("SEO")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "SEO" ? "bg-#9F95FF" : "border-white border-2"
                }`}
              >
                SEO {SEO}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("Mobile development")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "Mobile development"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Мобильная разработка {MobileDevelopment}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("contextual advertising")}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === "contextual advertising"
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Контекстная реклама {contextualAdvertising}
              </button>
            </li>
          </ul>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onInit={(ev) => {
            set_swiper(ev);
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
              // centeredSlides: true,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper ${
            activeTab == "Website development" ? "block" : "hidden"
          }`}
        >
          {HomePortfolioData.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <SwiperSlide
                  key={index}
                  className={`${
                    lan.tip === "Website development" ? "" : "hidden"
                  } `}
                >
                  <div className="relative w-full max-w-[523px] mx-auto h-full max-h-[260px]">
                    <img
                      className="w-full max-w-[523px] mx-auto h-full max-h-[260px]"
                      src={lan.img}
                      alt="Img"
                    />
                    <p className="absolute text-xs leading-5 rounded-tl-3xl rounded-r-3xl top-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.title}
                    </p>
                    <p className="absolute text-xs leading-5 rounded-rt-3xl rounded-l-3xl  bottom-0 right-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onInit={(ev) => {
            set_swiper(ev);
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
              // centeredSlides: true,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper ${
            activeTab == "Mobile development" ? "block" : "hidden"
          }`}
        >
          {HomePortfolioData.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <SwiperSlide
                  key={index}
                  className={`${
                    lan.tip === "Mobile development" ? "" : "hidden"
                  } `}
                >
                  <div className="relative w-full max-w-[523px] mx-auto h-full max-h-[260px]">
                    <img
                      className="w-full max-w-[523px] mx-auto h-full max-h-[260px]"
                      src={lan.img}
                      alt="Img"
                    />
                    <p className="absolute text-xs leading-5 rounded-tl-3xl rounded-r-3xl top-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.title}
                    </p>
                    <p className="absolute text-xs leading-5 rounded-rt-3xl rounded-l-3xl  bottom-0 right-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onInit={(ev) => {
            set_swiper(ev);
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
              // centeredSlides: true,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper ${
            activeTab == "Bot development" ? "block" : "hidden"
          }`}
        >
          {HomePortfolioData.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <SwiperSlide
                  key={index}
                  className={`${
                    lan.tip === "Bot development" ? "" : "hidden"
                  } `}
                >
                  <div className="relative w-full max-w-[523px] mx-auto h-full max-h-[260px]">
                    <img
                      className="w-full max-w-[523px] mx-auto h-full max-h-[260px]"
                      src={lan.img}
                      alt="Img"
                    />
                    <p className="absolute text-xs leading-5 rounded-tl-3xl rounded-r-3xl top-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.title}
                    </p>
                    <p className="absolute text-xs leading-5 rounded-rt-3xl rounded-l-3xl  bottom-0 right-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onInit={(ev) => {
            set_swiper(ev);
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
              // centeredSlides: true,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper ${
            activeTab == "SMM" ? "block" : "hidden"
          }`}
        >
          {HomePortfolioData.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <SwiperSlide
                  key={index}
                  className={`${
                    lan.tip === "SMM" ? "" : "hidden"
                  } `}
                >
                  <div className="relative w-full max-w-[523px] mx-auto h-full max-h-[260px]">
                    <img
                      className="w-full max-w-[523px] mx-auto h-full max-h-[260px]"
                      src={lan.img}
                      alt="Img"
                    />
                    <p className="absolute text-xs leading-5 rounded-tl-3xl rounded-r-3xl top-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.title}
                    </p>
                    <p className="absolute text-xs leading-5 rounded-rt-3xl rounded-l-3xl  bottom-0 right-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onInit={(ev) => {
            set_swiper(ev);
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
              // centeredSlides: true,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper ${
            activeTab == "SEO" ? "block" : "hidden"
          }`}
        >
          {HomePortfolioData.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <SwiperSlide
                  key={index}
                  className={`${
                    lan.tip === "SEO" ? "" : "hidden"
                  } `}
                >
                  <div className="relative w-full max-w-[523px] mx-auto h-full max-h-[260px]">
                    <img
                      className="w-full max-w-[523px] mx-auto h-full max-h-[260px]"
                      src={lan.img}
                      alt="Img"
                    />
                    <p className="absolute text-xs leading-5 rounded-tl-3xl rounded-r-3xl top-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.title}
                    </p>
                    <p className="absolute text-xs leading-5 rounded-rt-3xl rounded-l-3xl  bottom-0 right-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onInit={(ev) => {
            set_swiper(ev);
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
              // centeredSlides: true,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper ${
            activeTab == "contextual advertising" ? "block" : "hidden"
          }`}
        >
          {HomePortfolioData.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <SwiperSlide
                  key={index}
                  className={`${
                    lan.tip === "contextual advertising" ? "" : "hidden"
                  } `}
                >
                  <div className="relative w-full max-w-[523px] mx-auto h-full max-h-[260px]">
                    <img
                      className="w-full max-w-[523px] mx-auto h-full max-h-[260px]"
                      src={lan.img}
                      alt="Img"
                    />
                    <p className="absolute text-xs leading-5 rounded-tl-3xl rounded-r-3xl top-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.title}
                    </p>
                    <p className="absolute text-xs leading-5 rounded-rt-3xl rounded-l-3xl  bottom-0 right-0 text-white py-1 px-2.5 bg-#040D12/[60%] ">
                      {lan.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
          {/* uzb */}
        <div className={`mt-8 flex items-center justify-between ${language === "ru" ? "" : "hidden"}`}>
          <button onClick={prevSlide} className="py-1.5 px-4 border-white font-semibold text-base leading-8 text-white opacity-[35%] border-2 rounded-[22px] ">
            Назад
          </button>
          <Link className="text-#9F95FF text-2xl leading-8">
            Смотреть все проекты
          </Link>
          <button onClick={nextSlide} className="py-1.5 px-4 border-white font-semibold text-base leading-8 text-white opacity-[35%] border-2 rounded-[22px] ">
            Далее
          </button>
        </div>
        {/* eng */}
        <div className={`mt-8 flex items-center justify-between ${language === "eng" ? "" : "hidden"}`}>
          <button onClick={prevSlide} className="py-1.5 px-4 border-white font-semibold text-base leading-8 text-white opacity-[35%] border-2 rounded-[22px] ">
            Назад
          </button>
          <Link className="text-#9F95FF text-2xl leading-8">
            Смотреть все проекты
          </Link>
          <button onClick={nextSlide} className="py-1.5 px-4 border-white font-semibold text-base leading-8 text-white opacity-[35%] border-2 rounded-[22px] ">
            Далее
          </button>
        </div>
        {/* uzb */}
        <div className={`mt-8 flex items-center justify-between ${language === "uzb" ? "" : "hidden"}`}>
          <button onClick={prevSlide} className="py-1.5 px-4 border-white font-semibold text-base leading-8 text-white opacity-[35%] border-2 rounded-[22px] ">
            Назад
          </button>
          <Link className="text-#9F95FF text-2xl leading-8">
            Смотреть все проекты
          </Link>
          <button onClick={nextSlide} className="py-1.5 px-4 border-white font-semibold text-base leading-8 text-white opacity-[35%] border-2 rounded-[22px] ">
            Далее
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
