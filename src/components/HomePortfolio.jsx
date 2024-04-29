import React, { useEffect, useState, useRef } from "react";
import { HomePortfolioData } from "../data.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const HomePortfolio = ({ language, setLanguage }) => {
  const [activeTab, setActiveTab] = useState("".trim());

  useEffect(() => {
    setActiveTab("".trim());
  }, []);

  const handleTabClick = (e) => {
    setActiveTab(e);
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
            className={`1030px:space-y-4 ${
              language === "ru" ? "flex" : "hidden"
            }   items-center justify-between 1030px:scroll-container whitespace-nowrap mb-5 space-x-1 `}
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
            className={`1030px:space-y-4 ${
              language === "eng" ? "1030px:block" : "hidden"
            }  flex items-center  1030px:scroll-container whitespace-nowrap mb-5 space-x-1 pb-3`}
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
            className={`1030px:space-y-4 ${
              language === "uzb" ? "1030px:block" : "hidden"
            }  flex items-center  1030px:scroll-container whitespace-nowrap mb-5 space-x-1 pb-3`}
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
        //   spaceBetween={4}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {HomePortfolioData.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <SwiperSlide
                  key={index}
                  className={`${activeTab === lan.tip ? "block" : "hidden"}`}
                >
                  <img
                    className="mb-6 w-full max-w-[523px] h-[260px]"
                    src={lan.img}
                    alt="Img"
                  />
                </SwiperSlide>
              );
            } else {
              return null; // Agar to'g'ri kategoriya bo'lmasa, null qaytarish
            }
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomePortfolio;
